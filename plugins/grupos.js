import fetch from 'node-fetch'
//import * as baileys from '@adiwajshing/baileys'
let baileys = (await import(global.baileys)).default
import PhoneNumber from 'awesome-phonenumber'
import { sticker } from '../lib/sticker.js'
 
let handler = async (m, { conn, command, usedPrefix, args, participants, groupMetadata, text }) => {
let pp, groupAdmins, listAdmin, owner
const isCommand1 = /^(infogrupo|gro?upinfo|info(gro?up|gc))$/i.test(command)
const isCommand2 = /^(admins|@admins|dmins)$/i.test(command)
const isCommand3 = /^(enlace|link(gro?up)?)$/i.test(command)
const isCommand4 = /^(inspect|inspeccionar|revisar)$/i.test(command)
const isCommand5 = /^(saludar|abrazar)$/i.test(command)

async function reportError(e) {
await m.reply(lenguajeEB['smsMalError3']() + '\n*' + lenguajeEB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeEB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeEB.smsMensError2()} ` + usedPrefix + command)
console.log(`⚠️ ${lenguajeEB['smsMensError2']()} ${usedPrefix + command} ⚠️`)
console.log(e)
}

switch (true) {     
case isCommand1:
try{
let fkontak2 = { key: { participant: '0@s.whatsapp.net' }, message: { contactMessage: { displayName: '🎉 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼𝗻 𝗱𝗲𝗹 𝗴𝗿𝘂𝗽𝗼 🎉', vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${author},;;;\nFN:${author},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, jpegThumbnail: fs.readFileSync('./media/menus/Menu1.jpg'), thumbnail: fs.readFileSync('./media/menus/Menu1.jpg'), sendEphemeral: true }}}
pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
groupAdmins = participants.filter(p => p.admin) 
listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let info = 
`╔≫ ──── ≪•◦ ⟬💜⟭ ◦•≫ ──── ≪
║ ${lenguajeEB['smsGI1']()} 
╚≫ ──── ≪•◦ ⟬💦⟭ ◦•≫ ──── ≪

ঔৣ͜͡❤️ ${lenguajeEB['smsGI2']()}
⚚➣ ${groupMetadata.id}

•┈┈┈•••┈┈┈••✦○✦••┈┈┈••┈┈┈••

ঔৣ͜͡🎉 ${lenguajeEB['smsGI3']()}
⚚➣ ${groupMetadata.subject}

•┈┈┈•••┈┈┈••✦○✦••┈┈┈••┈┈┈••

ঔৣ͜͡🎀 ${lenguajeEB['smsGI4']()}
⚚➣ ${groupMetadata.desc?.toString() || lenguajeEB['smsGI5']()}

•┈┈┈•••┈┈┈••✦○✦••┈┈┈••┈┈┈••

ঔৣ͜͡👥 ${lenguajeEB['smsGI6']()}
⚚➣ ${participants.length} ${lenguajeEB['smsGI7']()}

•┈┈┈•••┈┈┈••✦○✦••┈┈┈••┈┈┈••

ঔৣ͜͡👑 ${lenguajeEB['smsGI8']()}
⚚➣ @${owner.split('@')[0]}

•┈┈┈•••┈┈┈••✦○✦••┈┈┈••┈┈┈••

ঔৣ͜͡🥇 ${lenguajeEB['smsGI9']()}
${listAdmin}

•┈┈┈•••┈┈┈••✦○✦••┈┈┈••┈┈┈••
^•.,¸,.•*¯^•.,¸,.•..╭━━━━━━╮
^•.,¸,.•*¯^•.,¸,.•*¯|:::::::: /\:__:/\
^•.,¸,.•*¯^•.,¸,.•*  |:::::::::(｡ ●ω●｡)
^•.,¸,.•*¯^•.,¸,.•* ╰し---し---Ｊ･ﾟ
𝑲𝒓𝒖𝒍𝑩𝒐𝒕-𝑴𝑫 / 𝑶𝒇𝒊𝒄𝒊𝒂𝒍 𝑩𝒐𝒕 𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑
•┈┈┈•••┈┈┈••✦○✦••┈┈┈••┈┈┈••
`.trim()
  
await conn.sendFile(m.chat, pp, 'error.jpg', info, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })    
} catch (e) {
reportError(e)
}
break
    
case isCommand2:
try{
pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/admins.jpg'
groupAdmins = participants.filter(p => p.admin)
listAdmin = groupAdmins.map((v, i) => `*➣ ${i + 1}. @${v.id.split('@')[0]}*`).join('\n')
owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let pesan = args.join` `
let oi = `${lenguajeEB.smsAddB5()} ${pesan ? '_' + pesan + '_' : "📢📢📢📢"}`
let textoA = `➣ ${lenguajeEB.smsAddB3()}
➣ ${oi}\n\n`
let textoB = `${listAdmin}\n
⛔ ${lenguajeEB.smsAddB4()} ⛔`.trim()
await conn.sendFile(m.chat, pp, 'error.jpg', textoA + textoB, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
} catch (e) {
reportError(e)
} 
break
    
case isCommand3:
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let group = m.chat
pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
let fsizedoc = '1'.repeat(10)
try{
await conn.sendFile(m.chat, pp, 'error.jpg', '*https://chat.whatsapp.com/' + await conn.groupInviteCode(group) + '*', m)
} catch (e) {
reportError(e)
} 
break

//FUNCIÓN HECHA POR https://github.com/Azami19
case isCommand4:
let [, code] = text.match(/chat\.whatsapp\.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i) || []
if (!code) return m.reply(lenguajeEB.smsMalused() + usedPrefix + command + ' ' + nna)
try{
const extractGroupMetadata = (result) => {
const group = baileys.getBinaryNodeChild(result, 'group')
const descChild = baileys.getBinaryNodeChild(group, 'description')
let desc
if (descChild) desc = baileys.getBinaryNodeChild(descChild, 'body')?.content
const metadata = {
id: group.attrs.id.includes('@') ? group.attrs.id : baileys.jidEncode(group.attrs.id, 'g.us'),
subject: group.attrs.subject,
creation: new Date(+group.attrs.creation * 1000).toLocaleString('id', { timeZone: 'America/Los_Angeles' }),
owner: group.attrs.creator ? 'wa.me/' + baileys.jidNormalizedUser(group.attrs.creator).split('@')[0] : undefined,
desc
}
return metadata
}  
let res = await conn.query({ tag: 'iq', attrs: { type: 'get', xmlns: 'w:g2', to: '@g.us' }, content: [{ tag: 'invite', attrs: { code } }] }),
data = extractGroupMetadata(res),
txt = Object.keys(data).map(v => `*${v.capitalize()}:* ${data[v]}`).join('\n')
let groupinfo = `
❍⃕⃟᎒⃟̀👑 ${lenguajeEB.smsInsGC1()}
➮ ${data.id === undefined ? '❌' : data.id}

❍⃕⃟᎒⃟̀🎀 ${lenguajeEB.smsInsGC2()}
➮ ${data.subject === undefined ? '❌' : data.subject}

❍⃕⃟᎒⃟̀👑 ${lenguajeEB.smsInsGC3()}
➮ ${data.creation === undefined ? '❌' : data.creation}

❍⃕⃟᎒⃟̀🎀 ${lenguajeEB.smsInsGC4()}
➮ ${data.owner === undefined ? '❌' : data.owner}

❍⃕⃟᎒⃟̀👑 ${lenguajeEB.smsInsGC5()}
➮ ${data.desc === undefined ? '❌' : data.desc}
`.trim()
await conn.sendFile(m.chat, gataImg.getRandom(), 'error.jpg', groupinfo, m)
} catch (e) {
reportError(e)
}   
break
    
case isCommand5:
let cometido
cometido = `@${m.sender.split('@')[0]}`
if(!text && !m.quoted) return conn.reply(m.chat, `*Etiquete al usuario o responda al mensaje del usuario usando ${usedPrefix + command}*`, m)
if (text.length >= 1) {
} else if (m.quoted && m.quoted.sender) {
text = `@${m.quoted.sender.split('@')[0].replace('@', '')}`
} else if (m.quoted && m.quoted.fromMe) {
text = `${m.mentionedJid.map((user)=>(user === m.sender) ? text.replace('@', '') : `${user.split('@')[0].replace('@', '')}`).join(', ')}`
}
if (/[a-zA-Z]/.test(text) && !text.includes('@')) return conn.reply(m.chat, `*❤️ El mensaje no puede estar sin etiquetar y solo puede etiquetar o responder al mensaje 💞*`, m)
text = text.match(/[\d@]+/g).join('')    
let cmd = command.toLowerCase()
let cont, action, body, rege
rege = /^[-+.(@)~ 0-9]+$/
switch (cmd) {	
case "saludar":
cont = ['https://pa1.narvii.com/6177/9d35b3265578df4e4092d67c9a7a5619cd1d41d0_hq.gif', 'https://media.tenor.com/FJzcVnWgHjgAAAAM/wave.gif', 'https://media.tenor.com/XMvXpoXRgIUAAAAi/anko-kitashirakawa-tamako-market.gif', 'https://media.tenor.com/MmTMEtRSIOUAAAAC/nijima-ibuki-d4dj-first-mix.gif', 'https://media.tenor.com/DDnp-TLMTWQAAAAC/hello-anime.gif'].getRandom()
action = `${conn.getName(m.sender)} está ✋🏻 saludando a ${conn.getName(text.replace('@', '') + '@s.whatsapp.net')}
${rege.test(conn.getName(m.sender)) == true || rege.test(conn.getName(text.replace('@', '') + '@s.whatsapp.net')) == true ? `` : `\n\n➣ ${conn.getName(m.sender)} ➣ ${PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international')}
➣ ${conn.getName(text.replace('@', '') + '@s.whatsapp.net')} ➣ ${PhoneNumber('+' + text.replace('@', '') + '@s.whatsapp.net'.replace('@s.whatsapp.net', '')).getNumber('international')}`}`.trim()
body = await sticker(null, cont, action)
//await conn.sendFile(m.chat, body, null, { mentions: [m.sender, text.replace('@', '') + '@s.whatsapp.net'] }, m) 
await conn.sendFile(m.chat, body, 'sticker.webp', '', m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: `• ${conn.getName(m.sender)}`, body: `🎉✋🏻 Saludando a ${conn.getName(text.replace('@', '') + '@s.whatsapp.net')}`, mediaType: 2, sourceUrl: md, thumbnail: gataImg.getRandom()}}})
break
    
case cmd == "abrazar":

break
}    
break
}}

handler.command = /^(infogrupo|gro?upinfo|info(gro?up|gc)|admins|@admins|dmins|enlace|link(gro?up)?|inspect|inspeccionar|revisar|saludar|abrazar)$/i
handler.group = true
handler.register = true
export default handler
