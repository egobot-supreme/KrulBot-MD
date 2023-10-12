//let { MessageType } = (await import('@adiwajshing/baileys')).default 
let MessageType = (await import(global.baileys)).default
import { promises } from 'fs'
import { join } from 'path'
import fs from 'fs'
import os, { cpus as _cpus, totalmem, freemem } from 'os'; 
import util from 'util'
import { performance } from 'perf_hooks'
import fetch from 'node-fetch'
import osu from 'node-os-utils'
import { sizeFormatter } from 'human-readable'
import ws from 'ws';

let handler = async (m, { conn, command, usedPrefix, args, text, __dirname, isOwner, isRowner, DevMode }) => {
let name, _uptime, _muptime, uptime, totalreg, fkontak, rtotalreg, frep, _package, taguser, groups
const grupo = [nna, nn, nnn, nnnt, nnntt, nnnttt, nnnttt1, nnnttt2, nnnttt3, nnnttt4] 
frep = { contextInfo: { externalAdReply: {title: wm, body: lenguajeEB.smsCreApoyo(), sourceUrl: redesMenu.getRandom(), thumbnail: await(await fetch(egoMenu.getRandom())).buffer() }}}
fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

const isCommand1 = /^(estado|status|estate|state|stado|stats|botstat(us)?)$/i.test(command)  
const isCommand2 = /^(cuenta(s)?oficiales?|egoig|(cuentas|account)s?g?b|(ig)?ego|(cuentasego))$/i.test(command)  
const isCommand3 = /^(ego(bot)?groups?|grupos(ofc|deegobot|eb)|grupoeb|groupseb|egogroups?|grupos|group(ofc|sofc))$/i.test(command) 
const isCommand4 = /^(c(ó|o)digo|sc|git|script)$/i.test(command) 
const isCommand5 = /^(instalar(ego)?bot|proceso(del)?bot|bot(install|proceso)|installbot)$/i.test(command) 
const isCommand6 = /^(owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i.test(command) 
const isCommand7 = /^(group(s|list|o(lista)?)|list(a)?(de)?grupo(s)?|grupolista)$/i.test(command) 
const isCommand8 = /^(info(ego|bot)|informaci(ón|on)(ego|bot))$/i.test(command) 
const isCommand9 = /^(contactos?|contacts?)$/i.test(command) 
const isCommand10 = /^(ping|speed|velocidad|rapidez|velocity)$/i.test(command) 
const isCommand11 = /^(dona(te|si)|donar|apoyar|paypal|donating|aportar)$/i.test(command) 
const isCommand12 = /^(report|request|reporte|bugs|bug|reportowner|reportes|reportar)$/i.test(command) 

async function reportError(e) {
await m.reply(lenguajeEB['smsMalError3']() + '\n*' + lenguajeEB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeEB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeEB.smsMensError2()} ` + usedPrefix + command)
console.log(`⚠️ ${lenguajeEB['smsMensError2']()} ${usedPrefix + command} ⚠️`)
console.log(e)
}
  
switch (true) {     
case isCommand1:
name = await conn.getName(m.sender)
_uptime = process.uptime() * 1000
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
uptime = clockString(_uptime)
totalreg = Object.keys(global.db.data.users).length
rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
try{
let fkontak2 = { key: { participant: '0@s.whatsapp.net' }, message: { contactMessage: { displayName: '🎀 𝐓𝐔 𝐄𝐒𝐓𝐀𝐃𝐎 🎀', vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${author},;;;\nFN:${author},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, jpegThumbnail: fs.readFileSync('./media/menus/Menu1.jpg'), thumbnail: fs.readFileSync('./media/menus/Menu1.jpg'), sendEphemeral: true }}}
let estado = `*╔╤═══⟬👑 ${lenguajeEB.smsEstado1()} 👑⟭════╗*
║┊•.̇𖥨֗🍓⭟ *${lenguajeEB.smsEstado2()}*
║┊ꪖ⚘⃯  ${vs}
║├┅┅┅┅┅┅┅┄┄┄┈┈┈ • • •
║┊•.̇𖥨֗👥⭟ *${lenguajeEB.smsEstado3()}* ꪖ⚘⃯  *_${Object.keys(global.db.data.users).length}_*
║┊•.̇𖥨֗✅⭟ *${lenguajeEB.smsEstado4()}* ꪖ⚘⃯  *_${rtotalreg}/${totalreg}_*
║┊•.̇𖥨֗❌⭟ *${lenguajeEB.smsEstado5()}* ꪖ⚘⃯  *_${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}_* 
║┊•.̇𖥨֗📄⭟ *${lenguajeEB.smsEstado6()}* ꪖ⚘⃯  *_${Object.entries(global.db.data.users).filter(user => user[1].banned).length}_* 
║├┅┅┅┅┅┅┅┄┄┄┈┈┈ • • •
║┊•.̇𖥨֗💚⭟ *${lenguajeEB.smsEstado7()}* ꪖ⚘⃯  *_${uptime}_*
║├┅┅┅┅┅┅┅┄┄┄┈┈┈ • • •
║┊•.̇𖥨֗💎⭟ 𝐍𝐨𝐦𝐛𝐫𝐞 𝐁𝐨𝐭:
║┊ ${wm}
║├┅┅┅┅┅┅┅┄┄┄┈┈┈ • • •
║┊•.̇𖥨֗🥏⭟ 𝐀𝐬𝐢𝐬𝐭𝐞𝐧𝐜𝐢𝐚 𝐁𝐨𝐭:
║┊ wa.me/5493873687620
║├┅┅┅┅┅┅┅┄┄┄┈┈┈ • • •
║┊•.̇𖥨֗🎀⭟ 𝐂𝐫𝐞𝐚𝐝𝐨𝐫𝐚:
║┊🍰⃟ཱི࿆𝙰𝚖𝚢Co͢nej͢itaᬽ🍰
╚╧═══⟬🎉 𝐊𝐫𝐮𝐥𝐁𝐨𝐭-𝐌𝐃 🎉⟭════╝`.trim()
await conn.sendFile(m.chat, egoImg.getRandom(), 'ego.jpg', estado, fkontak)
} catch (e) {
reportError(e)
}   
break
    
case isCommand2:
try{
let media = './media/menus/Menu2.jpg'
let str = `
◎ *GITHUB*
*${md}*\n
◎ *INSTAGRAM*
*${ig}*\n
◎ *YOUTUBE*
*${yt}*\n
◎ *FACEBOOK*
*${fb}*\n
${lenguajeEB.smsOfc2()}`.trim() 
await conn.sendFile(m.chat, media, 'ego.jpg', lenguajeEB.smsOfc1() + '\n\n' + str, fkontak)  
} catch (e) {
reportError(e)
}    
break
    
  case isCommand3:
try{
let str = `
${lenguajeEB.smsGrupoOfc1()}
_⭔ ${grupo[0]}_\n
_⭔ ${grupo[1]}_\n
_⭔ ${grupo[2]}_\n
_⭔ ${grupo[3]}_\n
_⭔ ${grupo[4]}_\n
_⭔ ${grupo[5]}_\n\n
${lenguajeEB.smsGrupoOfc2()}
_⭔ ${grupo[6]}_\n
_⭔ ${grupo[7]}_\n
_⭔ ${grupo[8]}_\n
_⭔ ${grupo[9]}_`.trim()
await conn.sendFile(m.chat, egoImg.getRandom(), 'ego.jpg', str, fkontak)   
} catch (e) {
reportError(e)
}    
break
    
case isCommand4:
try{ 
_package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
await conn.sendFile(m.chat, egoImg.getRandom(), 'ego.jpg', `*_${_package.homepage}_*\n\n` + lenguajeEB.smsPrivadoDonar(), fkontak)    
} catch (e) {
reportError(e)
}    
break
    
case isCommand5:
let codigo = `termux-setup-storage
apt update
apt upgrade
pkg install -y git nodejs ffmpeg imagemagick yarn
git clone NO DISPONIBLE AUN
cd egoBotLite-MD
yarn install
npm install
npm start`
let codigo2 = `
heroku/nodejs\n
https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git\n
https://github.com/clhuang/heroku-buildpack-webp-binaries.git`
let codigo3 = `
git clone NO DISPONIBLE AUN
cd NO DISPONIBLE AUN
npm install
npm update
node .`
try{	
let termux = `*◎ T E R M U X*\n\n${codigo}`
let replit = `*◎ R E P L I T*\n\n NO DISPONIBLE AUN`
let heroku = `*◎ H E R O K U*\n\n NO DISPONIBLE AUN`
let windows = `*◎ W I N D O W S / V P S / R D P*\n
⎔ _Git_
https://git-scm.com/downloads
⎔ _NodeJS_
https://nodejs.org/en/download
⎔ _FFmpeg_
https://ffmpeg.org/download.html
⎔ _ImageMagick_
https://imagemagick.org/script/download.php
⎔ _Yarn_
https://classic.yarnpkg.com/en/docs/install#windows-stable`
await conn.reply(m.chat, termux + '\n\n' + replit + '\n\n' + heroku + '\n\n' + windows, fkontak)
} catch (e) {
reportError(e)
}    
break
    
case isCommand6:
try{   
taguser = conn.getName(m.sender)
_package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let pp = await conn.profilePictureUrl(`${global.conn.user.jid.split`@`[0]}` + '@s.whatsapp.net', 'image').catch(_ => egoImg.getRandom())
let aa = `*_🚀 ${lenguajeEB.smsCreA()} ${taguser}, ${lenguajeEB.smsCreB()} ${_package.name} ${lenguajeEB.smsCreC()}_*\n\n` 
let bb = `${packname}\n*◎ Wa.me/${owner[0][0]}*\n\n`
await conn.sendFile(m.chat, pp, 'ego.jpg', aa + bb + ig, fkontak) 
} catch (e) {
reportError(e)
}    
break
    
case isCommand7:
try{
let txt
groups = Object.values(await conn.groupFetchAllParticipating())
txt = `${packname} ${lenguajeEB.smsLisA()}
${lenguajeEB.smsLisB()} ${groups.length}\n`

for (let i = 0; i < groups.length; i++) {
txt += ` 
${lenguajeEB.smsLisC()} ${groups[i].subject}
${lenguajeEB.smsLisD()} ${groups[i].id}
${isOwner ? `${lenguajeEB.smsLisE()} ${groups[i].participants.length}` : ''}\n`
}
m.reply(txt.trim())
} catch (e) {
reportError(e)
}     
break
    
case isCommand8:
try{
_uptime = process.uptime() * 1000
uptime = clockString(_uptime) 
totalreg = Object.keys(global.db.data.users).length
rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let totaljadibot = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
//const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
groups = chats.filter(([id]) => id.endsWith('@g.us'))
let old = performance.now()
let neww = performance.now()
let speed = neww - old
//let pp = './media/menus/Menu1.jpg'

let info = `
*${lenguajeEB.smsCreInfo().slice(0, -1)}*
🌺꙰᠁❥ *◜${lenguajeEB.smsBT1()}◞* ⇢ ${author}
🌼꙰᠁❥ *◜${lenguajeEB.smsBT2()}◞* ⇢ ${vs}
🌺꙰᠁❥ *◜${lenguajeEB.smsBT3()}◞* ⇢ ( ${usedPrefix} )
🌻꙰᠁❥ *◜${lenguajeEB.smsBT4()}◞* ⇢ ${chats.length - groups.length}
🌼꙰᠁❥ *◜${lenguajeEB.smsBT5()}◞* ⇢ ${groups.length}
🌺꙰᠁❥ *◜${lenguajeEB.smsBT6()}◞* ⇢ ${chats.length}
🌻꙰᠁❥ *◜${lenguajeEB.smsBT7()}◞* ⇢ ${uptime}
🌼꙰᠁❥ *◜${lenguajeEB.smsBT8()}◞* ⇢ ${totalreg}
🌺꙰᠁❥ *◜${lenguajeEB.smsEstado4().toUpperCase()}◞* ⇢ ${rtotalreg}/${totalreg}
🌻꙰᠁❥ *◜${lenguajeEB.smsVl1()}◞* ⇢ ${(speed * 1000).toFixed(0) / 1000}
🌼꙰᠁❥ *◜${lenguajeEB.smsBT9()}◞* ⇢ ${totaljadibot.length}`.trim()

await conn.sendFile(m.chat, egoImg.getRandom(), 'ego.jpg', info, fkontak) 
} catch (e) {
reportError(e)
}     
break

//CÓDIGO CREADO GRACIAS A https://github.com/Azami19 & https://github.com/egoNina-Li
case isCommand9:
try{
let contact, number, ofc, nombre, description, correo, lugar, enlace, biog
let biografiaBot = await conn.fetchStatus(conn.user.jid.split('@')[0] + '@s.whatsapp.net').catch(_ => 'undefined')
let bioBot = biografiaBot.status?.toString() || `${desc2 == '' ? lenguajeEB.smsContacto1() : desc2}`
let contacts = global.official.filter(c => c[2] === 1)
let lista = []
for (let i = 0; i < contacts.length; i++) {
contact = contacts[i]
number = String(contact[0])
ofc = await conn.getName(number + '@s.whatsapp.net') //String(contact[1])
let biografia = await conn.fetchStatus(number +'@s.whatsapp.net').catch(_ => 'undefined')
let bio = biografia.status?.toString() || `${desc2 == '' ? lenguajeEB.smsContacto2() : desc2}`
nombre = official[0][0] == String(contact[0]) ? official[0][1] : official[1][0] == String(contact[0]) ? official[1][1] : official[2][0] == String(contact[0]) ? official[2][1] : official[3][0] == String(contact[0]) ? official[3][1] : lenguajeEB.smsContacto3() 
description = official[0][0] == String(contact[0]) ? 'Solo temas de egoBot' : official[1][0] == String(contact[0]) ? lenguajeEB.smsContacto4() : official[2][0] == String(contact[0]) ? lenguajeEB.smsContacto4() : official[3][0] == String(contact[0]) ? lenguajeEB.smsContacto4() : desc === '' ? lenguajeEB.smsContacto5() : desc
correo = official[0][0] == String(contact[0]) ? 'socialplus.ego@gamil.com' : official[1][0] == String(contact[0]) ? 'thelolibotm@gmail.com' : official[2][0] == String(contact[0]) ? 'alexismaldonado90700@gmail.com' : mail === '' ? lenguajeEB.smsContacto6() : mail
lugar = official[0][0] == String(contact[0]) ? '🇪🇨 Ecuador' : official[1][0] == String(contact[0]) ? '🇦🇷 Argentina' : official[2][0] == String(contact[0]) ? '🇲🇽 México' : official[3][0] == String(contact[0]) ? '🇧🇷 Brazil' : country === '' ? lenguajeEB.smsContacto7() : country
enlace = official[0][0] == String(contact[0]) ? 'https://github.com/egoNina-Li' : official[1][0] == String(contact[0]) ? 'https://github.com/elrebelde21' : official[2][0] == String(contact[0]) ? 'https://github.com/Azami19' : official[3][0] == String(contact[0]) ? 'https://github.com/Abiguelreyes75' : md    
lista.push([number, ofc, nombre, description, official[3][0] == String(contact[0]) ? null : correo, lugar, enlace, bio, official[1][0] == String(contact[0]) ? 'https://www.youtube.com/@TheLoliBot-MD' : null]) }  
lista.push([conn.user.jid.split('@')[0], await conn.getName(conn.user.jid), packname, lenguajeEB.smsContacto8(), mail === '' ? 'centeregobot@gmail.com' : mail, lenguajeEB.smsContacto7(), md, bioBot, yt, ig, fb, paypal, nna])
await conn.sendContactArray(m.chat, lista, null, { quoted: fkontak })
/*function handler(m) {
const data = global.owner.filter(([id, isCreator]) => id && isCreator) 
this.sendContact(m.chat, data.map(([id, name]) => [id, name]), fkontak, { contextInfo: { externalAdReply: { showAdAttribution: true }}})
}*/
} catch (e) {
reportError(e)
} 
break
    
case isCommand10:
try {
let format = sizeFormatter({
std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`,
})
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
const used = process.memoryUsage()
const cpus = _cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last  
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}})
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let caption = `${htki} *${lenguajeEB.smsVl1()}* ${htka}
🚀 *${Math.round(neww - old)}* ms
🚀 *${speed}* ms
*${htjava} ${lenguajeEB.smsVl2()}
*🟢 RAM:* ${format(totalmem() - freemem())} / ${format(totalmem())}
${lenguajeEB.smsVl3()} ${format(freemem())}
${lenguajeEB.smsVl4()} \`\`\`${os.platform()}\`\`\`
${lenguajeEB.smsVl5()} _${os.hostname()}_
${readMore}
${lenguajeEB.smsVl6()}
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}
${cpus[0] ? `*Uso total de la CPU*
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
*CPU Core(s) Uso (${cpus.length} Core CPU)*
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`
await conn.sendFile(m.chat, egoImg.getRandom(), 'ego.jpg', caption.trim(), fkontak) 
} catch (e) {
reportError(e)
}   
break
    
case isCommand11:
try { 
let donar = lenguajeEB.smsMensajeDonar().trim()
await conn.sendFile(m.chat, egoImg.getRandom(), 'ego.jpg', lenguajeEB.smsTituloDonar() + '\n\n' + donar + '\n\n' + paypal + '\n' + ig, fkontak) 
await conn.reply(m.sender, lenguajeEB.smsPrivadoDonar() + '\n\n' + paypal + '\n' + md, m)
} catch (e) {
reportError(e)
}     
break
    
case isCommand12:
if (!text) return m.reply(lenguajeEB.smsReportEB1(usedPrefix, command))
if (text.length < 8) return m.reply(lenguajeEB.smsReportEB2())
if (text.length > 1000) return m.reply(lenguajeEB.smsReportEB3())

let urs = m.sender.split('@')[0]
for (let i = 0; i < global.owner.length; i++) {
let ownerNumber = global.owner[i][0]
if (global.owner[i][2] === true) {
let aa = ownerNumber + '@s.whatsapp.net'
let teks = lenguajeEB.smsReportEB4(urs, text)
setTimeout(async function() {
await conn.reply(aa, m.quoted ? teks + m.quoted.text : teks, null, { mentions: [m.sender] }, { quoted: fkontak })
}, 3000 * i)
}}
await m.reply(lenguajeEB.smsReportEB5())
break
}}

handler.command = /^(estado|status|estate|state|stado|stats|botstat(us)?|cuenta(s)?oficiales?|egoig|(cuentas|account)s?g?b|(ig)?ego|(cuentasego))|ego(bot)?groups?|grupos|groupsEB|grupos(ofc|deegobot|eb)|grupoeb|egogroups?|group(ofc|sofc)|c(ó|o)digo|sc|git|script|instalar(ego)?bot|proceso(del)?bot|bot(install|proceso)|installbot|owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador|group(s|list|o(lista)?)|list(a)?(de)?grupo(s)?|grupolista|info(ego|bot)|informaci(ón|on)(ego|bot)|contactos?|contacts?|ping|speed|velocidad|rapidez|velocity|dona(te|si)|donar|apoyar|paypal|donating|aportar|report|request|reporte|bugs|bug|reportowner|reportes|reportar$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
