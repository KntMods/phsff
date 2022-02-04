const {
	default: makeWASocket,
	WASocket, 
	AuthenticationState,
	WAMessage, 
	Contact, 
	SocketConfig, 
	DisconnectReason, 
	BaileysEventMap,
	GroupMetadata,
	AnyMessageContent,
	MessageType,
	MiscMessageGenerationOptions,
	BufferJSON,
	delay,
	useSingleFileAuthState,
	downloadContentFromMessage,
	generateWAMessage,
	generateWAMessageFromContent
} = require('@adiwajshing/baileys-md')
const fs = require("fs")
const moment = require("moment-timezone")
const { color } = require("../lib/color")
const Math_js = require('mathjs')
const { exec } = require("child_process")
const speed = require('performance-now')
const os = require('os')
const ffmpeg = require("fluent-ffmpeg")
const { getBuffer, fetchJson, fetchText, getRandom, getGroupAdmins, runtime, sleep } = require("../lib/myfunc");
sph = "き⃟🌹"
cmhit = []
let setting = JSON.parse(fs.readFileSync("./setting.json"))
let mess = JSON.parse(fs.readFileSync('./connect/mess.json'));
let {
imgPath,
ownerNumber,
ownerName,
botName
} = setting
baterai = {
battery: "" || "Tidak Terdeteksi",
isCharge: "" || false
}
const { smsg } = require('../lib/simple')
// db
// let welcome = JSON.parse(fs.readFileSync("./database/welcome.json"))


const hour_now = moment().format('HH')
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢'//'Pagi🌄'
if (hour_now >= '03' && hour_now <= '10') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠'//'Pagi 🌅'
} else if (hour_now >= '10' && hour_now <= '14') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠'//'Siang 🌞'
} else if (hour_now >= '14' && hour_now <= '17') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞'//'Soree ☀️'
} else if (hour_now >= '17' && hour_now <= '18') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'//'Selamat 🌠'
} else if (hour_now >= '18' && hour_now <= '23') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'//'Malam 🌌'
} else {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'//'Selamat Malam!'
}


const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')

var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
var date = new Date(dates);
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();

switch(hari) {
case 0: hari = "Minggu"; break;
case 1: hari = "Senin"; break;
case 2: hari = "Selasa"; break;
case 3: hari = "Rabu"; break;
case 4: hari = "Kamis"; break;
case 5: hari = "Jum`at"; break;
case 6: hari = "Sabtu"; break;
}
switch(bulan) {
case 0: bulan = "Januari"; break;
case 1: bulan = "Februari"; break;
case 2: bulan = "Maret"; break;
case 3: bulan = "April"; break;
case 4: bulan = "Mei"; break;
case 5: bulan = "Juni"; break;
case 6: bulan = "Juli"; break;
case 7: bulan = "Agustus"; break;
case 8: bulan = "September"; break;
case 9: bulan = "Oktober"; break;
case 10: bulan = "November"; break;
case 11: bulan = "Desember"; break;
}
var Tanggal= "" + hari + ", " + tanggal + " " + bulan + " " + tahun;

let d = new Date();
				let locale = 'id';
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })

function speedText(speed) {
                let bits = speed * 8;
                const units = ['', 'K', 'M', 'G', 'T'];
                const places = [0, 1, 2, 3];
                let unit = 0;
                while (bits >= 2000 && unit < 4) {
                    unit++;
                    bits/= 1000;
                }
                return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
            } 
            const math = (teks) => {
				return Math.floor(teks)
}

var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
uptime = process.uptime();
const timestampu = speed();
const latensi = speed() - timestampu


