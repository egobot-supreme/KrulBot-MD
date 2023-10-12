import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => egoImg.getRandom())
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
let user = global.db.data.users[m.sender]
let twa = {key: {participant: "0@s.whatsapp.net", "remoteJid": "0@s.whatsapp.net"}, "message": {"groupInviteMessage": {"groupJid": "5493873687620-5493873452654@g.us", "inviteCode": "m", "groupName": "P", "caption": '💐 𝗕𝗶𝗲𝗻𝘃𝗲𝗻𝗶𝗱𝗼/𝗮 𝗮 𝘁𝘂 𝗽𝗲𝗿𝗳𝗶𝗹 💐\n𝚄𝚜𝚊 𝚎𝚕 #𝚖𝚎𝚗𝚞 𝚙𝚊𝚛𝚊 𝚟𝚎𝚛 𝚕𝚘𝚜 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜', 'jpegThumbnail': fs.readFileSync('./media/menus/Menu3.jpg')}}}
let tag = `${m.sender.split("@")[0]}`
let aa = tag + '@s.whatsapp.net'
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
let str = `╭≫─•─•─•─°❅•🌹•❅°─•─•─•─≪
║ ❬👑 𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙤 𝙖 𝙩𝙪 𝙥𝙚𝙧𝙛𝙞𝙡 👑❭
╰≫─•─•─•─°❅•🌹•❅°─•─•─•─≪
❮${lenguajeEB.smsPerfil1()}❯ 
⟆💐⟅➪ @${tag}

❮${lenguajeEB.smsPerfil2()}❯:
⟆💐⟅➪ ${name}

❮ ${lenguajeEB.smsPerfil3()} ❯:
⟆💐⟅➪ ${age}

❮ ${lenguajeEB.smsPerfil4()} ❯:
⟆💐⟅➪ ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}

❮ ${lenguajeEB.smsPerfil5()} ❯:
⟆💐⟅➪ \`\`\`${sn}\`\`\`

❮ 🌹 𝐕𝐄𝐑𝐒𝐈𝐎𝐍 𝐃𝐄𝐋 𝐁𝐎𝐓 🌹 ❯:
⟆💐⟅➪ ${vs}

❮ 👑 𝐍𝐎𝐌𝐁𝐑𝐄 𝐃𝐄𝐋 𝐁𝐎𝐓 👑 ❯:
⟆💐⟅➪ 💞 𝙆𝙧𝙪𝙡𝘽𝙤𝙩-𝙈𝘿 💞
╭≫─•─•─•─°❅•🌻•❅°─•─•─•─≪
║ ❬💐 𝙆𝙧𝙪𝙡𝘽𝙤𝙩-𝙈𝘿 𝙊𝙛𝙞𝙘𝙞𝙖𝙡 💐❭
╰≫─•─•─•─°❅•🌻•❅°─•─•─•─≪
│ │ │ │ │ │ │
│ │ │ │ │ │ є
│ │ │ │ │ ʍ
│ │ │ │ O
│ │ │ ⊂
│ │ L
│ E
W`.trim()
await conn.sendFile(m.chat, pp, 'ego.jpg', str, m, false, { mentions: [aa] }) 
}
handler.command = /^perfil|profile?$/i
handler.register = true
export default handler