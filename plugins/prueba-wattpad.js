/*import fetch from 'node-fetch'
import translate from '@vitalets/google-translate-api'

let handler = async(m, { conn, text }) => {
if (!text) throw `*Falta texto*`
let res = await fetch(`https://api.xyroinee.xyz/api/search/wattpad?q=${text}&lc=es&apikey=uwgflzFEh6`)
let anu = await res.json()
anu = anu.data.map((v) => `💎 𝑻𝑰𝑻𝑼𝑳𝑶: ${v.title}\n*👀 𝑳𝑬𝑰𝑫𝑶𝑺:* ${v.reads}\n*💙 𝑽𝑶𝑻𝑶𝑺:* ${v.vote}\n*💞 𝑪𝑨𝑷𝑰𝑻𝑼𝑳𝑶𝑺:* ${v.chapter}\n*⬇️ 𝑬𝑵𝑳𝑨𝑪𝑬:* ${v.link}\n*🚀 𝑫𝑬𝑺𝑪𝑹𝑰𝑷𝑪𝑰𝑶𝑵:* ${v.desc}`).join`\n\n✿ ----------------- ✿ ------------------ ✿\n\n`
//let akuariapiresult2 = await translate(`${anu}`, { to: 'es', autoCorrect: true })
await m.reply(anu) 
//await conn.sendFile(m.chat, null, 'dorrat.jpg',  anu, m)
}
handler.command = /^(wattpad)$/i

export default handler*/

import fetch from 'node-fetch'
import translate from '@vitalets/google-translate-api'

let handler = async (m, { conn, text }) => {
if (!text) throw `*𝑰𝑵𝑮𝑹𝑬𝑺𝑬 𝑬𝑳 𝑻𝑬𝑿𝑻𝑶 🌻*`
let res = await fetch(`https://api.xyroinee.xyz/api/search/wattpad?q=${text}&lc=es&apikey=uwgflzFEh6`)
let anu = await res.json()
let translatedResults = await Promise.all(anu.data.map(async (v) => {
let titulo = await translate(v.title, { to: 'es', autoCorrect: true })
let descs = await translate(v.desc, { to: 'es', autoCorrect: true })
return `*💎 𝑻𝑰𝑻𝑼𝑳𝑶:* ${titulo.text}\n*👀 𝑳𝑬𝑰𝑫𝑶𝑺:* ${v.reads}\n*💙 𝑽𝑶𝑻𝑶𝑺:* ${v.vote}\n*💞 𝑪𝑨𝑷𝑰𝑻𝑼𝑳𝑶𝑺:* ${v.chapter}\n*⬇️ 𝑬𝑵𝑳𝑨𝑪𝑬:* ${v.link}\n*🚀 𝑫𝑬𝑺𝑪𝑹𝑰𝑷𝑪𝑰𝑶𝑵:* ${descs.text}`
}))
let resultText = translatedResults.join('\n\n✿ ----------------- ✿ ------------------ ✿\n\n')
await m.reply(resultText)   
}
handler.command = /^(wattpad)$/i

export default handler

