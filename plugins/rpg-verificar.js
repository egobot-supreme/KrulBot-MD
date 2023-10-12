import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
let fkontak2 = { key: { participant: '0@s.whatsapp.net' }, message: { contactMessage: { displayName: '✅ verificación ✅', vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${author},;;;\nFN:${author},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, jpegThumbnail: fs.readFileSync('./media/menus/Menu1.jpg'), thumbnail: fs.readFileSync('./media/menus/Menu1.jpg'), sendEphemeral: true }}}
let tag = `${m.sender.split("@")[0]}`
let aa = tag + '@s.whatsapp.net'
let user = global.db.data.users[m.sender]
if (user.registered === true) return m.reply(lenguajeEB.smsVerify0(usedPrefix) + '*')
if (!Reg.test(text)) return m.reply(lenguajeEB.smsVerify1(usedPrefix, command))
let [_, name, splitter, age] = text.match(Reg)
if (!name) return m.reply(lenguajeEB.smsVerify2())
if (!age) return m.reply(lenguajeEB.smsVerify3())
age = parseInt(age)
if (age > 50) return m.reply(lenguajeEB.smsVerify4())
if (age < 10) return m.reply(lenguajeEB.smsVerify5())
if (name.length >= 30) return m.reply(lenguajeEB.smsVerify6())
user.name = name + 'ᵏʳᵘˡ✔'.trim()
user.age = age
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => egoMenu.getRandom())
let caption = `╭━━━━❬💞❭━━━╰☆╮━━━❬💞❭━━━━╮
║ ${lenguajeEB.smsVerify7()}
╰━━━━❬💞❭━━━╰☆╮━━━❬💞❭━━━━╯

*𖣘⃟ᗒ ${lenguajeEB.smsPerfil1()}* 
ஓீᤢ✧͢⃟ᤢ🌸 @${tag}

──── ∗ ⋅◈⋅ ∗ ────

*𖣘⃟ᗒ ${lenguajeEB.smsPerfil2()}* 
ஓீᤢ✧͢⃟ᤢ🌸 ${name}

──── ∗ ⋅◈⋅ ∗ ────

*𖣘⃟ᗒ ${lenguajeEB.smsPerfil3()}*
ஓீᤢ✧͢⃟ᤢ🌸 ${age}

──── ∗ ⋅◈⋅ ∗ ────

*𖣘⃟ᗒ ${lenguajeEB.smsVerify9()}*
ஓீᤢ✧͢⃟ᤢ🌸 'ᵏʳᵘˡ✔'

──── ∗ ⋅◈⋅ ∗ ────

*𖣘⃟ᗒ ${lenguajeEB.smsPerfil5()}*
ஓீᤢ✧͢⃟ᤢ🌸 \`\`\`${sn}\`\`\`

──── ∗ ⋅◈⋅ ∗ ────
╭───────────────✧
│ ✐; Gracias por usar:
│ ┆ ✐; 𝙆𝙧𝙪𝙡𝘽𝙤𝙩-𝙈𝘿
╰───────────────✧`.trim()
await conn.sendFile(m.chat, egoImg.getRandom(), 'ego.jpg', caption, m, false, { mentions: [aa] }) 
await m.reply(lenguajeEB.smsVerify8(usedPrefix)) 
await m.reply(`${sn}`) 
}
handler.command = /^(verify|verificar|reg(ister)?)$/i
export default handler
