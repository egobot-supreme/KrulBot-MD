import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, args, usedPrefix, command, text }) => {
let stiker = false
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''

if (!/webp|image|video/g.test(mime) && !text) return m.reply(lenguajeEB.smsSticker1(usedPrefix, command))
if (/video/g.test(mime)) if ((q.msg || q).seconds > 10) return m.reply(lenguajeEB.smsSticker2())

if (/webp|image|video/g.test(mime)) {
let img = await q.download?.()
let out
stiker = await sticker(img, false, '💞𝑲𝒓𝒖𝒍𝑩𝒐𝒕-𝑴𝑫💞', '𝐴𝑚𝑦 𝑂𝑓𝑓𝑖𝑐𝑖𝑎𝑙')
  
if (!stiker) {
if (/webp/g.test(mime)) out = await webp2png(img)
else if (/image/g.test(mime)) out = await uploadImage(img)
else if (/video/g.test(mime)) out = await uploadFile(img)
if (typeof out !== 'string') out = await uploadImage(img)
stiker = await sticker(false, out, '💞𝑲𝒓𝒖𝒍𝑩𝒐𝒕-𝑴𝑫💞', '𝐴𝑚𝑦 𝑂𝑓𝑓𝑖𝑐𝑖𝑎𝑙')
  
if (!stiker) errorMessage = lenguajeEB['smsMensError2']()
}} else if (args[0]) {
if (isUrl(args[0])) stiker = await sticker(false, args[0], '💞𝑲𝒓𝒖𝒍𝑩𝒐𝒕-𝑴𝑫💞', '𝐴𝑚𝑦 𝑂𝑓𝑓𝑖𝑐𝑖𝑎𝑙')
else return m.reply(lenguajeEB.smsSticker3(usedPrefix, command))}

if (stiker) {
conn.sendFile(m.chat, stiker, 'sticker.webp', '', null, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: packname, body: '💎 STICKER 💎', mediaType: 2, sourceUrl: redesMenu.getRandom(), thumbnail: egoImg.getRandom()}}})
} else {
await m.reply(lenguajeEB['smsMalError3']() + '\n*' + lenguajeEB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeEB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeEB.smsMensError2()} ` + usedPrefix + command)
console.log(`⚠️ ${lenguajeEB['smsMensError2']()} ${usedPrefix + command} ⚠️`)
console.log(stiker)
}}

handler.command = /^(s(tickers?)?(image|video|gif|img)?)$/i
export default handler

const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))}
