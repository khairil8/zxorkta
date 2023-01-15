const fs = require('fs')
const chalk = require('chalk')

// APIKEYS !! \\
global.zenzkey = 'yourapikey',
global.zxorkey = 'yourapikey',
global.zenzkey2 = 'yourapikey',
global.ckey = 'yourapikey',
global.zeeone = 'yourapikey',
global.lolkey = 'yourapikey',
global.frkey = 'yourapikey',
global.danzz = 'yourapikey',
global.apidanz = 'yourapikey',

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = false //auto available (true to on, false to off)
global.playmusic = false //auto  play music when node zxork.js (Terminal Must Support FFPLAY)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.saweria = "https://saweria.co/xylaa" // saweria donation
global.sociabuzz = "https://sociabuzz.com/luciaximena/tribe" // saweria donation
global.nyawer = "https://nyawer.co/cecilia/showcase" // saweria donation
global.groupwea = "https://chat.whatsapp.com/EJ0c8rr1jrJK7BvxNOZFs2" // group bot
global.vcardowner = ['6281338302495'] //number
global.allpay = "082146482998" // nomor pertama / first number donate
global.ownername = 'Cecilia Lucia Ximena' //owner
global.email = "📧 vynx14u@gmail.com" //email
global.website = "luciaximena.site" //github name
global.location = "🌍 Isekai, Taman Hiburan Milf, Pemandian Umum Wanita" //location
global.roblox = "👾 Roblox : @JustRyyXD" //roblox
global.ig = "👑 Instagram : @ravensvenix" //insta
global.tg = "💙 Telegram : @vmxone" //telegram

//bot bomdy 
global.groupbot = "https://chat.whatsapp.com/EJ0c8rr1jrJK7BvxNOZFs2"
global.owner = ['6281338302495']
global.ownernomer = "6281338302495" //ur number
global.ownernomer2 = "6285338440313" // second number
global.ownernomer3 = "6283899515608" // stfu
global.ownertag = '6281338302495', '6285338440313', '6283899515608' //ur tag number
global.botname = 'CeciliaMD' //ur bot name
global.ghname = 'RavensVenix' //ur github name
global.linkz = "https://chat.whatsapp.com/EJ0c8rr1jrJK7BvxNOZFs2" //your theme url which will be displayed on whatsapp
global.websitex = "https://chat.whatsapp.com/EJ0c8rr1jrJK7BvxNOZFs2" //ur website to be displayed
global.thumbyt = "https://www.youtube.com/watch?v=aHnaBbLKEww" //change if you want to change thumbnail menu
global.igthumb = "https://www.instagram.com/p/CmgsX4oSfaH/" //ig thumbnail for menu and etc
global.botscript = 'https://github.com/RavensVenix/zxorkta' //script link
global.reactmoji = ["👑", "❤️", "✨", "🦋", "🎉", "💴", "💰", "💋", "❤️", "💛", "🧡", "💚", "💙", "💜", "🍇", "🍎", "🎂", "🍓", "🍫", "🍨", "🍩"] //ur menu react emoji
global.themeemoji = "👑" //ur theme emoji
global.packname = "CeciliaMD\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n• StickerPack " //ur sticker watermark packname
global.author = "CeciliaMD" //ur sticker watermark author
global.wm = "CeciliaMD" //ur watermark
global.shit = `•`
global.groupsend = '120363048781630513@g.us' //please change this !!

//Bot theme media
global.thislogo = ["./storage/image/soktahu.png","./storage/image/bjir.png","./storage/image/woilah.png","./storage/image/okh.png","./storage/image/ancrit.png","./storage/image/ngetest.png","./storage/image/apalah.png","./storage/image/gtw.png","./storage/image/marin.png","./storage/image/marinn.png","./storage/image/okaja.png","./storage/image/aho.png","./storage/image/njir.png","./storage/image/bruh.png","./storage/image/mayan.png","./storage/image/nicelah.png","./storage/image/brutall.png","./storage/image/brutal.png"]

//all vn kirbotz
global.toxkb = ["./vn/dosa pantek.mp3","./vn/heeh.mp3","./vn/jangan toxic om.mp3","./vn/goblok.mp3"]
global.panggilans = ["./vn/ada apa kak.mp3","./vn/ada apa kak1.mp3","./vn/iya kak.mp3","./vn/kenapa kak.mp3","./vn/oy.mp3"]
global.salams = ["./vn/walaikunsalam.mp3"]
global.gajelassz = ["./vn/lu siapa anjir.mp3","./vn/goblok.mp3"]
global.arakaras = ["./vn/ara ara.mp3","./vn/ara ara goblok.mp3","./vn/araaa.mp3"]
global.nolaks = ["./vn/ga mau.mp3","./vn/ga boleh.mp3","./vn/ga da.mp3"]

