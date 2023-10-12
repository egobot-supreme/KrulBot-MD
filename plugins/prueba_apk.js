import fetch from 'node-fetch'
import { search, download } from 'aptoide-scraper'

let handler = async (m, { conn, usedPrefix, command, args, text }) => {
   if (!args[0]) throw `Ex: ${usedPrefix + command} https://play.google.com/store/apps/details?id=com.linecorp.LGGRTHN`
   let res = await fetch(`https://api.lolhuman.xyz/api/apkdownloader?apikey=${lolkeysapi}&package=${args[0]}`)
   let f = await res.json()
   let { apk_name, apk_icon, apk_version, apk_author, apk_link } = f.result
   let apkk = `💙 𝙽𝙾𝙼𝙱𝚁𝙴: ${apk_name}
💜 𝚅𝙴𝚁𝚂𝙸𝙾𝙽 𝙰𝙿𝙺: ${apk_version}
💞 𝙰𝚄𝚃𝙾𝚁/𝙰𝚄𝚃𝙾𝚁𝙰: ${apk_author}

`
await conn.sendFile(m.chat, apk_icon, 'apk.jpg', apkk, m)
await conn.sendFile(m.chat, apk_link, 'file.apk', apk_name, m)*/
     
if (!text) throw `*👑 𝑷𝑶𝑹 𝑭𝑨𝑽𝑶𝑹 𝑬𝑺𝑪𝑹𝑰𝑩𝑨 𝑬𝑳 𝑵𝑶𝑴𝑩𝑹𝑬 𝑫𝑬 𝑳𝑨 𝑨𝑷𝑳𝑰𝑪𝑨𝑪𝑰𝑶𝑵 𝑶 𝑨𝑷𝑲 𝑸𝑼𝑬 𝑫𝑬𝑺𝑬𝑨 𝑩𝑼𝑺𝑪𝑨𝑹.*`    
let searchA = await search(text)
if (searchA.length < 1) return await  conn.sendMessage(m.chat, { text: '*🚀 𝑵𝑶 𝑺𝑬 𝑬𝑵𝑪𝑶𝑵𝑻𝑹𝑨𝑹𝑶𝑵 𝑹𝑬𝑺𝑼𝑳𝑻𝑨𝑫𝑶𝑺 𝑫𝑬 𝑫𝑰𝑪𝑯𝑨 𝑩𝑼𝑺𝑸𝑼𝑬𝑫𝑨.*' }, { quoted: m } )
let apk = searchA.id
let apk_dl = await download(apk)
if ( apk_dl.size.replace(' MB' , '') > 200) return await conn.sendMessage(m.chat, { text: '*🧐 𝑳𝑨 𝑨𝑷𝑳𝑰𝑪𝑨𝑪𝑰𝑶𝑵/𝑨𝑷𝑲 𝑷𝑬𝑺𝑨 𝑴𝑼𝑪𝑯𝑶, 𝑳𝑳𝑬𝑮𝑨𝑵𝑫𝑶 𝑨 200MB.*' }, { quoted: m } )
if ( apk_dl.size.includes('GB')) return await conn.sendMessage(m.chat, { text: '*😮 𝑳𝑨 𝑨𝑷𝑳𝑰𝑪𝑨𝑪𝑰𝑶𝑵/𝑨𝑷𝑲 𝑬𝑺 𝑴𝑼𝒀 𝑷𝑬𝑺𝑨𝑫𝑶, 𝑳𝑳𝑬𝑮𝑨𝑵𝑫𝑶 𝑨 1GB.*' }, { quoted: m } )
await conn.sendMessage(m.chat, { document: { url: apk_dl.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: apk_dl.name + '.apk', caption: null }, { quoted: m })      
}

handler.command = /^(apkdl|apkdwonload)$/i
export default handler
