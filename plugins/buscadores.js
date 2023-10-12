//import { googleIt } from '@bochilteam/scraper'
import translate from '@vitalets/google-translate-api'
import googleIt from 'google-it'
import fetch from 'node-fetch'
import axios from 'axios'
import yts from 'yt-search'
import cheerio from 'cheerio'
import gpt from 'api-dylux'
import gtts from 'node-gtts'
import {readFileSync, unlinkSync} from 'fs';
import {join} from 'path'
import fs from 'fs' 
import {Configuration, OpenAIApi} from 'openai';
const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key});
const openaiii = new OpenAIApi(configuration);
const idioma = 'es'

let handler = async (m, { conn, command, usedPrefix, args, text }) => {
const isCommand1 = /^(googlef?)$/i.test(command)
const isCommand2 = /(openai|chatgpt|ia|ai)/i.test(command)
const isCommand3 = /^(bot|simi|simsimi|alexa|bixby|cortana|siri|okgoogle)$/i.test(command)
const isCommand4 = /^(githubstalk|usuariogithub|usergithub)$/i.test(command)
const isCommand5 = /^(yt(s|search))$/i.test(command)
const isCommand6 = /^(translate|traducir|trad)$/i.test(command)
const isCommand7 = /^(openaivoz|chatgptvoz|iavoz|robotvoz|openai2voz|chatgpt2voz|ia2voz|robot2voz|krulvoz|KrulBotvoz|gptvoz|ai_voz|ai_voce)$/i.test(command)

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
async function reportError(e) {
await m.reply(lenguajeEB['smsMalError3']() + '\n*' + lenguajeEB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeEB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeEB.smsMensError2()} ` + usedPrefix + command)
console.log(`⚠️ ${lenguajeEB['smsMensError2']()} ${usedPrefix + command} ⚠️`)
console.log(e)
}

switch (true) {     
case isCommand1:
//const fetch = (await import('node-fetch')).default
let img = 'https://wpbr.mx/blog/wp-content/uploads/2015/09/Nuevo-logo-de-google.jpg' || egoMenu.getRandom()
let url = 'https://google.com/search?q=' + encodeURIComponent(text)
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text
} else return conn.reply(m.chat, lenguajeEB.smsMalused3() + `\n*${usedPrefix + command} Qué es Matemáticas?*`, m)
try {
let search = await googleIt({ query: text })
let msg = search.map(({ title, link, snippet}) => {
return `*• ${title}*\n_${snippet}_\n_${link}_`
}).join`\n\n`
await conn.sendFile(m.chat, img, '', url + '\n\n' + msg, m) 
} catch { 
try {
let apiUrl = `https://api.lolhuman.xyz/api/gsearch?apikey=${lolkeysapi}&query=` + encodeURIComponent(text)
let response = await fetch(apiUrl)
let data = await response.json() 
let translatedResults = await Promise.all(data.result.map(async ({ title, link, desc }) => {
let translatedTitle = await translate(title, { to: lenguajeEB.lenguaje() || 'en', autoCorrect: true })
let translatedDesc = await translate(desc, { to: lenguajeEB.lenguaje() || 'en', autoCorrect: true })
return `*• ${translatedTitle.text}*\n_${translatedDesc.text}_\n_${link}_`
}))
let msg = translatedResults.join('\n\n')
await conn.sendFile(m.chat, img, '', url + '\n\n' + msg, m)
} catch (e) {
reportError(e)
}}
break
    