module.exports = async (kentz, msg) => {
        try {
          const m = await smsg(kentz, msg)
          const content = JSON.stringify(m.message)
            const type = Object.keys(msg.message)[0]
            body = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') && msg.message.buttonsResponseMessage.selectedButtonId ? msg.message.buttonsResponseMessage.selectedButtonId : (type == "templateButtonReplyMessage" && msg.message.templateButtonReplyMessage.selectedId) ? msg.message.templateButtonReplyMessage.selectedId : ''
            //cmd = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message[type].caption ? msg.message[type].caption : (type == 'videoMessage') && msg.message[type].caption ? msg.message[type].caption : (type == 'extendedTextMessage') && msg.message[type].text ? msg.message[type].text : (type == 'listResponseMessage') && msg.message[type].singleSelectReply.selectedRowId ? msg.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && msg.message[type].selectedButtonId ? msg.message[type].selectedButtonId : ""
            //button = (type == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedDisplayText : ''
            budy = (type === 'conversation') ? msg.message.conversation : (type === 'extendedTextMessage') ? msg.message.extendedTextMessage.text : ''
            //selectedButton = (type == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : ''
            //responseButton = (type == 'listResponseMessage') ? msg.message.listResponseMessage.title : ''
            if (kentz.multi) {
            var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#%^&./\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓=|~xzZ+×_*!#,|`÷?;:%^&./\\©^]/gi) : '.'
            } else {
            if (kentz.nopref) {
            var prefix = ''
            } else {
            var prefix = kentz.prefa
            }
            }
            
            const command = body.startsWith(prefix) ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ''
            const isCmd = body.startsWith(prefix)
            const { menu } = require("./help.js")
            const from = msg.key.remoteJid
            const isGroup = from.endsWith('@g.us')
            const sender = isGroup ? msg.participant : msg.key.remoteJid
            const isOwner = ownerNumber.includes(sender) 
            budy = (type === "conversation") ? msg.message.conversation : (type === "extendedTextMessage") ? msg.message.extendedTextMessage.text : ""
            const pushname = msg.pushName
            //const teh = msg.key.fromMe ? msg.user.jid : msg.contacts[sender] || { notify: jid.replace(/@.+/, "") };
            //const pushnames = msg.key.fromMe ? msg.user.name : teh.notify || teh.vname || teh.name || "Null Name"
            const args = body.trim().split(/ +/).slice(1)
            const q = args.join(" ")
            const botNumber = kentz.user.id.split(':')[0] + '@s.whatsapp.net'
            //const totalchat = await kentz.chats.all()
            const groupMetadata = isGroup ? await kentz.groupMetadata(from) : ''
	        const groupName = isGroup ? groupMetadata.subject : ''
	        const groupId = isGroup ? groupMetadata.id : ''
	        const groupMembers = isGroup ? groupMetadata.participants : ''
	        const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
	        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
	        const isGroupAdmins = groupAdmins.includes(sender) || false
	        cmhit.push(command)

            const isUrl = (url) => {
                return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
            }
            
              const reply = (string) => {
                kentz.sendMessage(from, { text: string,contextInfo: {  externalAdReply:{title: `Hi ${pushname}`,body:`${ucapanWaktu}`,previewType:"PHOTO",thumbnail:fs.readFileSync(setting.imgPath),sourceUrl:""}} })
            }

            kentz.createMessage = async (jidnya, kontennya, optionnya) => {
            return await generateWAMessage(jidnya, kontennya, {...optionnya,userJid: kentz.authState.creds.me.id,upload: kentz.waUploadToServer})
            }
            
            /*kentz.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
            let mime = (message).mimetype || ''
            let messageType = mime.split('/')[0]
            let extension = mime.split('/')[1]
            trueFileName = attachExtension ? (filename + '.' + extension) : filename
            const stream = await downloadContentFromMessage(message, messageType)
            let buffer = Buffer.from([])
            for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
            }
            // save to file
            await fs.writeFileSync(trueFileName, buffer)
            return trueFileName
           }*/
            
            const sendContact = (jid, numbers, name, quoted, men) => {
            let number = numbers.replace(/[^0-9]/g, '')
            const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:' + name + '\n'
            + 'ORG:;\n'
            + 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
            + 'END:VCARD'
            return kentz.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : men ? men : []},{ quoted: quoted })
            }
            
const sendButton5 = async (id, text1, desc1, yo) => {
// by fabil & rashid
var buatpesan = await generateWAMessageFromContent(from, {
    "templateMessage": {
      "hydratedTemplate": {
        ...yo.message,
        "hydratedContentText": text1,
        "hydratedFooterText": desc1,
        "hydratedButtons": [
          {
            "urlButton": {
              "displayText": "Donasi",
              "url": "https://saweria.co/kentav"
            }
          },
          {
            "callButton": {
              "displayText": "Call Owner",
              "phoneNumber": "6288802377901"
            }
          },
          {
            "quickReplyButton": {
              "displayText": "Menu Bot",
              "id": `${prefix}allmenu`
            }
          },
          {
            "quickReplyButton": {
              "displayText": "Contact Owner",
              "id": `${prefix}owner`,
            }
          },
          {
            "quickReplyButton": {
              "displayText": "Syarat & Ketentuan",
              "id": `${prefix}syarat`
            }
          }
        ]
      }
    }
  }, {})
kentz.relayMessage(id, buatpesan.message, { messageId: buatpesan.key.id })
}

