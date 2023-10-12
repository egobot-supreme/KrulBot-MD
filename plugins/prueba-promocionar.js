import fs from 'fs'
import axios from 'axios'
import fetch from "node-fetch"
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
import formData from 'form-data'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

let handler = async (m, { conn, text, usedPrefix, command, groupMetadata, participants }) => {
let chat = global.db.data.chats[m.chat]
let fkontak2 = { key: { participant: '0@s.whatsapp.net' }, message: { contactMessage: { displayName: packname, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${author},;;;\nFN:${author},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, jpegThumbnail: fs.readFileSync('./media/menus/Menu1.jpg'), thumbnail: fs.readFileSync('./media/menus/Menu1.jpg'), sendEphemeral: true }}}
chat.welcome = false 
  
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i 
if (!text) return m.reply(`
✿ ----------------- ✿ ------------------ ✿
⁖ฺ۟̇࣪·֗٬̤⃟🎀➮ 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙞𝙣𝙜𝙧𝙚𝙨𝙖 𝙡𝙤𝙨 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙮 𝙚𝙡 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙥𝙖𝙧𝙖 𝙥𝙧𝙤𝙢𝙤𝙘𝙞𝙤𝙣𝙖𝙧.
✿ ----------------- ✿ ------------------ ✿

🎀 𝑬𝑱𝑬𝑴𝑷𝑳𝑶𝑺:

- Puedes usar estos simbolos: \"\", \'\', o () para los enlaces de WhatsApp que desea promocionar, pero que no ingresará el Bot en dichos grupos. (Cabe recalcar que al momento de promocionar, los enlaces que no contenga \"\", \'\', o () no se verá dichos enlaces en la promoción, pero si ingresará al grupo).
*Ejemplo:* ${usedPrefix + command} https://chat.whatsapp.com/ABCDE485493 https://chat.whatsapp.com/ABCDE398394fj43o Mensaje de promoción "https://chat.whatsapp.com/ABCDE"
*Resultado:* Mensaje de promoción https://chat.whatsapp.com/ABCDE

- Sí desea agregar una imagen al mensaje, puede agregar la url (jpg, jpeg, png o gif) al final del mensaje o responder a una imagen. (En el caso de que sea url (texto), dicho enlace de imagen no se mostrará en la promoción).
*Ejemplo:* ${usedPrefix + command} https://chat.whatsapp.com/ABCDE485493 https://chat.whatsapp.com/ABCDE398394fj43o Mensaje de promoción "https://chat.whatsapp.com/ABCDE" https://images.ecestaticos.com/FVdcvD11qPRi-JWDH3USTiXDmeQ=/0x0.jpg
*Resultado:* Mensaje de promoción https://chat.whatsapp.com/ABCDE 

- En el caso que desee agregar una url de imagen y que se muestre en la promoción debe de usar [ ] para que se muestre la url en la promoción. (Es necesario recalcar que los [ ] no se mostrarán, y en caso que la url contenga \"\", \'\', o () se mostrará en la promoción).
*Ejemplo:* ${usedPrefix + command} https://chat.whatsapp.com/ABCDE485493 https://chat.whatsapp.com/ABCDE398394fj43o Mensaje de promoción "https://chat.whatsapp.com/ABCDE" [https://images.ecestaticos.com/FVdcvD11(qPRi-JWDH3USTiXDmeQ=/0x0.jpg]
*Resultado:* Mensaje de promoción https://chat.whatsapp.com/ABCDE https://images.ecestaticos.com/FVdcvD11(qPRi-JWDH3USTiXDmeQ=/0x0.jpg

- Puede agregar número ilimitado de texto, enlaces y url. (En el caso de la url, si no ha respodido a una imagen se usará la primera url para el mensaje de promoción)

- Sí ha respondido a una imagen y el mensaje contine una url de imagen, se tomará como prioridad la url para que forme parte del mensaje de promoción.`)
  
const enlaces = text.match(linkRegex)
if (!enlaces || enlaces.length === 0) return m.reply('⁖ฺ۟̇࣪·֗٬̤⃟🍓➮ 𝙇𝙖𝙨𝙩𝙞𝙢𝙖, 𝙣𝙤 𝙨𝙚 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙖𝙧𝙤𝙣 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙫𝙖𝙡𝙞𝙙𝙤𝙨.. 𝙞𝙣𝙩𝙚𝙣𝙩𝙚 𝙣𝙪𝙚𝙫𝙖𝙢𝙚𝙣𝙩𝙚.')
  
let message = text.replace(linkRegex, '').trim();
if (message.length < 10) return m.reply('⁖ฺ۟̇࣪·֗٬̤⃟💐➮ 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙚𝙡 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙙𝙚 𝙥𝙧𝙤𝙢𝙤𝙘𝙞𝙤𝙣, 𝙙𝙚𝙗𝙚 𝙙𝙚 𝙩𝙚𝙣𝙚𝙧 𝙖𝙡 𝙢𝙚𝙣𝙤𝙨 10 𝙤 15 𝙡𝙚𝙩𝙧𝙖𝙨..')

let url, media
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
const urlRegex = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi')
const matches = text.match(urlRegex)
if (/video/g.test(mime)) if ((q.msg || q).seconds > 10) return m.reply('🎀 El vídeo no puede durar más de 10 segundos')
if (/video/g.test(mime) || /image\/(png|jpe?g)/.test(mime)) {
let media = await m.download()
if (/video/g.test(mime)) {
url = await uploadFile(media)
} else {
url = await uploadImage(media)
}} else if (/webp|image|video/g.test(mime)) {
media = await m.download()
url = await webp2png(media)
} else if (matches) {
url = matches[0]
} else {
message = text
url = false
}

let message2 = ''
message = text
const linkRegex2 = /['"()]*(https:\/\/chat.whatsapp.com\/[0-9A-Za-z]{20,24}|\S+\.(jpg|jpeg|png|gif))['"()]*(?=\s|$)/ig
const enlacesConSignos = text.match(linkRegex2) || []
let currentIndex = 0
for (const linkWithSigns of enlacesConSignos) {
const linkWithoutSigns = linkWithSigns.replace(/['"()]/g, '')
const linkIndex = text.indexOf(linkWithSigns, currentIndex)
const isImageLink = linkWithSigns.match(/\.(jpg|jpeg|png|gif)/i)
if (isImageLink && linkWithSigns.includes('[') && linkWithSigns.includes(']')) {
message2 += text.substring(currentIndex, linkIndex + linkWithSigns.length)
} else {
message2 += text.substring(currentIndex, linkIndex)
if ((linkWithoutSigns !== linkWithSigns) && linkWithSigns.match(/['"()]/)) {
message2 += linkWithoutSigns
} else if (!linkWithSigns.match(/['"()]/)) {
message2 = message2.trim();
}}
currentIndex = linkIndex + linkWithSigns.length
}
const remainingText = text.substring(currentIndex);
message2 += remainingText;
message = message2.replace(/\[|\]/g, '').trim()

let totalTime = 0
let errorGroups = []

for (const link of enlaces) {
const [_, code] = link.match(linkRegex) || []

try {
const res = await conn.groupAcceptInvite(code)
await delay(url ? 3000 : 2000) // Esperar 3 segundos antes de continuar
totalTime += url ? 3000 : 2000



let users = (await conn.groupMetadata(res)).participants.map(v => v.id)
if (url) {
const sendOptions = { image: url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.png') ? { url: url } : url, caption: message /*mentions: users */ }
if (/video/g.test(mime)) {
await conn.sendMessage(res, { video: url, mimetype: 'video/mp4', caption: message /*mentions: users */ }, { quoted: fkontak })
} else {
await conn.sendMessage(res, sendOptions, { quoted: fkontak })
}} else {
let chat = global.db.data.chats[m.chat]
chat.welcome = false
await conn.sendMessage(res, { text: message /*mentions: users */ }, { quoted: fkontak }) //, mentions: users
}
await delay(url ? 4000 : 2000) // Esperar 4 segundos antes de enviar el mensaje
totalTime += url ? 4000 : 2000

// Dejar el grupo solo si el bot se unió durante esta iteración
if (!m.messageStubParameters || m.messageStubParameters[0] !== 30) {
await conn.groupLeave(res)
await delay(url ? 7000 : 5000) // Esperar 7 segundos antes de repetir con otros enlaces
totalTime += url ? 7000 : 5000
//chat.welcome = true
  
}} catch (error) {
console.error(error)
if (!error.message.includes('forbidden')) {
errorGroups.push(`https://${link}`)
}
continue // Continuar con el siguiente enlace en caso de error
}}

if (errorGroups.length > 0) {
await conn.sendMessage(m.chat, {
text: `Ocurrieron errores al unirse o enviar mensajes en los siguientes grupos:\n\n${errorGroups.join("\n")}\n\nVerifique los siguientes puntos:\n- Que los grupos no tengan activada la opción de aprobar usuarios.\n- Que en los grupos todos puedan enviar mensajes.\n- Que usted no esté eliminado de los grupos.`,
mentions: [m.sender],
})
}
await m.reply(`_💜 Mensaje enviado a todos los grupos_. Tiempo total: ${totalTime / 1000} segundos`)
}

handler.command = /^(promocionar)$/i
handler.owner = true
export default handler