case isCommand2:
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text
} else return conn.reply(m.chat, lenguajeEB.smsOpenai1() + `\n*${usedPrefix + command}* ${lenguajeEB.smsOpenai2()}\n\n*${usedPrefix + command}* ${lenguajeEB.smsOpenai3()}` , m)
await conn.sendPresenceUpdate('composing', m.chat)
try {
let syms = `👑 𝐀𝐜𝐭𝐮𝐚𝐫𝐚𝐬 𝐜𝐨𝐦𝐨 𝐮𝐧 𝐛𝐨𝐭 𝐝𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩, 𝐞𝐧 𝐥𝐨 𝐜𝐮𝐚𝐥 𝐟𝐮𝐞 𝐜𝐫𝐞𝐚𝐝𝐨 𝐩𝐨𝐫 𝐆𝐚𝐭𝐚𝐍𝐢𝐧𝐚-𝐋𝐢, 𝐲 𝐦𝐨𝐝𝐢𝐟𝐢𝐜𝐚𝐝𝐨 𝐩𝐨𝐫 𝐊𝐫𝐮𝐥𝐁𝐨𝐭-𝐌𝐃.`
let res = await gpt.ChatGpt(text, syms)
await m.reply(res.text)
} catch {
try {   
let ia2 = await fetch(`https://api.amosayomide05.cf/gpt/?question=${text}&string_id=${m.sender}`) //fetch(`https://api.ibeng.tech/api/info/openai?text=${text}&apikey=tamvan`)
let resu2 = await ia2.json()
m.reply(resu2.response.trim())    
} catch {        
try {    
let tioress = await fetch(`https://api.lolhuman.xyz/api/openai-turbo?apikey=${lolkeysapi}&text=${text}`)
let hasill = await tioress.json()
m.reply(`${hasill.result}`.trim())   
} catch (e) {
reportError(e)
}}}
break
    
case isCommand3:
if (!text) return conn.reply(m.chat, lenguajeEB.smsMalused2() + `\n*${usedPrefix + command} ${lenguajeEB.smsCreA()}*` , m) 
try{
await conn.sendPresenceUpdate('composing', m.chat)
let res = await fetch (`https://api.simsimi.net/v2/?text=${text}&lc=${lenguajeEB.lenguaje()}`)  
let json = await res.json()
let tes = json.success.replace('simsimi', 'simsimi').replace('Simsimi', 'Simsimi').replace('sim simi', 'sim simi')
m.reply(`${tes}`) 
} catch (e) {
reportError(e)
}     
break
        