//damtabase
global.jasa = (`「 *Jasa Run Bot* 」
*Platform : Google Cloud SDK*
*Performa : Best*
*Ram : 8GB Free*
*Ping : 0012 Seconds*

*Prices List 📍*
*1 Week / 5K*
*2 Week / 10K*
*3 Week / 15K*
*1 Month / 20K*

*Anti Drop + Anti Lag*🔰

「 *Beli APIKEY* 」
*Keuntungan*✅
*-Custom Apikey*
*-Unlimited Limit*
*-Banyak Fitur*

*Prices List 🔖*
*1 Week / 7k*
*2 Week / 11k*
*3 Week / 15k*
*1 Bulan / 20k*

Demo : *https://luciaximena.site*

「 *Beli Premium* 」
*Keuntungan* ✅
*Fast Respond (delay removed)*
*nuliskiri*
*nuliskanan*
*nglspam*
*simi*
*simien*
*toanime*
*openai*
*openimage*
*nsfw*
*can add bot to group*
*Unlimited Limit*
*RentBot*
*Premium Features*
*Bugs|Viruses*
*Frequently Asked Questions and Answers with the Owner Regarding the Bot*

*Prices List📌*
*1 Week / 5k*
*2 Week / 10k*
*3 Week / 15k*
*1 Month / 20k*
*2 Month / 25k*
*3 Month / 30k*

*Dijamin Premium Puas!!*

Minat🫐
Contact ☎️ : *wa.me/6281338302495*`)
global.rules = (`「 *RULES* 」
	  「 *INDONESIAN* 」

Bot ini merupakan program open-source yang ditulis menggunakan Javascript.

Dengan menggunakan bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Bot tidak menyimpan data anda di server kami.
- Bot tidak *bertanggung jawab* atas sticker yang anda buat dari bot ini serta video, gambar, text maupun data lainnya yang anda dapatkan dari bot ini.
- Bot *tidak boleh* digunakan untuk layanan yang bertujuan/berkontribusi dalam: 
 • *seks / masturbasi*
 • *perilaku adiktif yang merugikan*
 • *kejahatan*
 • *kekerasan*
 • *ujaran kebencian atau diskriminasi berdasarkan usia, jenis kelamin, identitas gender, ras, seksualitas, agama, kebangsaan*

- Adapun larangan bot itu sendiri sebagai berikut:
 • Dilarang *KERAS* menanyakan agama bot maupun owner
 • Dilarang *KERAS* menanyakan alamat bot maupun owner
 • Dilarang *KERAS* menanyakan status hubungan bot maupun owner
 • Dilarang *KERAS* menghina bot maupun owner dengan maksud apapun
 • Dilarang *KERAS* berkata kasar pada bot dengan maksud apapun
 • Dilarang melakukan *SPAMMING* pada bot dengan maksud apapun
 • Dilarang memasukan bot ke group terkecuali anda memiliki PREMIUM
 • Jika bot tidak respon itu *ARTINYA* bot sedang melakukan update
 • Dilarang melakukan Video call pada bot dengan maksud apapun
 • Dilarang melakukan Call pada bot dengan maksud apapun
 • Dilarang untuk melakukan abuse Command bot dengan maksud apapun
 • Melanggar larangan di atas? anda akan terkena :
 • Soft Block / Trial Block selama 1-3 Hari
 • Permanent Block
 • Teguran Keras
Best regard, *${ownername}*.

「 *RULES* 」
「 *ENGLISH* 」

This bot is an open-source program written using Javascript.

By using this bot, you agree to the following Terms and Conditions:
- Bot do not store your data on our servers.
- Bot is not *responsible* for the stickers you make from this bot and the videos, images, text or other data you get from this bot.
- Bot *should not* be used for services aimed at/contributing to:
 • *sex / masturbation*
 • *addictive harmful behavior*
 • *crime*
 • *violence*
 • *hate speech or discrimination based on age, gender, gender identity, race, sexuality, religion, nationality*

- The ban on the bot itself is as follows:
 • It is strictly *forbidden* to ask about the religion of the bot and the owner
 • It is strictly *forbidden* to ask for the address of the bot or owner
 • It is strictly *forbidden* to ask about the relationship status of bots and owners
 • It is strictly *forbidden* to insult bot or owners for any purpose
 • It is strictly *forbidden* to say rudely with any purpose
 • Spamming bots for any purpose is prohibited
 • Do not add bot to groups unless you have PREMIUM
 • *Do not* make video call to bots for any purpose
 • *Do not* make call to bot for any purpose
 • It is forbidden to *abuse* Command bot for any purpose
 • Violating the prohibition above? you will be exposed to:
 • Soft Block / Trial Block for 1-3 Days
 • Permanent Block
 • Warnings
 Best regard, *${ownername}*.`)

//omther
global.sessionName = 'session'
global.public = true
global.autoreact = false
global.autoread = false
global.autorespondz = true
global.autoonline = false
global.autosw = true
global.sendsw = '6281338302495@s.whatsapp.net'
global.autobio = false
global.prefix = [`.`]
global.sp = '⭔'
global.mess = {
	links: `Where's the link?`,
    success: 'Process complete ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner!',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: 'Please Wait a moment, Bot is processing...',
    linkm: 'Where is the link?',
    error: 'Error!!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: 'You have been banned by the owner, if you want to be unbanned, chat owner.',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
    banChat: 'The bot was banned in this group, please contact the owner to unban'
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 92140
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
