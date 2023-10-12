import translate from '@vitalets/google-translate-api'
import * as fs from 'fs'
import { es, en, id, ar, pt } from '../lib/idiomas/total-idiomas.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let texto = `*💞 𝚂𝙴 𝙲𝙰𝙼𝙱𝙸𝙾 𝙴𝙻 𝙸𝙳𝙸𝙾𝙼𝙰 𝙳𝙴 𝙺𝚁𝚄𝙻𝙱𝙾𝚃-𝙼𝙳 𝙴𝚇𝙸𝚃𝙾𝚂𝙰𝙼𝙴𝙽𝚃𝙴:* `
let texto2 = `*🎀 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚂𝙴𝙻𝙴𝙲𝙲𝙸𝙾𝙽𝙴 𝙴𝙻 𝙸𝙳𝙸𝙾𝙼𝙰 𝙿𝙰𝚁𝙰 𝙺𝚁𝚄𝙻𝙱𝙾𝚃-𝙼𝙳*`
let texto3 = `*👑 𝙽𝙾 𝚂𝙴 𝙿𝚁𝙴𝙾𝙲𝚄𝙿𝙴, 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙽𝙾 𝙲𝙰𝙼𝙱𝙸𝙰𝚁𝙰𝙽, 𝚂𝙾𝙻𝙾 𝙴𝙻 𝚃𝙴𝚇𝚃𝙾 𝙳𝙴 𝙴𝙹𝙴𝙼𝙿𝙻𝙾, 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙰𝚂, 𝙳𝙴𝚂𝙲𝚂𝚁𝙶𝙰𝚂, 𝙴𝚃𝙲.*`
let idioma = await translate(`${texto}`, { to: args[0], autoCorrect: true })
let idioma2 = await translate(`${texto2}`, { to: lenguajeEB.lenguaje(), autoCorrect: true })
let idioma3 = await translate(`${texto3}`, { to: lenguajeEB.lenguaje(), autoCorrect: true })

try {  
if (args[0] == 'es'){
global.lenguajeEB = es
await conn.sendButton(m.chat, lenguajeEB['smsAvisoEG']() + idioma.text + '\n' + 'დ ```Español```', wm, null, [[`🎀 𝐌𝐄𝐍𝐔 🎀`, `${usedPrefix}menu`]], fkontak, m)
  
}else if (args[0] == 'en'){
global.lenguajeEB = en
await conn.sendButton(m.chat, lenguajeEB['smsAvisoEG']() + idioma.text + '\n' + 'დ ```English```', wm, null, [[`🎀 𝐌𝐄𝐍𝐔 🎀`, `${usedPrefix}menu`]], fkontak, m)
  
}else if (args[0] == 'id'){
global.lenguajeEB = id
await conn.sendButton(m.chat, lenguajeEB['smsAvisoEG']() + idioma.text + '\n' + 'დ ```Bahasa Indonesia```', wm, null, [[`🎀 𝐌𝐄𝐍𝐔 🎀`, `${usedPrefix}menu`]], fkontak, m)
  
}else if (args[0] == 'ar'){
global.lenguajeEB = ar
await conn.sendButton(m.chat, lenguajeEB['smsAvisoEG']() + idioma.text + '\n' + 'დ ```عرب```', wm, null, [[`🎀 𝐌𝐄𝐍𝐔 🎀`, `${usedPrefix}menu`]], fkontak, m)
  
}else if (args[0] == 'pt'){
global.lenguajeEB = pt
await conn.sendButton(m.chat, lenguajeEB['smsAvisoEG']() + idioma.text + '\n' + 'დ ```Português```', wm, null, [[`☘️ 𝗠 𝗘 𝗡 𝗨`, `${usedPrefix}menu`]], fkontak, m)
}else{
  
const sections = [{
title: '👑 𝙄𝘿𝙄𝙊𝙈𝘼𝙎 𝘿𝙄𝙎𝙋𝙊𝙉𝙄𝘽𝙇𝙀𝙎 𝙋𝘼𝙍𝘼 𝙆𝙍𝙐𝙇𝘽𝙊𝙏-𝙈𝘿 👑',
rows: [
{title: "💞 Español", rowId: `${usedPrefix + command} es`},
{title: "🌻 English", rowId: `${usedPrefix + command} en`},
{title: "💞 Bahasa Indonesia", rowId: `${usedPrefix + command} id`},
{title: "🌻 عرب", rowId: `${usedPrefix + command} ar`},
{title: "💞 Português", rowId: `${usedPrefix + command} pt`}]}]

const listMessage = {
text: idioma2.text + '\n\n' + idioma3.text,
footer: `⁖ฺ۟̇࣪·֗٬̤⃟🌻➮ Español = ${usedPrefix + command} es
⁖ฺ۟̇࣪·֗٬̤⃟🌻➮ English = ${usedPrefix + command} en
⁖ฺ۟̇࣪·֗٬̤⃟🌻➮ Bahasa Indonesia = ${usedPrefix + command} id
⁖ฺ۟̇࣪·֗٬̤⃟🌻➮ عرب = ${usedPrefix + command} ar
⁖ฺ۟̇࣪·֗٬̤⃟🌻➮ Português = ${usedPrefix + command} pt\n\n` + wm,
title: `${htki} 𝙸𝚍𝚒𝚘𝚖𝚊 💎`,
buttonText: `✅ 𝐒𝐄𝐋𝐄𝐂𝐂𝐈𝐎𝐍𝐀𝐑 ✅`,
sections }
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
}
}catch(e){
await m.reply(`${fg}\`\`\`⛔ 𝐄𝐑𝐑𝐎𝐑 ⛔, 𝙽𝙾 𝚂𝙴 𝙰𝙷 𝙿𝙾𝙳𝙸𝙳𝙾 𝙲𝙰𝙼𝙱𝙸𝙰𝚁 𝙳𝙴 𝙸𝙳𝙸𝙾𝙼𝙰, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴 𝙰 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾: ${usedPrefix + command} 𝙲𝙾𝙽 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾: ${usedPrefix}reporte\`\`\``) 
console.log(e) 
}}

handler.command = /^(idioma|languaje|idiomas|languajes|languages)$/i
handler.owner = true

export default handler