case isCommand4:
if (!text) return conn.reply(m.chat, lenguajeEB.smsGit1(usedPrefix, command), m)
await m.reply(lenguajeEB.smsGit2())
try{
let err = lenguajeEB.smsGit14()
let request = await githubstalk(text) 
let { username, following, followers, type, bio, company, blog, location, email, public_repo, public_gists, profile_pic } = request
let thumb = await profile_pic
let cont = `*╔══════❀・°・❀══════╗\n║ 𝔾𝕀𝕋ℍ𝕌𝔹 𝕆𝔽𝕀ℂ𝕀𝔸𝕃\n╚══════❀・°・❀══════╝\n\n
╭•┈┈•••┈┈••✦🍓✦••┈┈••┈┈••
│ ${lenguajeEB.smsGit3()}
╰•┈┈•••┈┈••✦🍓✦••┈┈••┈┈••
❍⃕⃟᎒⃟̀🍬➤ ${username || err}

────────✦────────

╭•┈┈•••┈┈••✦🍓✦••┈┈••┈┈••
│ ${lenguajeEB.smsGit4()}
╰•┈┈•••┈┈••✦🍓✦••┈┈••┈┈••
❍⃕⃟᎒⃟̀🍬➤ ${bio || err}

────────✦────────

╭•┈┈•••┈┈••✦🍓✦••┈┈••┈┈••
│ ${lenguajeEB.smsGit5()}
╰•┈┈•••┈┈••✦🍓✦••┈┈••┈┈••
❍⃕⃟᎒⃟̀🍬➤ ${company || err}

────────✦────────

╭•┈┈•••┈┈••✦🍓✦••┈┈••┈┈••
│ ${lenguajeEB.smsGit6()}
╰•┈┈•••┈┈••✦🍓✦••┈┈••┈┈••
❍⃕⃟᎒⃟̀🍬➤ ${email || err}

────────✦────────

╭•┈┈•••┈┈••✦🍓✦••┈┈••┈┈••
│ ${lenguajeEB.smsGit7()}
╰•┈┈•••┈┈••✦🍓✦••┈┈••┈┈••
❍⃕⃟᎒⃟̀🍬➤ ${blog || err}

────────✦────────

╭•┈┈•••┈┈••✦🍓✦••┈┈••┈┈••
│ ${lenguajeEB.smsGit8()}
╰•┈┈•••┈┈••✦🍓✦••┈┈••┈┈••
❍⃕⃟᎒⃟̀🍬➤ ${public_repo || err}

────────✦────────

╭•┈┈•••┈┈••✦🍓✦••┈┈••┈┈••
│ ${lenguajeEB.smsGit9()}
╰•┈┈•••┈┈••✦🍓✦••┈┈••┈┈••
❍⃕⃟᎒⃟̀🍬➤ ${public_gists || err}

────────✦────────

╭•┈┈•••┈┈••✦🍓✦••┈┈••┈┈••
│ ${lenguajeEB.smsGit10()}
╰•┈┈•••┈┈••✦🍓✦••┈┈••┈┈••
❍⃕⃟᎒⃟̀🍬➤ ${followers || err}

────────✦────────

╭•┈┈•••┈┈••✦🍓✦••┈┈••┈┈••
│ ${lenguajeEB.smsGit11()}
╰•┈┈•••┈┈••✦🍓✦••┈┈••┈┈••
❍⃕⃟᎒⃟̀🍬➤ ${following || err}

────────✦────────

╭•┈┈•••┈┈••✦🍓✦••┈┈••┈┈••
│ ${lenguajeEB.smsGit12()}
╰•┈┈•••┈┈••✦🍓✦••┈┈••┈┈••
❍⃕⃟᎒⃟̀🍬➤ ${location || err}

────────✦────────

╭•┈┈•••┈┈••✦🍓✦••┈┈••┈┈••
│ ${lenguajeEB.smsGit13()}
╰•┈┈•••┈┈••✦🍓✦••┈┈••┈┈••
❍⃕⃟᎒⃟̀🍬➤ ${type || err}

────────✦────────`
await conn.sendFile(m.chat, thumb || egoMenu.getRandom(), 'githubstalk.jpg', cont, fkontak) 
} catch (e) {
reportError(e)}  
break   
        
case isCommand5:
if (!text) return m.reply(lenguajeEB.smsMalused2() + `*${usedPrefix + command}* LoliBot`)
try{
await conn.reply(m.chat, global.wait, m)
let results = await yts(text)
let tes = results.all
let teks = results.all.map(v => {
switch (v.type) {
case 'video': return `╭✿ ----------------- ✿ ------------------ ✿
│ 🌹 𝙆𝙧𝙪𝙡 𝘽𝙤𝙩 𝙈𝘿 𝙊𝙛𝙞𝙘𝙞𝙖𝙡 🌹
╰✿ ----------------- ✿ ------------------ ✿
👑❜︧༷︧➭ *${lenguajeEB.smsytserh1()}*
ຊ✏ ${v.title || lenguajeEB.smsGit14()}

🍓❜︧༷︧➭ *${lenguajeEB.smsytserh2()}*
ຊ✏ ${v.url || lenguajeEB.smsGit14()}

👑❜︧༷︧➭ *${lenguajeEB.smsytserh3()}*
ຊ✏ ${v.timestamp || lenguajeEB.smsGit14()}

🍓❜︧༷︧➭ *${lenguajeEB.smsytserh4()}*
ຊ✏ ${v.ago || lenguajeEB.smsGit14()}

👑❜︧༷︧➭ *${lenguajeEB.smsytserh5()}*
ຊ✏ ${v.views || lenguajeEB.smsGit14()}`.trim()
}}).filter(v => v).join('\n\n˚᳝᳝𖥻🍧̇─────̥˚᳝᳝𖥻🍧̇─────̥˚᳝᳝𖥻🍧̇\n\n')
await conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
} catch (e) {
reportError(e)
}          
break
case isCommand6:
if (!text) throw `${lenguajeEB.smsMalused2()}\n*${usedPrefix + command}* es Hello`
try {
let lang = args[0];
let text = args.slice(1).join(' ');
const defaultLang = 'es';
if ((args[0] || '').length !== 2) {
lang = defaultLang;
text = args.join(' ');
}
//if (!text && m.quoted && m.quoted.text) text = m.quoted.text;
const result = await translate(`${text}`, {to: lang, autoCorrect: true});
await m.reply(result.text);
} catch {
try {
const lol = await fetch(`https://api.lolhuman.xyz/api/translate/auto/${lang}?apikey=${lolkeysapi}&text=${text}`);
const loll = await lol.json();
const result2 = loll.result.translated;
await m.reply(result2);
} catch (e) {
reportError(e)
}}
break 

