//Código creado por https://github.com/GataNina-Li || @gata_dios

import fs from 'fs'
import axios from 'axios'
import fetch from "node-fetch"
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
import formData from 'form-data'

let handler = async (m, { conn, args, usedPrefix, command, text }) => {

try {   
let url
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
const urlRegex = /\.(jpg|jpeg|png)$/i;
const pageUrlRegex = /^https?:\/\/[^\s/$.?#].[^\s]*$/i

if (pageUrlRegex.test(text) && urlRegex.test(text)) {
//if (text) {
url = text
    
} else if (m.quoted && /image\/(png|jpe?g)/.test(mime) || mime.startsWith('image/')) {
let media = await q.download()
url = await uploadImage(media)
    
} else if (m.quoted && /image\/webp/.test(mime)) {
let media = await q.download()
url = await webp2png(media)
    
} else {
return m.reply('Ingrese un enlace o responda al mensaje con una imagen en formato PNG o JPG o JPEG.')
}
    
const apiKeys = ["d3a88baf236200c2ae23f31039e599c252034be8", "a74012c56b54b8d36d2675e12b1a216809c353fe", "45e67c4cbc3d784261ffc83806b5a1d7e3bd09ae",
"9812eb9464efa1201c69e5592ba0c74e7edd95e8", "2e7da9f5e70c65f2885b07d48595ba03c4be2ba7", "dafca3c54e59ae1b7fea087ca75984f9e64b74e1"]
let response;
let success = false;

for (let i = 0; i < apiKeys.length; i++) {
const apiKey = apiKeys[i];
try {
response = await axios.get(`https://saucenao.com/search.php?db=999&output_type=2&testmode=1&numres=6&api_key=${apiKey}&url=${encodeURIComponent(url)}`)
success = true;
break
} catch (error) {
console.error(`Error en la API key: ${apiKey}`, error) 
}}
if (!success) {
m.reply("Todas las solicitudes fallaron. No se pudo encontrar una respuesta exitosa.")
return
}

const results = response.data.results;
const primerResultado = results[0]
    
let resultadoEnBruto = ''
for (let prop in primerResultado.header) {
let propName = '';
switch (prop) {
case 'similarity': propName = 'Puntuación de similitud' 
break        
case 'thumbnail': propName = 'URL de la miniatura' 
break        
case 'index_id': propName = 'ID del índice' 
break        
case 'index_name': propName = 'Nombre del índice' 
break        
case 'dupes': propName = 'Imágenes duplicadas' 
break        
case 'hidden': propName = 'Imágenes ocultas o bloqueadas' 
break        
case 'author_name': propName = 'Nombre del autor' 
break         
case 'source': propName = 'Fuente' 
break        
case 'material': propName = 'Material' 
break

default:
propName = prop;
}
resultadoEnBruto += `*${propName}*\n${primerResultado.header[prop]}\n\n`}
//resultadoEnBruto += ''
    
for (let prop in primerResultado.data) {
let propName = ''

switch (prop) {
case 'title': propName = 'Título' 
break        
case 'ext_urls': propName = 'URLs' 
break        
case 'member_name': propName = 'Nombre del autor' 
break        
case 'pixiv_id': propName = 'ID de Pixiv' 
break        
case 'danbooru_id': propName = 'ID de Danbooru' 
break        
case 'gelbooru_id': propName = 'ID de Gelbooru' 
break        
case 'source': propName = 'Fuente' 
break        
case 'material': propName = 'Material' 
break        
case 'da_id': propName = 'ID de la imagen' 
break        
case 'author_name': propName = 'Nombre del Autor' 
break        
case 'author_url': propName = 'URL del Autor' 
break        
case 'member_id': propName = 'ID del Autor' 
break        
case 'fa_id': propName = 'ID del Autor en FurAffinity' 
break        
case 'as_project': propName = 'Proyecto en Anime-Source' 
break

default:
propName = prop
}
resultadoEnBruto += `*${propName}*\n${primerResultado.data[prop]}\n\n`}
    
let frep = { contextInfo: { externalAdReply: {title: wm, body: author, sourceUrl: md, thumbnail: await(await fetch(primerResultado.header.thumbnail)).buffer() }}}
await m.reply('*🎀 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑 𝐄𝐒𝐏𝐄𝐑𝐄 𝐔𝐍 𝐌𝐎𝐌𝐄𝐍𝐓𝐎...*')
await conn.sendButton(m.chat, `*𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨:* ${results.length}
*𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙖𝙙𝙤𝙨:* ${Boolean(results) === true ? 'Si' : 'No'}

*👑 𝙇 𝙄 𝙈 𝙄 𝙏 𝙀 𝙎 👑:*

*𝚂𝚘𝚕𝚒𝚌𝚒𝚝𝚞𝚍𝚎𝚜 𝚛𝚎𝚜𝚝𝚊𝚗𝚝𝚎𝚜 (corto plazo):*
• ${results.short_remaining === undefined ? 'No especificado' : results.short_remaining} 

*𝚂𝚘𝚕𝚒𝚌𝚒𝚝𝚞𝚍𝚎𝚜 𝚛𝚎𝚜𝚝𝚊𝚗𝚝𝚎𝚜 (largo plazo):*
• ${results.long_remaining === undefined ? 'No especificado' : results.long_remaining} 


*🎀 ℝ𝔼𝕊𝕌𝕃𝕋𝔸𝔻𝕆𝕊 🎀:*

👑 𝙀𝙣𝙡𝙖𝙘𝙚 𝙙𝙚 𝙡𝙖 𝙢𝙞𝙣𝙞𝙖𝙩𝙪𝙧𝙖:
• ${primerResultado.header.thumbnail}

👑 𝙋𝙪𝙣𝙩𝙪𝙖𝙘𝙞𝙤𝙣 𝙙𝙚 𝙨𝙞𝙢𝙞𝙡𝙞𝙩𝙪𝙙:
• ${primerResultado.header.similarity}%

👑 𝙏𝙞𝙩𝙪𝙡𝙤:
• ${primerResultado.data.title}

👑 𝙀𝙣𝙡𝙖𝙘𝙚𝙨 / 𝙐𝙍𝙇𝙎:
• ${primerResultado.data.ext_urls}

👑 𝘼𝙪𝙩𝙤𝙧 / 𝘼𝙪𝙩𝙤𝙧𝙖:
• ${primerResultado.data.member_name === undefined ? 'No encontrado' : primerResultado.data.member_name}\n`,  `✅ 𝗜𝗡𝗙𝗢 𝗔𝗗𝗜𝗖𝗜𝗢𝗡𝗔𝗟 ✅`

${resultadoEnBruto}`.trim(), url, [['🎀 𝐌𝐄𝐍𝐔 🎀', '/menu']], m, frep)
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`⚠️ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ⚠️`)
console.log(e)}
}

handler.command = /^sauce$/i
export default handler
