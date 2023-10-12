import fs from 'fs'
import axios from 'axios'
import fetch from "node-fetch"
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
import formData from 'form-data'
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

let handler = async (m, { conn, participants, text }) => {
const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
let users = participants.map(u => conn.decodeJid(u.id))
if (!text) return m.reply('⁖ฺ۟̇࣪·֗٬̤⃟🎀➮ 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙞𝙣𝙜𝙧𝙚𝙨𝙖 𝙡𝙤𝙨 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙮 𝙚𝙡 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙥𝙖𝙧𝙖 𝙥𝙧𝙤𝙢𝙤𝙘𝙞𝙤𝙣𝙖𝙧.')
  
const enlaces = text.match(linkRegex)
if (!enlaces || enlaces.length === 0) return m.reply('⁖ฺ۟̇࣪·֗٬̤⃟🍓➮ 𝙇𝙖𝙨𝙩𝙞𝙢𝙖, 𝙣𝙤 𝙨𝙚 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙖𝙧𝙤𝙣 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙫𝙖𝙡𝙞𝙙𝙤𝙨.. 𝙞𝙣𝙩𝙚𝙣𝙩𝙚 𝙣𝙪𝙚𝙫𝙖𝙢𝙚𝙣𝙩𝙚.')
  
let message = text.replace(linkRegex, '').trim();
if (message.length < 10) return m.reply('⁖ฺ۟̇࣪·֗٬̤⃟💐➮ 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙚𝙡 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙙𝙚 𝙥𝙧𝙤𝙢𝙤𝙘𝙞𝙤𝙣, 𝙙𝙚𝙗𝙚 𝙙𝙚 𝙩𝙚𝙣𝙚𝙧 𝙖𝙡 𝙢𝙚𝙣𝙤𝙨 10 𝙤 15 𝙡𝙚𝙩𝙧𝙖𝙨..')
let url
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
const urlRegex = /https:\/\/[^\s/$.?#].[^\s]*\.(jpg|jpeg|png)/i
const matches = text.match(urlRegex)
if (matches) {
url = matches[0] 
} else if (m.quoted && /image\/(png|jpe?g)/.test(mime) || mime.startsWith('image/')) {
let media = await q.download()
url = await uploadImage(media)  
} else if (m.quoted && /image\/webp/.test(mime)) {
let media = await q.download()
url = await webp2png(media)   
} else {
message = text
url = false
}
message = text
const linkRegex2 = /https:\/\/chat.whatsapp.com\/[0-9A-Za-z]{20,24}/ig
const enlacesConComillas = text.match(/['"](https:\/\/chat.whatsapp.com\/[0-9A-Za-z]{20,24})['"]/ig) || []
for (const link of enlacesConComillas) {
const linkWithoutQuotes = link.replace(/['"]/g, '')
text = text.replace(link, linkWithoutQuotes)
}
const enlacesSinComillas = text.match(linkRegex2) || [];
for (const link of enlacesSinComillas) {
text = text.replace(link, '')
}
message = text.replace(/['"]/g, '').trim() 
 
for (const link of enlaces) {
const [_, code] = link.match(linkRegex) || []
  
try {
const res = await conn.groupAcceptInvite(code)
await delay(2000); // Esperar 4 segundos antes de continuar
      
await //conn.sendMessage(res, {image: {url, url}, text: message, mentions: (await conn.groupMetadata(res)).participants.map(v => v.id) }, { quoted: fkontak });
conn.sendMessage(res, { text: md + `\n\n` + text + `\n\nsiguierme el Instagram\n` + ig, mentions: (await conn.groupMetadata(res)).participants.map(v => v.id) }, { quoted: fkontak });
await delay(2000) // Esperar 2 segundos antes de enviar el mensaje

// Dejar el grupo solo si el bot se unió durante esta iteración
if (!m.messageStubParameters || m.messageStubType[0] !== 145) {
if (!m.messageStubParameters || m.messageStubParameters[0] !== 30) {
await conn.groupLeave(res)
await delay(5000); // Esperar 6 segundos antes de repetir con otros enlaces
  
}}} catch (error) {
console.error(error)
await conn.sendMessage(m.chat, { text: `⁖ฺ۟̇࣪·֗٬̤⃟⚠️➮ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙖𝙡 𝙪𝙣𝙞𝙧𝙨𝙚 𝙖𝙡 𝙜𝙧𝙪𝙥𝙤, 𝙤 𝙚𝙣𝙫𝙞𝙖𝙧 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙖: https://${link}\n\n⁖ฺ۟̇࣪·֗٬̤⃟🎀➮ 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙛𝙞𝙟𝙚𝙨𝙚 𝙤 𝙫𝙚𝙧𝙞𝙛𝙞𝙦𝙪𝙚 𝙦𝙪𝙚 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙣𝙤 𝙩𝙚𝙣𝙜𝙖 𝙡𝙖 𝙤𝙥𝙘𝙞𝙤𝙣 𝙙𝙚 𝙖𝙥𝙧𝙤𝙗𝙖𝙧 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚𝙨, 𝙤 𝙦𝙪𝙚 𝙨𝙤𝙡𝙤 𝙡𝙤𝙨 𝙖𝙙𝙢𝙞𝙣𝙨 𝙥𝙪𝙚𝙙𝙚𝙣 𝙢𝙖𝙣𝙙𝙖𝙧 𝙢𝙚𝙣𝙨𝙖𝙟𝙚, 𝙨𝙞 𝙚𝙨 𝙖𝙨𝙞, 𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙥𝙪𝙚𝙙𝙚 𝙢𝙖𝙣𝙙𝙖𝙧 𝙙𝙞𝙘𝙝𝙤 𝙢𝙚𝙣𝙨𝙖𝙟𝙚.` }, { quoted: m });
}} 
await m.reply('⁖ฺ۟̇࣪·֗٬̤⃟✅➮ 𝙎𝙚 𝙚𝙣𝙫𝙞𝙤 𝙚𝙡 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙖 𝙩𝙤𝙙𝙤𝙨 𝙡𝙤𝙨 𝙂𝙧𝙪𝙥𝙤𝙨.')
}

handler.command = ['prueba']
handler.owner = true
export default handler


/*import fs from 'fs'
import axios from 'axios'
import fetch from "node-fetch"
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
import formData from 'form-data'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

let handler = async (m, { conn, text }) => {
const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i
  
if (!text) return m.reply('⁖ฺ۟̇࣪·֗٬̤⃟🎀➮ 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙞𝙣𝙜𝙧𝙚𝙨𝙖 𝙡𝙤𝙨 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙮 𝙚𝙡 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙥𝙖𝙧𝙖 𝙥𝙧𝙤𝙢𝙤𝙘𝙞𝙤𝙣𝙖𝙧.')
  
const enlaces = text.match(linkRegex)
if (!enlaces || enlaces.length === 0) return m.reply('⁖ฺ۟̇࣪·֗٬̤⃟🍓➮ 𝙇𝙖𝙨𝙩𝙞𝙢𝙖, 𝙣𝙤 𝙨𝙚 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙖𝙧𝙤𝙣 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙫𝙖𝙡𝙞𝙙𝙤𝙨.. 𝙞𝙣𝙩𝙚𝙣𝙩𝙚 𝙣𝙪𝙚𝙫𝙖𝙢𝙚𝙣𝙩𝙚.')
  
let message = text.replace(linkRegex, '').trim();
if (message.length < 10) return m.reply('⁖ฺ۟̇࣪·֗٬̤⃟💐➮ 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙚𝙡 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙙𝙚 𝙥𝙧𝙤𝙢𝙤𝙘𝙞𝙤𝙣, 𝙙𝙚𝙗𝙚 𝙙𝙚 𝙩𝙚𝙣𝙚𝙧 𝙖𝙡 𝙢𝙚𝙣𝙤𝙨 10 𝙤 15 𝙡𝙚𝙩𝙧𝙖𝙨..')

let url
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
const urlRegex = /https:\/\/[^\s/$.?#].[^\s]*\.(jpg|jpeg|png)/i
const matches = text.match(urlRegex)
if (matches) {
url = matches[0] 
} else if (m.quoted && /image\/(png|jpe?g)/.test(mime) || mime.startsWith('image/')) {
let media = await q.download()
url = await uploadImage(media)  
} else if (m.quoted && /image\/webp/.test(mime)) {
let media = await q.download()
url = await webp2png(media)   
} else {
message = text
url = false
}

message = text
const linkRegex2 = /https:\/\/chat.whatsapp.com\/[0-9A-Za-z]{20,24}/ig
const enlacesConComillas = text.match(/['"](https:\/\/chat.whatsapp.com\/[0-9A-Za-z]{20,24})['"]/ig) || []
for (const link of enlacesConComillas) {
const linkWithoutQuotes = link.replace(/['"]/g, '')
text = text.replace(link, linkWithoutQuotes)
}
const enlacesSinComillas = text.match(linkRegex2) || [];
for (const link of enlacesSinComillas) {
text = text.replace(link, '')
}
message = text.replace(/['"]/g, '').trim() 
 
for (const link of enlaces) {
const [_, code] = link.match(linkRegex) || []
  
try {
const res = await conn.groupAcceptInvite(code)
await delay(url ? 3000 : 2000) // Esperar 4 segundos antes de continuar
      
if (url) {
await conn.sendFile(res, url, 'imagen.jpg', message, m);
} else {
await conn.sendMessage(res, { text: message }, { quoted: m });
}
await delay(url ? 4000 : 2000) // Esperar 2 segundos antes de enviar el mensaje

// Dejar el grupo solo si el bot se unió durante esta iteración
if (!m.messageStubParameters || m.messageStubParameters[0] !== 30) {
await conn.groupLeave(res)
await delay(url ? 7000 : 5000) // Esperar 6 segundos antes de repetir con otros enlaces
  
}} catch (error) {
console.error(error)
await conn.sendMessage(m.chat, { text: `⁖ฺ۟̇࣪·֗٬̤⃟⚠️➮ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙖𝙡 𝙪𝙣𝙞𝙧𝙨𝙚 𝙖𝙡 𝙜𝙧𝙪𝙥𝙤, 𝙤 𝙚𝙣𝙫𝙞𝙖𝙧 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙖: https://${link}\n\n⁖ฺ۟̇࣪·֗٬̤⃟🎀➮ 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙛𝙞𝙟𝙚𝙨𝙚 𝙤 𝙫𝙚𝙧𝙞𝙛𝙞𝙦𝙪𝙚 𝙦𝙪𝙚 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙣𝙤 𝙩𝙚𝙣𝙜𝙖 𝙡𝙖 𝙤𝙥𝙘𝙞𝙤𝙣 𝙙𝙚 𝙖𝙥𝙧𝙤𝙗𝙖𝙧 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚𝙨, 𝙤 𝙦𝙪𝙚 𝙨𝙤𝙡𝙤 𝙡𝙤𝙨 𝙖𝙙𝙢𝙞𝙣𝙨 𝙥𝙪𝙚𝙙𝙚𝙣 𝙢𝙖𝙣𝙙𝙖𝙧 𝙢𝙚𝙣𝙨𝙖𝙟𝙚, 𝙨𝙞 𝙚𝙨 𝙖𝙨𝙞, 𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙥𝙪𝙚𝙙𝙚 𝙢𝙖𝙣𝙙𝙖𝙧 𝙙𝙞𝙘𝙝𝙤 𝙢𝙚𝙣𝙨𝙖𝙟𝙚.` }, { quoted: m });
}} 
await m.reply('⁖ฺ۟̇࣪·֗٬̤⃟✅➮ 𝙎𝙚 𝙚𝙣𝙫𝙞𝙤 𝙚𝙡 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙖 𝙩𝙤𝙙𝙤𝙨 𝙡𝙤𝙨 𝙂𝙧𝙪𝙥𝙤𝙨.')
}

handler.command = ['promocionar']
handler.owner = true
export default handler*/