case isCommand7:
if (!text) throw `*${lenguajeEB['smsOpenai1']()} ${usedPrefix + command}* ${lenguajeEB.smsOpenai2()}\n\n*${usedPrefix + command}* ${lenguajeEB.smsOpenai3()}`
try {
conn.sendPresenceUpdate('recording', m.chat);
const botIA222 = await openaiii.createCompletion({model: 'text-davinci-003', prompt: text, temperature: 0.3, max_tokens: 4097, stop: ['Ai:', 'Human:'], top_p: 1, frequency_penalty: 0.2, presence_penalty: 0});
if (botIA222.data.choices[0].text == 'error' || botIA222.data.choices[0].text == '' || !botIA222.data.choices[0].text) return XD; // causar error undefined para usar otra api
const audio2 = await tts(botIA222.data.choices[0].text, idioma);
await conn.sendMessage(m.chat, {audio: audio2, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});    
} catch {
try {
const tioress22 = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=${m.sender}`);
const hasill22 = await tioress22.json();
if (hasill22.result == 'error' || hasill22.result == '' || !hasill22.result) return 
const hasill22_result = await translate(`${hasill22.result}`, {to: idioma, autoCorrect: true});
const audio7 = await tts(hasill22_result.text, idioma);
await conn.sendMessage(m.chat, {audio: audio7, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});            
} catch (e) {
reportError(e)
}}
break        
}}
handler.command = /^(googlef?|openai|chatgpt|ia|ai|bot|simi|simsimi|alexa|bixby|cortana|siri|okgoogle|githubstalk|usuariogithub|usergithub|(yt(s|search)|(openaivoz|chatgptvoz|iavoz|robotvoz|openai2voz|chatgpt2voz|ia2voz|robot2voz|krulvoz|KrulBotvoz|gptvoz|ai_voz|ai_voce)|(translate|traducir|trad)))$/i
handler.register = true
export default handler 

async function githubstalk(user) {
return new Promise((resolve, reject) => {
axios.get('https://api.github.com/users/'+user)
.then(({ data }) => {
let hasil = {
 username: data.login,
 nickname: data.name,
 bio: data.bio,
 id: data.id,
 nodeId: data.node_id,
 profile_pic: data.avatar_url,
 url: data.html_url,
 type: data.type,
 admin: data.site_admin,
 company: data.company,
 blog: data.blog,
 location: data.location,
 email: data.email,
 public_repo: data.public_repos,
 public_gists: data.public_gists,
 followers: data.followers,
 following: data.following,
 ceated_at: data.created_at,
 updated_at: data.updated_at
}
resolve(hasil)})})  
}

async function tts(text = 'error', lang = 'es') {
  return new Promise((resolve, reject) => {
    try {
      const tts = gtts(lang);
      const filePath = join(global.__dirname(import.meta.url), '../tmp', (1 * new Date) + '.wav');
      tts.save(filePath, text, () => {
        resolve(readFileSync(filePath));
        unlinkSync(filePath);
      });
    } catch (e) {
      reject(e);
    }
  });
}