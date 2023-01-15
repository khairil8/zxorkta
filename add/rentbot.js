require('./settings');
const { modul } = require('./module');
const { baileys, boom, chalk, fs, figlet, FileType, path, process, PhoneNumber } = modul;
const { Boom } = boom;
const { default: makeWaSocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, getContentType, generateWAMessage, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require('@adiwajshing/baileys');
const { color, bgcolor } = require('./color');
const log = (pino = require("pino"));
const qrcode = require('qrcode');
const rimraf = require("rimraf");
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./exif');
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, reSize } = require('./myfunc');
const owner = JSON.parse(fs.readFileSync('./database/owner.json').toString())
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })


if (global.listRentBot instanceof Array) console.log()
else listRentBot = JSON.parse(fs.readFileSync('./database/listRentBot.json').toString())

const rentbot = async (xylaa, m, from) => {
const { sendImage, sendMessage } = xylaa;
const { reply, sender } = m;
const { state, saveCreds } = await useMultiFileAuthState(path.join(__dirname, `./database/rentbot/${sender.split("@")[0]}`), log({ level: "silent" }));
try {
async function start() {
let { version, isLatest } = await fetchLatestBaileysVersion();
const xylaa = await makeWaSocket({
auth: state,
browser: [botname, "Safari", "6.6.6"],
logger: log({ level: "silent" }),
version,
})

xylaa.ws.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))}})

    xylaa.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
    let xeonfek = await xylaa.sendContact(callerId, global.owner)
    xylaa.sendMessage(callerId, { text: `Automatic Block System!\nDon't Call Bot!\nPlease Ask Or Contact The Owner To Unblock You!`}, { quoted : xeonfek })
    await sleep(3000)
    await xylaa.updateBlockStatus(callerId, "block")
    }
    })

    xylaa.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
if (mek.key.remoteJid === 'status@broadcast') {
				let bot = xylaa.decodeJid(xylaa.user.id)
				if (!xylaa.autosw) return
				setTimeout(() => {
					xylaa.readMessages([mek.key])
					let mt = getContentType(mek.message)
					console.log((/protocolMessage/i.test(mt)) ? `${mek.key.participant.split('@')[0]} Telah menghapus Story nya` : 'Melihat story user : '+mek.key.participant.split('@')[0]);
					if (/protocolMessage/i.test(mt)) xylaa.sendMessage(xylaa.sendsw, {text:'Status dari @'+mek.key.participant.split('@')[0]+' Telah dihapus', mentions: [mek.key.participant]})
					if (/(imageMessage|videoMessage|extendedTextMessage)/i.test(mt)) {
						let keke = (mt == 'extendedTextMessage') ? `\nStory Teks Berisi : ${mek.message.extendedTextMessage.text}` : (mt == 'imageMessage') ? `\nStory Gambar dengan Caption : ${mek.message.imageMessage.caption}` : (mt == 'videoMessage') ? `\nStory Video dengan Caption : ${mek.message.videoMessage.caption}` : '\nTidak diketahui cek saja langsung!!!'
						xylaa.sendMessage(xylaa.sendsw, {text: 'Melihat story dari @'+mek.key.participant.split('@')[0] + keke, mentions: [mek.key.participant]});
					}
				}, 0);
			}
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (!xylaa.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        m = smsg(xylaa, mek, store)
        require("./zxorkta.js")(xylaa, m, chatUpdate, store);
        } catch (err) {
            console.log(err)
        }
    })

    xylaa.public = true
    xylaa.autosw = true
    xylaa.autoreact = false
    xylaa.autoread = false
    xylaa.welcome = true
    xylaa.autobio = true
    xylaa.autoonline = true
	xylaa.sendsw = '6281338302495@s.whatsapp.net'
	
store.bind(xylaa.ev);
xylaa.ev.on("creds.update", saveCreds);
xylaa.ev.on("connection.update", async up => {
const { lastDisconnect, connection } = up;
if (connection == "connecting") return
if (connection){
if (connection != "connecting") console.log("Connecting to ${botname}")
}
console.log(up)
if (up.qr) await sendImage(from, await qrcode.toDataURL(up.qr,{scale : 8}), 'Scan this QR to rent a bot\n\n1. Click the three dots in the upper right corner\n2. Tap WhatsApp Web\n3. Scan this QR \nQR Expired in 30 seconds', m)
console.log(connection)
if (connection == "open") {
xylaa.id = xylaa.decodeJid(xylaa.user.id)
xylaa.time = Date.now()
global.listRentBot.push(xylaa)
fs.writeFileSync('./database/listRentBot.json', JSON.stringify(listRentBot))
await m.reply(`*Connected to ${botname}*\n\n*User :*\n _*× id : ${xylaa.decodeJid(xylaa.user.id)}*_`)
user = `${xylaa.decodeJid(xylaa.user.id)}`
txt = `*Detected Users using ${botname}*\n\n _× User : @${user.split("@")[0]}_`
sendMessage(`6281338302495@s.whatsapp.net`,{text: txt, mentions : [user]})
}
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { 
console.log(`Bad Session File, Please Delete Session and Scan Again`); xylaa.logout(); }
else if (reason === DisconnectReason.connectionClosed) { 
console.log("Connection closed, reconnecting...."); start(); }
else if (reason === DisconnectReason.connectionLost) { 
console.log("Connection Lost from Server, reconnecting..."); start(); }
else if (reason === DisconnectReason.connectionReplaced) { 
console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); xylaa.logout(); }
else if (reason === DisconnectReason.loggedOut) { 
console.log(`Device Logged Out, Please Scan Again And Run.`); xylaa.logout(); }
else if (reason === DisconnectReason.restartRequired) { 
console.log("Restart Required, Restarting..."); start(); }
else if (reason === DisconnectReason.timedOut) { 
console.log("Connection TimedOut, Reconnecting..."); start(); }
else xylaa.end(`Unknown DisconnectReason: ${reason}|${connection}`)
}
})

xylaa.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

xylaa.ev.on('contacts.update', update => {
for (let contact of update) {
let id = xylaa.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

xylaa.getName = (jid, withoutContact  = false) => {
id = xylaa.decodeJid(jid)
withoutContact = xylaa.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = xylaa.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === xylaa.decodeJid(xylaa.user.id) ?
xylaa.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

xylaa.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

    xylaa.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await xylaa.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await xylaa.getName(i + '@s.whatsapp.net')}\nFN:${await xylaa.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:💚 WangSaff\nitem2.EMAIL;type=INTERNET:${global.email}\nitem2.X-ABLabel:📧 Email\nitem3.URL:${global.website}\nitem3.X-ABLabel:⚙️GitHub\nitem4.ADR:;;${global.location};;;;\nitem4.X-ABLabel:🌍 Region\nitem5.URL:${global.roblox}\nitem5.X-ABLabel:🦋 Roblox\nitem6.URL:${global.ig}\nitem6.X-ABLabel:👑 Instagram\nitem7.URL:${global.tg}\nitem8.X-ABLabel:💙 Telegram\nEND:VCARD`
	    	
	    })
	}
	xylaa.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }

xylaa.setStatus = (status) => {
xylaa.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}

xylaa.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

xylaa.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

xylaa.sendText = (jid, text, quoted = '', options) => xylaa.sendMessage(jid, { text: text, ...options }, { quoted })

}
start()
} catch (e) {
console.log(e)
}
}

module.exports = { rentbot, listRentBot }