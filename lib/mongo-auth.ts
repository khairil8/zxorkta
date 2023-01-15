const { WAProto } = require('@adiwajshing/baileys');
const { BufferJSON, initAuthCreds } = require('@adiwajshing/baileys/lib/Utils');
const { Collection, Document, MongoClient } = require('mongodb');
const chalk = require('chalk');

export class MongoDbAuth{

    static mongoUrl = "mongodb+srv://cecilialucia<ceciliamd123>@ac-faivj8i-shard-00-01.yu1qcvl.mongodb.net/ceciliabackup/?retryWrites=true&w=majority"
    sim: string
    private collection: Collection
    private document: Document
    private creds

    private asyncTasks: Promise<any>[] = []

    constructor( sim :string ){
        this.sim = sim
    }
    
    async init(){
        var mongoClient = new MongoClient( MongoDbAuth.mongoUrl );
        await new Promise((resolve,reject)=>{
            mongoClient.connect(async err => {
                if( err ){
                    console.error( chalk.red("ERROR: Not connected\n",err) )
                    return reject(err)
                }
                console.log( chalk.greenBright('⚡️MONGO CONNECTED\n') )
                this.collection = mongoClient.db("DBName").collection("Sims");
                this.document = (await this.collection.findOneAndUpdate({ _id: this.sim },
                    {
                      $setOnInsert: {},
                    },
                    {
                      returnDocument: "after",
                      upsert: true,
                    })).value
                resolve(true)
            });
        })
    }

    async writeData( data, field: string ){
        this.document = (await this.collection.findOneAndUpdate(
            { _id: this.sim },
            { $set:
               {
                 [field]: JSON.parse(JSON.stringify(data, BufferJSON.replacer))
                }
            },
            { returnDocument: "after" }
         )).value
    }
    readData( field: string ) {
        try {
            const data = JSON.stringify( this.document[ field ] )
            return JSON.parse(data, BufferJSON.reviver)
        } catch (error) {
            return null
        }
    }
    async removeData( field: string ) {
        try {
            this.document = (await this.collection.findOneAndUpdate(
                { _id: this.sim },
                { $unset:
                   {
                     [field]: ""
                    }
                },
                { returnDocument: "after" }
             )).value
        } catch (_a) { }
    }

    methods(){
        var creds = this.readData('creds')
        // @ts-ignore:next-line
        this.creds = creds || (0, initAuthCreds)()
        return {
            state: {
                creds: this.creds ,
                keys: {
                    get: async (type, ids) => {
                        const data = {}
                        await Promise.all(
                            ids.map(async (id) => {
                                let value = await this.readData(`${type}-${id}`)
                                if (type === 'app-state-sync-key') {
                                    value =
                                        WAProto.AppStateSyncKeyData.fromObject(data)
                                }
                                data[id] = value
                            })
                        )
                        return data
                    },
                    set: async (data) => {
                        for (const category of Object.keys(data)) {
                            for (const id of Object.keys(data[category])) {
                                const value = data[category][id]
                                const key = `${category}-${id}`
                                this.asyncTasks.push(
                                    value ? this.writeData(value, key) : this.removeData(key)
                                )
                            }
                        }
                        await Promise.all(this.asyncTasks)
                        this.asyncTasks = []
                    },
                },
            },
            saveCreds: () => {
                return this.writeData(this.creds, 'creds')
            },
        }
    }
}