const katalog = async (teks) => {
const res = await generateWAMessageFromContent(from,{ "orderMessage": { "itemCount": 64, "message": teks, "thumbnail":  fs.readFileSync(setting.imgPath), "surface": 'CATALOG' }})
kentz.relayMessage(from,res.message,{messageId:res.key.from})
}
            const sendPhoto = (imageDir, caption) => {
                kentz.sendMessage(from, {
                    image: fs.readFileSync(imageDir),
                    caption: caption
                })
            }
            
            const jsonformat = (json) => {
                return JSON.stringify(json, null, "\t")
            }

            const textButtons = (firstId, firstText, secondId, secondText, content) => {
                var buttonsContent = [
                    { buttonId: firstId, buttonText: { displayText: firstText }, type: 1 },
                    { buttonId: secondId, buttonText: { displayText: secondText }, type: 1 }
                ]

             //Button Text
             const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
             const buttonMessage = {
             contentText: text1,
             footerText: desc1,
              buttons: but,
              headerType: 1
              }
              kentz.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
              }

                var msgContent = {
                    contentText: content,
                    footerText: 'Kentz - Multi Device',
                    buttons: buttonsContent,
                    headerType: 1
                }
                return msgContent
            }
            
            if (kentz.mode == "self") {
            if (!msg.key.fromMe && !isOwner) return
            }
            
            if (kentz.autoRead) {
            kentz.sendReadReceipt(from, sender, [msg.key.id])
            }
            
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
                
                
const kata = ["Sulit untuk mengalahkan orang yang tidak pernah menyerah","Jika Anda takut gagal, Anda tidak pantas untuk sukses!","Sukses tidak datang kepadamu, kamu harus pergi ke sana","Keyakinan diri dan kerja keras akan selalu membuat Anda sukses","Rahasia kesuksesanmu ditentukan oleh agenda harian mu","Rahasia kesuksesanmu ditentukan oleh agenda harian mu","Sukses adalah jumlah dari upaya kecil, yang diulangi hari demi hari","Jika kamu ingin sukses sebanyak yang kamu inginkan, maka kamu akan sukses","Hidup bukan tentang menemukan dirimu sendiri.\nHidup adalah bagaimana membangun dirimu"]
const bijak = kata[Math.floor(Math.random() * kata.length)]
menunya = ``
//${menu(prefix)}
fake2 = `⍟ ────────────────── ⍟
 Hi ${pushname} 
${bijak}

BOT-INFO
• Total Hit : ${cmhit.length}
• Runtime : ${runtime(uptime)}
• Mode : ${kentz.mode}
• Prefix : Multi Prefix
• Penggunaan Ram : ${ram2}
• Hostname : ${os.hostname()}
• Platform : ${os.platform()}
• Uptime : ${runtime(os.uptime())}

TIME-INFO
• Wib : ${wib}
• Wita : ${wita}
• Wit : ${wit}  
• Hari : ${week} ${weton}
• Tanggal : ${calender}
⍟ ────────────────── ⍟
`
        
        
        if (budy.startsWith("> ")) {
        if (!msg.key.fromMe && !isOwner) return
        var bang = await eval(`;(async () => { return ${budy.slice(2)} })();`)
        reply(jsonformat(bang))
        }
        
        if (budy.startsWith("$ ")) {
        if (!msg.key.fromMe && !isOwner) return
        exec(budy.slice(2), async (err, stdout) => {
        if (err) return reply(err)
        reply(stdout)
        })
        }
            
            switch(command) {
                case 'menu':
if (kentz.modelmenu == "gif") {
// gif buttons 5
await sendButton5(from, menunya, fake2, await kentz.createMessage(from, {video: {url: "./media/domge.mp4", caption: menunya}, gifPlayback: true}))
} else if (kentz.modelmenu == "image") {
// image button 5
await sendButton5(from, menunya, fake2, await kentz.createMessage(from, {image: {url: setting.imgPath, caption: menunya}}))
}else if (kentz.modelmenu == "btnaj") {
// button 5
await sendButton5(from, menunya, fake2, await menunya)
}
                break
                case 'szip':
szip()
                  break
                
                case 'allmenu':
allmn = `
• > eval
• $ exec

• ${prefix}owner
`
katalog(allmn)
                  break

                  case 'mktalog':
kmnu = `
tes
`
kentz.sendMessage(from,{"productMessage": { "product": { "productImage": fs.readFileSync(setting.imgPath), "productId": "4715716298440452", "title": `𝗠𝗘𝗡𝗨 𝗖𝗔𝗧𝗔𝗟𝗢𝗚 𝗣𝗥𝗢𝗗𝗨𝗖𝗧`, "description":kmnu, "footerText": "kentz ID", "currencyCode": "IDR", "priceAmount1000": "100000000","productImageCount": 1, "firstImageId": 1, "salePriceAmount1000": "35000000","retailerId": "ini footer", "url": "https://github.com/Arifirazzaq2001" }, "businessOwnerJid": "6281261324817@s.whatsapp.net" }},{  mimetype: 'image/jpeg' })
                  break
                  
                case 'syarat':
syrt = `
*Syarat & Ketentuan Menggunakan Bot*

• Bot tidak menerima *Telpon / Video Call*
• Dilarang melakukan *spam* terhadap bot
• Bot tidak menyimpan *data pribadi* anda
• Apabila menemukan bug, error, atau request fitur harap hubungi developer bot
• Bot berhak *memblokir* atau *ban* terhadap user dengan alasan maupun tanpa alasan

_Creator : Kentz ID_
`

const btnsyarat = [
  {buttonId: `${prefix}menu`, buttonText: {displayText: 'BACK'}, type: 1}
]

const btnMsgSyarat = {
    text: syrt,
    footerText: 'Hello World',
    buttons: btnsyarat,
    headerType: 1
}
kentz.sendMessage(from, btnMsgSyarat)
              break
              
case "setprefix":
if (!msg.key.fromMe && !isOwner) return
if (!q) return reply("Masukan opts : [multi/nopref]")
if (q == "multi") {
kentz.nopref = false
kentz.multi = true
reply("Done change prefix to "+q);
} else if (q == "nopref") {
kentz.multi = false
kentz.nopref = true
reply("Done change prefix to "+q);
} else {
kentz.nopref = false
kentz.multi = false
kentz.prefa = q
reply("Done change prefix to "+q);
}
break

case "owner":
for (let i of ownerNumber) {
sendContact (from, i.split("@")[0], "Owner Bot", msg);
}
break

case "setmenu":
if (!msg.key.fromMe && !isOwner) return
if (!q) return reply(`Masukan opts :\n
${sph}gif
${sph}image`)
if (q == "gif") {
kentz.modelmenu = "gif"
reply("Done change menu to "+q);
} else if (q == "image") {
kentz.modelmenu = "image"
reply("Done change menu to "+q);
} else if (q == "btn") {
kentz.modelmenu = "btnaj"
reply("Done change menu to "+q);
} else {
reply(`Masukan opts :\n
${sph}gif
${sph}image`);
}
break

case "mode":
if (!msg.key.fromMe && !isOwner) return
if (q == "self") {
kentz.mode = "self"
reply("Done change menu to "+q);
} else if (q == "public") {
kentz.mode = "public"
reply("Done change menu to "+q);
}
break


            case prefix+'sticker':
            case prefix+'stiker':
            case prefix+'s':
            case prefix+'stickergif':
            case prefix+'sgif':{
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await kentz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
                    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
                  if (error) return reply(mess.error.api)
									kentz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
                  fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                } else if ((isVideo && msg.message.videoMessage.fileLength < 10000000 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
                    let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await kentz.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
				           	
                    await ffmpeg(`${media}`)
							      .inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									kentz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
                  fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                } else {
                    reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
                }
            }
                break
                 /* case prefix + "welcome": {
                    if (!isGroup) return reply(mess.OnlyGrup)
                    if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
                    if (args.length == 0) return reply(`Pilih on atau off`)
                    if (args[0].toLowerCase() == "on") {
                      if (isWelcome) return reply(`Udah aktif`)
                      welcome.push(from)
                      fs.writeFileSync("./database/welcome.json", JSON.stringify(welcome))
                      reply("Welcome di group ini aktif")
                    } else if (args[0].toLowerCase() == "off") {
                      //if (!isAntiLink) return reply("Anti link di group ini belum pernah aktif")
                      let anu = welcome.indexOf(from)
                      welcome.splice(anu, 1)
                      fs.writeFileSync("./database/welcome.json", JSON.stringify(welcome))
                      reply("Welcome di group ini mati")
                    } else {
                      reply(`Pilih on atau off`)
                    }
                  }
                  break */
        
        case 'p':
              const buttons = [
  {buttonId: `${prefix}menu`, buttonText: {displayText: 'MENU'}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1},
  {buttonId: 'id3', buttonText: {displayText: 'Button 3'}, type: 1}
]

const buttonMessage = {
    text: "Hi it's button message",
    footerText: 'Hello World',
    buttons: buttons,
    headerType: 1
}
kentz.sendMessage(from, buttonMessage)
               break

////////////////////END BRAY..... /////////////////////
            }
        } catch (e) {
            console.log(e)
        }
}
