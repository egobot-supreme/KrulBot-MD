import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
try {
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '🍁 𝘼𝙨𝙞𝙨𝙩𝙚𝙣𝙘𝙞𝙖:\n19145948340', thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let menu = `✨ི⋮ྀ⏝✨ི⋮ྀ✨⏝ ི⋮ྀ✨ི⋮ྀ⏝✨ི⋮ྀ✨⏝ི⋮ྀ
*╔◊╤◊═◊═❬🌹❭•ೋ°ৡৢ͜͡  ⟬❤️⟭ 𖥨֗°ೋ•❬🌹❭═◊═◊═◊╗*
╠◊╪▢❯❯ 🍷🍓 𝙆𝙧𝙪𝙡𝘽𝙤𝙩-𝙈𝘿 𝙊𝙛𝙞𝙘𝙞𝙖𝙡 𝘽𝙤𝙩 🍓🍷
╠◊╪▢❯❯ 𝙎𝙚𝙖 𝙗𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙤/𝙖 𝙖𝙡 𝙢𝙚𝙣𝙪 𝙞𝙣𝙞𝙘𝙞𝙖𝙡 💞
╠◊╫┉═┉═┉═┉═┉═┉═┉═┉═┉═┉▢
╠◊╡💕💞 𝙄𝙉𝙁𝙊 𝘿𝙀 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 💕💞
╠◊╫┉═┉═┉═┉═┉═┉═┉═┉═┉═┉▢
╠◊╡❍⃕⃟᎒⃟̀͜🍷꙰͢͡➢ ${user.registered === true ? user.name : `➢ ${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'verificar nombre.edad' : 'verify name.age'}`} *
╠◊┼┈┈┈┈┈┈┈┈┈┈┈┈┈▻▻▻▻
╠◊╡❍⃕⃟᎒⃟̀͜🍓꙰͢͡➢ @${m.sender.split("@")[0]}*
╠◊┼┈┈┈┈┈┈┈┈┈┈┈┈┈▻▻▻▻
╠◊╡❍⃕⃟᎒⃟̀͜🍷꙰͢͡➢ ${packname}${conn.user.jid == global.conn.user.jid ? '' : `\n╠◊╡❍⃕⃟᎒⃟̀͜🍷꙰͢͡➢ 𝙀𝙂𝙊𝘽𝙊𝙏-𝙈𝘿 *@${global.conn.user.jid.split`@`[0]}*`}
╠◊┼┈┈┈┈┈┈┈┈┈┈┈┈┈▻▻▻▻
╠◊╡❍⃕⃟᎒⃟̀͜🍓꙰͢͡➢ 𝑲𝒓𝒖𝒍𝑩𝒐𝒕-𝑴𝑫 ${vs} 
*╚◊╧◊═◊═❬🌹❭•ೋ°ৡৢ͜͡  ⟬❤️⟭ 𖥨֗°ೋ•❬🌹❭═◊═◊═◊╝*
✨ི⋮ྀ⏝✨ི⋮ྀ✨⏝ ི⋮ྀ✨ི⋮ྀ⏝✨ི⋮ྀ✨⏝ི⋮ྀ
     ۪۪۪۪࣪   ✧  ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ۪۪۪۪࣪    ࣭    𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪࣪ 𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪    ࣭     ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪     ࣭ ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪ 
    ࣭     ۪۪۪۪࣪    ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ࣭✧
 ࣭     ۪۪۪۪࣪     ࣭   ۫  ࣭     ۪۪۪۪࣪     ࣭    ࣭     ۪۪۪۪࣪     ࣭   ۫  ࣭     ۪۪۪۪࣪     ࣭   
 
࣭     ۪۪۪۪࣪   ✧  ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ۪۪۪۪࣪    ࣭    𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪࣪ 𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪    ࣭     ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪     ࣭ ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪ 
    ࣭     ۪۪۪۪࣪    ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ࣭✧
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒷꒦⏝꒦.
˖˖˖˖˖˖—》🍓 ࿇ 𝑰𝑵𝑭𝑶 𝑫𝑬𝑳 𝑴𝑬𝑵𝑼 ࿇ 🍓《—˖˖˖˖˖˖
꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒷꒦⏝꒦
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
❍⃕⃟᎒⃟̀͜🌹꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴄʀᴇᴀᴅᴏʀᴀ' : 'ᴏᴡɴᴇʀ'}_
*_Ver quien es la creadora del bot._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🌹꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴄᴏɴᴛᴀᴄᴛᴏs' : 'ᴄᴏɴᴛᴀᴄᴛᴏ'}_ 
*_Ver los contactos de los demas creadores de bots._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🌹꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴄᴜᴇɴᴛᴀsᴋʀᴜʟ' : 'ᴋʀᴜʟᴀᴄᴄᴏᴜɴᴛ'}_
*_Ver cuentas oficiales de la creadora del bot._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • • 
❍⃕⃟᎒⃟̀͜🌹꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴄᴏʟᴀʙᴏʀᴀʀ' : 'ᴅᴏɴᴀʀ'}_ 
*_Puedes colaborar con KrulBot-MD donando, para que que siga en la creacion completa de este bot :)_*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🌹꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'sᴄ' : 'ᴄᴏᴅɪɢᴏ'}_ 
*_Comando de mandar un codigo._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🌹꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ɢʀᴜᴘᴏʙᴏᴛ' : 'ᴋʀᴜʟɢʀᴏᴜᴘs'}_ 
*_Grupos en donde puede estar KrulBot-MD, puedes entrar si gustas._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🌹꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ɢʀᴏᴜᴘsʟɪsᴛᴀ' : 'ɢʀᴜᴘᴏsᴀɢᴇɴᴅᴀᴅᴏs'}_ 
*_Puedes ver los grupos agendados en KrulBot-MD para entrar tambien._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🌹꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴇsᴛᴀᴅᴏ' : 'sᴛᴀᴛᴜsʙᴏᴛ'}_ 
*_Puedes ver el estado del bot._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🌹꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴠᴇʟᴏᴄɪᴅᴀᴅ' : 'sᴘᴇᴇᴅʙᴏᴛ'}_ 
*_Ver velocidad del bot en tiempo real._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🌹꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ɪɴғᴏʙᴏᴛ' : 'ᴋʀᴜʟʙᴏᴛɪɴғᴏ'}_ 
*_Puedes saber mas aqui en este comando ya disponible._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🌹꙰͢͡➢ _${lenguajeEB.lenguaje() == 'es' ? 'ᴛᴇʀᴍɪɴᴏs ᴅᴇ ᴜsᴏ' : 'ᴛᴇʀᴍɪɴᴏs ᴅᴇ ʙᴏᴛ'}_ 
*_Terminos de uso o términos del bot._*
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
✨ི⋮ྀ⏝✨ི⋮ྀ✨⏝ ི⋮ྀ✨ི⋮ྀ⏝✨ི⋮ྀ✨⏝ི⋮ྀ
     ۪۪۪۪࣪   ✧  ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ۪۪۪۪࣪    ࣭    𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪࣪ 𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪    ࣭     ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪     ࣭ ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪ 
    ࣭     ۪۪۪۪࣪    ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ࣭✧
 ࣭     ۪۪۪۪࣪     ࣭   ۫  ࣭     ۪۪۪۪࣪     ࣭    ࣭     ۪۪۪۪࣪     ࣭   ۫  ࣭     ۪۪۪۪࣪     ࣭   
 
࣭     ۪۪۪۪࣪   ✧  ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ۪۪۪۪࣪    ࣭    𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪࣪ 𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪    ࣭     ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪     ࣭ ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪ 
    ࣭     ۪۪۪۪࣪    ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ࣭✧
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒷꒦⏝꒦.
˖˖˖˖˖˖—》🌹 ࿇ 𝑺𝑬𝑹𝑩𝑶𝑻-𝑲𝑹𝑼𝑳𝑩𝑶𝑻 ࿇ 🌹《—˖˖˖˖˖˖
꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒷꒦⏝꒦.
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
❍⃕⃟᎒⃟̀͜🌎꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'sᴇʀʙᴏᴛ' : 'sᴜʙᴋʀᴜʟ'}_
*_Puedes ser subbot o krulsbot sin necesidad de instalar el bot._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🌎꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ʙᴏᴛs' : 'sᴜʙsʙᴏᴛs'}_
*_Ver todos los subbots de KrulBot-MD._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🌎꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴘᴀᴜsᴀʀsᴜʙs' : 'ᴘᴀᴜsᴀʀsʙ'}_
*_Puedes pausar tu sesion de KrulsBots de ser subbot._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🌎꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴅᴇʟᴇᴛᴇsᴇsɪᴏɴ' : 'ᴇʟɪᴍɪɴᴀʀsᴇsɪᴏɴ'}_
*_Puedes usar tambien esta funcion para eliminar tu sesion con KrulBot-MD en subbots, para dejar de usar el bot vinculado._*
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
✨ི⋮ྀ⏝✨ི⋮ྀ✨⏝ ི⋮ྀ✨ི⋮ྀ⏝✨ི⋮ྀ✨⏝ི⋮ྀ
     ۪۪۪۪࣪   ✧  ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ۪۪۪۪࣪    ࣭    𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪࣪ 𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪    ࣭     ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪     ࣭ ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪ 
    ࣭     ۪۪۪۪࣪    ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ࣭✧
 ࣭     ۪۪۪۪࣪     ࣭   ۫  ࣭     ۪۪۪۪࣪     ࣭    ࣭     ۪۪۪۪࣪     ࣭   ۫  ࣭     ۪۪۪۪࣪     ࣭   
 
࣭     ۪۪۪۪࣪   ✧  ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ۪۪۪۪࣪    ࣭    𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪࣪ 𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪    ࣭     ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪     ࣭ ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪ 
    ࣭     ۪۪۪۪࣪    ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ࣭✧
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒷꒦
˖˖˖˖˖˖—》💦 ࿇ 𝑩𝑼𝑺𝑪𝑨𝑫𝑶𝑹𝑬𝑺 ࿇ 💦《—˖˖˖˖˖˖
꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒷꒦
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
❍⃕⃟᎒⃟̀͜🤖꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ɢᴏᴏɢʟᴇ ➤ *❬ᴛᴇxᴛᴏ❭*' : 'ɴᴀᴠᴇɢᴀᴅᴏʀ ➤ *❬ᴛᴇxᴛᴏ❭*'}_
*_Que quieres buscar? Puedes usar este comando de Google para buscar lo que sea._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🤖꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ʙᴏᴛ ➤ *❬ᴛᴇxᴛᴏ❭*' : 'sɪᴍɪsɪᴍɪ ➤ *❬ᴛᴇxᴛᴏ❭*'}_
*_Puedes interactuar con el bot mismo._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🤖꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ɪᴀ ➤ *❬ᴛᴇxᴛᴏ❭*' : 'ᴄʜᴀᴛɢᴘᴛ ➤ *❬ᴛᴇxᴛᴏ❭*'}_
*_Puedes hablar con la IA para tus dudas / preguntar algo._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🤖꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ʏᴛs ➤ *❬ᴛᴇxᴛᴏ❭*' : 'ᴋʀᴜʟʙ ➤ *❬ᴛᴇxᴛᴏ❭*'}_
*_Puedes hablar con KrulBot-MD, con este comando ya disponible._*
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
✨ི⋮ྀ⏝✨ི⋮ྀ✨⏝ ི⋮ྀ✨ི⋮ྀ⏝✨ི⋮ྀ✨⏝ི⋮ྀ
     ۪۪۪۪࣪   ✧  ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ۪۪۪۪࣪    ࣭    𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪࣪ 𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪    ࣭     ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪     ࣭ ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪ 
    ࣭     ۪۪۪۪࣪    ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ࣭✧
 ࣭     ۪۪۪۪࣪     ࣭   ۫  ࣭     ۪۪۪۪࣪     ࣭    ࣭     ۪۪۪۪࣪     ࣭   ۫  ࣭     ۪۪۪۪࣪     ࣭   
 
࣭     ۪۪۪۪࣪   ✧  ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ۪۪۪۪࣪    ࣭    𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪࣪ 𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪    ࣭     ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪     ࣭ ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪ 
    ࣭     ۪۪۪۪࣪    ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ࣭✧ 
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒷꒦꒷꒦
˖˖˖˖˖˖—》⬇️ ࿇ 𝑫𝑬𝑺𝑪𝑨𝑹𝑮𝑨𝑫𝑶𝑹 ࿇ ⬇️《—˖˖˖˖˖˖
꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒷꒦꒷꒦
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
❍⃕⃟᎒⃟̀͜💞꙰͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ɪᴍᴀɢᴇɴ ➤ *❬ᴛᴇxᴛᴏ❭*' : 'ɢɪᴍᴀɢᴇ ➤ *❬ᴛᴇxᴛᴏ❭*'}_
*_Puedes responder a una imagen y poner un texto._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜💞꙰͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ғᴀᴄᴇʙᴏᴏᴋ ➤ *❬ᴇɴʟᴀᴄᴇ❭*' : 'ғᴀᴄᴇʙᴏᴏᴋᴅʟ ➤ *❬ʟɪɴᴋ❭*'}_
*_Busca un video o imagen de facebook, copias el enlace y le mandas al bot para descargarlo._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜💞꙰͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴍᴇᴅɪᴀғɪʀᴇ ➤ *❬ᴇɴʟᴀᴄᴇ❭*' : 'ᴍᴇᴅɪᴀғɪʀᴇᴅʟ ➤ *❬ʟɪɴᴋ❭*'}_
*_Puedes descargar un archivo de mediafire, teniendo en cuenta de que esto va ir dependiendo del peso del archivo, si es mas grande, puede que no sea enviado._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜💞꙰͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴘʟᴀʏ ➤ *❬ɴᴏᴍʙʀᴇ❭*' : 'ᴘʟᴀʏ ➤ *❬ᴇɴʟᴀᴄᴇ❭*'}_
*_Con este comando puedes descargar musica, se busca poniendo el nombre de la música para que el bot lo identifique en la busqueda._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜💞꙰͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ʏᴛᴀ ➤ *❬ᴇɴʟᴀᴄᴇ❭*' : 'ʏᴛᴀ ➤ *❬ʟɪɴᴋ❭*'}_
*_Copiar un enlace de YouTube._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜💞꙰͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ʏᴛᴠ ➤ *❬ᴇɴʟᴀᴄᴇ❭*' : 'ʏᴛᴠ ➤ *❬ʟɪɴᴋ❭*'}_
*_Copiar un enlace de YouTube._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜💞꙰͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ʏᴛᴍᴀx ➤ *❬ᴇɴʟᴀᴄᴇ❭*' : 'ʏᴛᴍᴀx ➤ *❬ʟɪɴᴋ❭*'}_
*_Copiar un enlace de YouTube._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜💞꙰͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ʏᴛᴀᴅᴏᴄ ➤ *❬ᴇɴʟᴀᴄᴇ❭*' : 'ʏᴛᴀᴅᴏᴄ ➤ *❬ʟɪɴᴋ❭*'}_
*_Copiar un enlace de YouTube._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜💞꙰͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ʏᴛᴠᴅᴏᴄ ➤ *❬ᴇɴʟᴀᴄᴇ❭*' : 'ʏᴛᴠᴅᴏᴄ ➤ *❬ʟɪɴᴋ❭*'}_
*_Copiar un enlace de YouTube._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜💞꙰͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ʏᴛᴠᴅᴏᴄᴍᴀx ➤ *❬ᴇɴʟᴀᴄᴇ❭*' : 'ʏᴛᴠᴍᴀxᴅᴏᴄ ➤ *❬ʟɪɴᴋ❭*'}_
*Copiar un enlace de YouTube, esto es por si la primera o las demas opciones no funcionan..._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜💞꙰͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴛɪᴋᴛᴏᴋ ➤ *❬ᴇɴʟᴀᴄᴇ❭*' : 'ᴛᴋᴅʟ ➤ *❬ʟɪɴᴋ❭*'}_
*_Copiar un enlace de tiktok para descargarlo._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜💞꙰͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴏᴘᴇɴɪᴀᴍᴀɢᴇɴ ➤ *❬ᴛᴇxᴛᴏ❭*' : 'ᴅᴀʟʟᴇ ➤ *❬ᴛᴇxᴛᴏ❭*'}_
*_Responder o escribir un texto._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜💞꙰͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴍɪᴅᴊᴏᴜʀɴᴇʏ ➤ *❬ᴛᴇxᴛᴏ❭*' : 'ᴏᴘᴇɴᴊᴏᴜʀɴᴇʏ ➤ *❬ᴛᴇxᴛᴏ❭*'}_
*_Escribir un texto._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜💞꙰͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'sᴘᴏᴛɪғʏ ➤ *❬ᴛᴇxᴛᴏ❭*' : 'sᴘᴏᴛɪғʏ ➤ *❬ᴇɴʟᴀᴄᴇ❭*'}_
*_Buscar nombre o enlace de la canción en Spotify para descargar._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜💞꙰͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'sᴘᴏᴛɪғʏsᴇᴀʀᴄʜ ➤ *❬ᴛᴇxᴛᴏ❭*' : 'sᴘᴏᴛɪғʏᴋʀᴜʟ ➤ *❬ᴛᴇxᴛᴏ❭*'}_
*_Buscar nombre de la cancion en Spotify para descargar._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜💞꙰͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ɪɴsᴛᴀɢʀᴀᴍ ➤ *❬ᴇɴʟᴀᴄᴇ❭*' : 'ɪɴsᴛᴀɢʀᴀᴍ ➤ *❬ʟɪɴᴋ❭*'}_
*_Copiar un enlace de instagram para descargar el video o imagen._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜💞꙰͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴛᴡɪᴛᴛᴇʀx ➤ *❬ᴇɴʟᴀᴄᴇ❭*' : 'ᴛᴡɪᴛᴛᴇʀx ➤ *❬ʟɪɴᴋ❭*'}_
*_Copiar un enlace Twitter para descargar el vídeo o imagen._*
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
✨ི⋮ྀ⏝✨ི⋮ྀ✨⏝ ི⋮ྀ✨ི⋮ྀ⏝✨ི⋮ྀ✨⏝ི⋮ྀ
     ۪۪۪۪࣪   ✧  ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ۪۪۪۪࣪    ࣭    𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪࣪ 𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪    ࣭     ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪     ࣭ ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪ 
    ࣭     ۪۪۪۪࣪    ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ࣭✧
 ࣭     ۪۪۪۪࣪     ࣭   ۫  ࣭     ۪۪۪۪࣪     ࣭    ࣭     ۪۪۪۪࣪     ࣭   ۫  ࣭     ۪۪۪۪࣪     ࣭   
 
࣭     ۪۪۪۪࣪   ✧  ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ۪۪۪۪࣪    ࣭    𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪࣪ 𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪    ࣭     ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪     ࣭ ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪ 
    ࣭     ۪۪۪۪࣪    ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ࣭✧
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒷꒦꒷꒦
˖˖˖˖˖˖—》✨ ࿇ 𝑪𝑶𝑵𝑽𝑬𝑹𝑻𝑰𝑫𝑶𝑹 ࿇ ✨《—˖˖˖˖˖˖
꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒷꒦꒷꒦
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
❍⃕⃟᎒⃟̀͜💦꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ɪᴍɢ ➤ *❬sᴛɪᴄᴋᴇʀ❭*' : 'ᴛᴏɪᴍɢ ➤ *❬sᴛɪᴄᴋᴇʀ❭*'}_
*_Responde a un sticker sin movimiento para convertirlo en imagen._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜💦꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴜʀʟ ➤ *❬ɪᴍᴀɢᴇɴ❭*' : 'ᴛᴏᴜʀʟ ➤ *❬ɪᴍᴀɢᴇɴ❭*'}_
*_Responde a una imagen para que sea convertido en enlace._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜💦꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴍᴘ4 ➤ *❬sᴛɪᴄᴋᴇʀ❭*' : 'ᴛᴏᴠɪᴅᴇᴏ ➤ *❬sᴛɪᴄᴋᴇʀ❭*'}_
*_Responde a un sticker con movimiento para convertirlo en video._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜💦꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ɢɪғ ➤ *❬ᴠɪᴅᴇᴏ/sᴛɪᴄᴋᴇʀ❭*' : 'ᴛᴏɢɪғ ➤ *❬ᴠɪᴅᴇᴏ/sᴛɪᴄᴋᴇʀ❭*'}_
*_Responder a un sticker en movimiento o video para convertirlo en gif._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜💦꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴍᴘ3 ➤ *❬ᴀᴜᴅɪᴏ/ᴠɪᴅᴇᴏ❭*' : 'ᴛᴏᴠɴ ➤ *❬ᴀᴜᴅɪᴏ/ᴠɪᴅᴇᴏ❭*'}_
*_Responder a un audio o video._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜💦꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴛᴛs ➤ *❬ᴛᴇxᴛᴏ❭*' : 'ᴛᴏᴛᴛs ➤ *❬ᴛᴇxᴛᴏ❭*'}_
*_Escribe el texto, por ejemplo: ❬Hola❭._*
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
✨ི⋮ྀ⏝✨ི⋮ྀ✨⏝ ི⋮ྀ✨ི⋮ྀ⏝✨ི⋮ྀ✨⏝ི⋮ྀ
࣭     ۪۪۪۪࣪   ✧  ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ۪۪۪۪࣪    ࣭    𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪࣪ 𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪    ࣭     ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪     ࣭ ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪ 
    ࣭     ۪۪۪۪࣪    ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ࣭✧
 ࣭     ۪۪۪۪࣪     ࣭   ۫  ࣭     ۪۪۪۪࣪     ࣭    ࣭     ۪۪۪۪࣪     ࣭   ۫  ࣭     ۪۪۪۪࣪     ࣭   
 
࣭     ۪۪۪۪࣪   ✧  ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ۪۪۪۪࣪    ࣭    𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪࣪ 𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪    ࣭     ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪     ࣭ ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪ 
    ࣭     ۪۪۪۪࣪    ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ࣭✧
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒷꒦⏝
 ˖˖˖˖˖˖—》💋 ࿇𝑮𝑹𝑼𝑷𝑶༒𝑻𝑶𝑫𝑶𝑺࿇ 💋《—˖˖˖˖˖˖
꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒷꒦⏝
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
❍⃕⃟᎒⃟̀͜💎꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ɢʀᴏᴜᴘɪɴғᴏ' : 'ɢʀᴜᴘᴏɪɴғᴏ'}_
*_Puedes usar este comando si eres un participante._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜💎꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴀᴅᴍɪɴs' : 'ᴅᴍɪɴs'}_
*_Puedes ver quienes son los admins._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜💎꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴇɴʟᴀᴄᴇɢʀᴜᴘᴏ' : 'ʟɪɴᴋɢʀᴏᴜᴘ'}_
*_Puedes pedir el enlace del grupo con este comando._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜💎꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ɪɴsᴘᴇᴄᴄɪᴏɴᴀʀ ➤ *❬ᴇɴʟᴀᴄᴇ❭*' : 'ɪɴsᴘᴇᴄᴛ ➤ *❬ʟɪɴᴋ❭*'}_
*_Puedes inspeccionar el enlace del grupo con este comando._*
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
✨ི⋮ྀ⏝✨ི⋮ྀ✨⏝ ི⋮ྀ✨ི⋮ྀ⏝✨ི⋮ྀ✨⏝ི⋮ྀ
࣭     ۪۪۪۪࣪   ✧  ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ۪۪۪۪࣪    ࣭    𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪࣪ 𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪    ࣭     ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪     ࣭ ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪ 
    ࣭     ۪۪۪۪࣪    ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ࣭✧
 ࣭     ۪۪۪۪࣪     ࣭   ۫  ࣭     ۪۪۪۪࣪     ࣭    ࣭     ۪۪۪۪࣪     ࣭   ۫  ࣭     ۪۪۪۪࣪     ࣭   
 
࣭     ۪۪۪۪࣪   ✧  ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ۪۪۪۪࣪    ࣭    𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪࣪ 𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪    ࣭     ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪     ࣭ ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪ 
    ࣭     ۪۪۪۪࣪    ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ࣭✧
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒷꒦⏝
˖˖˖˖˖˖—》👑 ࿇𝑮𝑹𝑼𝑷𝑶༒𝑨𝑫𝑴𝑰𝑵𝑺࿇ 👑《—˖˖˖˖˖˖
꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒷꒦⏝
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
❍⃕⃟᎒⃟̀͜🎀꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ɴᴏᴛɪғɪᴄᴀʀ ➤ *❬ᴛᴇxᴛᴏ❭*' : 'ʜɪᴅᴇᴛᴀɢ ➤ *❬ᴛᴇxᴛᴏ❭*'}_
*_Notificar en el grupo, este comando es solo para admins._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎀꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'sᴀᴄᴀʀ ➤ *❬@ᴍᴇɴsɪᴏɴᴀʀ❭*' : 'ᴋɪᴄᴋ ➤ *❬@ᴛᴀɢ❭*'}_
*_Sacar al usuario del grupo, este comando solo es para los admins, y no funciona si el bot no es admin._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎀꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ɪɴᴠɪᴛᴀʀ ➤ *❬+ɴᴜᴍᴇʀᴏ❭*' : 'ɪɴᴠɪᴛᴇ ➤ *❬+ɴᴜᴍʙᴇʀ❭*'}_
*_invitar un usuario escribiendo el codigo de pais y los dígitos que vienen._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎀꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴅᴀʀᴀᴅᴍɪɴ ➤ *❬@ᴍᴇɴsɪᴏɴᴀʀ❭*' : 'ᴘʀᴏᴍᴏᴛᴇ ➤ *❬@ᴛᴀɢ❭*'}_
*_Dar admin a un usuario, solo si el bot es admin lo puede hacer._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎀꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ǫᴜɪᴛᴀʀᴀᴅᴍɪɴ ➤ *❬@ᴍᴇɴsɪᴏɴᴀʀ❭*' : 'ᴅᴇᴍᴏᴛᴇ ➤ *❬@ᴛᴀɢ❭*'}_
*_Quitarle admin a un usuario, solo si el bot es admin lo puede hacer._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎀꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴘʀᴏʜɪʙɪʀ ➤ *❬@ᴍᴇɴsɪᴏɴᴀʀ❭*' : 'ᴅᴇᴘʀɪᴠᴇ ➤ *❬@ᴛᴀɢ❭*'}_
*_Prohibir a un usuario, solo si el bot es admin lo puede hacer._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎀꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴅᴇsᴘʀᴏʜɪʙɪʀ ➤ *❬@ᴍᴇɴsɪᴏɴᴀʀ❭*' : 'ᴜɴᴅᴇᴘʀɪᴠᴇ ➤ *❬@ᴛᴀɢ❭*'}_
*_Desprohibir al usuario, solo si el bot es admin lo puede hacer._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎀꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴇᴅɪᴛᴀʀʙɪᴇɴᴠᴇɴɪᴅᴀ ➤ *❬ᴛᴇxᴛᴏ❭*' : 'sᴇᴛᴡᴇʟᴄᴏᴍᴇ ➤ *❬ᴛᴇxᴛᴏ❭*'}_
*_Editar bienvenida del grupo, para que presente automáticamente a los nuevos participantes que entren, este comando puede que funcione para los que no sean admins._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎀꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴇᴅɪᴛᴀʀᴀᴅɪᴏs ➤ *❬ᴛᴇxᴛᴏ❭*' : 'sᴇᴛʙʏᴇ ➤ *❬ᴛᴇxᴛᴏ❭*'}_
*_Editar el bye del grupo, para que el bot de el comando y presentar quien se salio._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎀꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴄᴀᴍʙɪᴀʀᴅᴇsᴄ ➤ *❬ᴛᴇxᴛᴏ❭*' : 'sᴇᴛᴅᴇsᴄ ➤ *❬ᴛᴇxᴛᴏ❭*'}_
*_Cambiar descripción del grupo._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎀꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴄᴀᴍʙɪᴀʀɴᴏᴍʙʀᴇ ➤ *❬ᴛᴇxᴛᴏ❭*' : 'sᴇᴛɴᴀᴍᴇ ➤ *❬ᴛᴇxᴛᴏ❭*'}_
*_Cambiar nombre del grupo._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎀꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴄᴀᴍʙɪᴀʀᴘᴘ ➤ *❬ɪᴍᴀɢᴇɴ❭*' : 'sᴇᴛᴘᴘɢᴄ ➤ *❬ɪᴍᴀɢᴇɴ❭*'}_
*_Cambiar foto del grupo, responde a una imagen para cambiarlo a la foto del grupo._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎀꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ɴᴜᴇᴠᴏᴇɴʟᴀᴄᴇ' : 'ʀᴇsᴇᴛʟɪɴᴋ'}_
*_Este comando es para crear o hacer un nuevo enlace del grupo._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎀꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ɢʀᴜᴘᴏ ᴀʙʀɪʀ' : 'ɢʀᴏᴜᴘ ᴏᴘᴇɴ'}_
*_Abrir el grupo, para que todos los participantes hablen._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎀꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ɢʀᴜᴘᴏ ᴄᴇʀʀᴀʀ' : 'ɢʀᴏᴜᴘ ᴄʟᴏsᴇ'}_
*_Cerrar el grupo para que solo los admins puedan hablar._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎀꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ɪɴᴠᴏᴄᴀʀ' : 'ᴛᴀɢᴀʟʟ'}_
*_Mensionar a todos los participantes del grupo._*
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
✨ི⋮ྀ⏝✨ི⋮ྀ✨⏝ ི⋮ྀ✨ི⋮ྀ⏝✨ི⋮ྀ✨⏝ི⋮ྀ
࣭     ۪۪۪۪࣪   ✧  ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ۪۪۪۪࣪    ࣭    𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪࣪ 𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪    ࣭     ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪     ࣭ ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪ 
    ࣭     ۪۪۪۪࣪    ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ࣭✧
 ࣭     ۪۪۪۪࣪     ࣭   ۫  ࣭     ۪۪۪۪࣪     ࣭    ࣭     ۪۪۪۪࣪     ࣭   ۫  ࣭     ۪۪۪۪࣪     ࣭   
 
࣭     ۪۪۪۪࣪   ✧  ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ۪۪۪۪࣪    ࣭    𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪࣪ 𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪    ࣭     ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪     ࣭ ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪ 
    ࣭     ۪۪۪۪࣪    ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ࣭✧
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒷꒦⏝꒦
˖˖˖˖˖˖—》🔥 ࿇𝑬𝑫𝑰𝑻 𝑨𝑼𝑫𝑰𝑶 𝑬𝑭𝑬𝑪𝑻࿇ 🔥《—˖˖˖˖˖˖
꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒷꒦⏝꒦.
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
❍⃕⃟᎒⃟̀͜🍡꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴇᴅɪᴛᴀʀʙᴀss' : 'ᴇᴅɪᴛʙᴀss'}_
*_Comando para editar audio, con efecto bass._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🍡꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴇᴅɪᴛᴀʀᴠɪʙʀᴀ' : 'ᴇᴅɪᴛᴠɪʙʀᴀ'}_
*_Comando para editar audio, con efecto vibra._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🍡꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴇᴅɪᴛᴀʀʙʟᴏᴡɴ' : 'ᴇᴅɪᴛʙʟᴏᴡɴ'}_
*_Comando para editar audio, con efecto blown._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🍡꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴇᴅɪᴛᴀʀᴅᴇᴇᴘ' : 'ᴇᴅɪᴛᴅᴇᴇᴘ'}_
*_Comando para editar audio, con efecto deep._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🍡꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴇᴅɪᴛᴀʀᴇᴀʀʀᴀᴘᴇ' : 'ᴇᴅɪᴛᴇᴀʀʀᴀᴘᴇ'}_
*_Comando para editar audio, con efecto earrape._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🍡꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴇᴅɪᴛᴀʀғᴀsᴛ' : 'ᴇᴅɪᴛғᴀsᴛ'}_
*_Comando para editar audio, con efecto fast._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🍡꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴇᴅɪᴛᴀʀғᴀᴛ' : 'ᴇᴅɪᴛғᴀᴛ'}_
*_Comando para editar audio, con efecto fat._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🍡꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴇᴅɪᴛᴀʀɴɪɢʜᴛᴄᴏʀᴇ' : 'ᴇᴅɪᴛɴɪɢʜᴛᴄᴏʀᴇ'}_
*_Comando para editar audio, con efecto nightcore._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🍡꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴇᴅɪᴛᴀʀʀᴏʙᴏᴛ' : 'ᴇᴅɪᴛʀᴏʙᴏᴛ'}_
*_Comando para editar audio, con efecto robot._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🍡꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴇᴅɪᴛᴀʀsʟᴏᴡ' : 'ᴇᴅɪᴛsʟᴏᴡ'}_
*_Comando para editar audio, con efecto slow._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🍡꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴇᴅɪᴛᴀʀsᴍᴏᴏᴛʜ' : 'ᴇᴅɪᴛsᴍᴏᴏᴛʜ'}_
*_Comando para editar audio, con efecto smooth._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🍡꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴇᴅɪᴛᴀʀᴛᴜᴘᴀɪ' : 'ᴇᴅɪᴛᴛᴜᴘᴀɪ'}_
*_Comando para editar audio, con efecto tupai._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🍡꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴇᴅɪᴛᴀʀᴀᴜᴅɪᴏ8ᴅ' : 'ᴇᴅɪᴛᴀᴜᴅɪᴏ8ᴅ'}_
*_Comando para editar audio, con efecto audio8D._*
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
✨ི⋮ྀ⏝✨ི⋮ྀ✨⏝ ི⋮ྀ✨ི⋮ྀ⏝✨ི⋮ྀ✨⏝ི⋮ྀ
࣭     ۪۪۪۪࣪   ✧  ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ۪۪۪۪࣪    ࣭    𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪࣪ 𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪    ࣭     ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪     ࣭ ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪ 
    ࣭     ۪۪۪۪࣪    ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ࣭✧
 ࣭     ۪۪۪۪࣪     ࣭   ۫  ࣭     ۪۪۪۪࣪     ࣭    ࣭     ۪۪۪۪࣪     ࣭   ۫  ࣭     ۪۪۪۪࣪     ࣭   
 
࣭     ۪۪۪۪࣪   ✧  ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ۪۪۪۪࣪    ࣭    𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪࣪ 𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪    ࣭     ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪     ࣭ ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪ 
    ࣭     ۪۪۪۪࣪    ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ࣭✧
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒷꒦
˖˖˖˖˖˖—》🌆 ࿇ 𝑬𝑭𝑬𝑪𝑻 𝑨𝑼𝑫𝑰𝑶 ࿇ 🌆《—˖˖˖˖˖˖
꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒷꒦
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
❍⃕⃟᎒⃟̀͜🎧꙰͢͡➢ _${usedPrefix}ʙᴀss_
*_Efecto de audio bass._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎧꙰͢͡➢ _${usedPrefix}ʙʟᴏᴡɴ_
*_Efecto de audio blown._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎧꙰͢͡➢ _${usedPrefix}ᴅᴇᴇᴘ_
*_Efecto de audio deep._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎧꙰͢͡➢ _${usedPrefix}ᴇᴀʀʀᴀᴘᴇ_
*_Efecto de audio earrape._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎧꙰͢͡➢ _${usedPrefix}ғᴀsᴛ_
*_Efecto de audio fast._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎧꙰͢͡➢ _${usedPrefix}ғᴀᴛ_
*_Efecto de audio fat._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎧꙰͢͡➢ _${usedPrefix}ɴɪɢʜᴛᴄᴏʀᴇ_
*_Efecto de audio nightcore._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎧꙰͢͡➢ _${usedPrefix}ʀᴇᴠᴇʀsᴇ_
*_Efecto de audio reverse._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎧꙰͢͡➢ _${usedPrefix}ʀᴏʙᴏᴛ_
*_Efecto de audio robot._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎧꙰͢͡➢ _${usedPrefix}sʟᴏᴡ_
*_Efecto de audio slow._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎧꙰͢͡➢ _${usedPrefix}sᴍᴏᴏᴛʜ_
*_Efecto de audio smooth._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎧꙰͢͡➢ _${usedPrefix}ᴛᴜᴘᴀɪ_
*_Efecto de audio tupai._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎧꙰͢͡➢ _${usedPrefix}ᴀᴜᴅɪᴏ8ᴅ_
*_Efecto de audio audio8D._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎧꙰͢͡➢ _${usedPrefix}ᴇᴄʜᴏ_
*_Efecto de audio echo._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎧꙰͢͡➢ _${usedPrefix}ᴅɪsᴛᴏʀᴛɪᴏɴ_
*_Efecto de audio distortion._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎧꙰͢͡➢ _${usedPrefix}ᴘɪᴛᴄʜ_
*_Efecto de audio pitch._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎧꙰͢͡➢ _${usedPrefix}ʀᴇᴠᴇʀʙ_
*_Efecto de audio reverb._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎧꙰͢͡➢ _${usedPrefix}ғʟᴀɴɢᴇʀ_
*_Efecto de audio flanger._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎧꙰͢͡➢ _${usedPrefix}ᴀᴘᴜʟsᴀᴛᴏʀ_
*_Efecto de audio apulsator._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎧꙰͢͡➢ _${usedPrefix}ᴛʀᴇᴍᴏʟᴏ_
*_Efecto de audio tremolo._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎧꙰͢͡➢ _${usedPrefix}ᴄʜᴏʀᴜs_
*_Efecto de audio chorus._*
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
✨ི⋮ྀ⏝✨ི⋮ྀ✨⏝ ི⋮ྀ✨ི⋮ྀ⏝✨ི⋮ྀ✨⏝ི⋮ྀ
࣭     ۪۪۪۪࣪   ✧  ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ۪۪۪۪࣪    ࣭    𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪࣪ 𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪    ࣭     ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪     ࣭ ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪ 
    ࣭     ۪۪۪۪࣪    ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ࣭✧
 ࣭     ۪۪۪۪࣪     ࣭   ۫  ࣭     ۪۪۪۪࣪     ࣭    ࣭     ۪۪۪۪࣪     ࣭   ۫  ࣭     ۪۪۪۪࣪     ࣭   
 
࣭     ۪۪۪۪࣪   ✧  ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ۪۪۪۪࣪    ࣭    𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪࣪ 𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪    ࣭     ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪     ࣭ ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪ 
    ࣭     ۪۪۪۪࣪    ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ࣭✧
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷
˖˖˖˖˖˖—》⛔ ࿇ 𝑶𝑭𝑭 / 𝑶𝑵 ࿇ ✅《—˖˖˖˖˖˖
꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
❍⃕⃟᎒⃟̀͜🎉꙰͢͡➢ _on_
*_Activar un comando predeterminado._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜🎉꙰͢͡➢ _off_
*_Desactivar un comando predeterminado._*
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
✨ི⋮ྀ⏝✨ི⋮ྀ✨⏝ ི⋮ྀ✨ི⋮ྀ⏝✨ི⋮ྀ✨⏝ི⋮ྀ
     ۪۪۪۪࣪   ✧  ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ۪۪۪۪࣪    ࣭    𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪࣪ 𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪    ࣭     ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪     ࣭ ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪ 
    ࣭     ۪۪۪۪࣪    ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ࣭✧
 ࣭     ۪۪۪۪࣪     ࣭   ۫  ࣭     ۪۪۪۪࣪     ࣭    ࣭     ۪۪۪۪࣪     ࣭   ۫  ࣭     ۪۪۪۪࣪     ࣭   
 
࣭     ۪۪۪۪࣪   ✧  ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ۪۪۪۪࣪    ࣭    𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪࣪ 𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪    ࣭     ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪     ࣭ ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪ 
    ࣭     ۪۪۪۪࣪    ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ࣭✧
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒷꒦
˖˖˖˖˖˖—》🚀 ࿇ 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑹𝑺𝑬 ࿇ 🚀《—˖˖˖˖˖˖
꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒷꒦
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
❍⃕⃟᎒⃟̀͜✅꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴠᴇʀɪғɪᴄᴀʀ ➤ *❬ɴᴏᴍʙʀᴇ.ᴇᴅᴀᴅ❭*' : 'ᴠᴇʀɪғɪ ➤ *❬ɴᴀᴍᴇ.ᴀɢᴇ❭*'}_
*_Verificarse con nombre y edad, ejemplo: Catalina.20._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜✅꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴀɴᴜʟᴀʀᴇɢ ➤ *❬ɪᴅ ʀᴇɢɪsᴛʀᴏ❭*' : 'ᴜɴʀᴇɢ ➤ *❬ɪᴅ ʀᴇɢɪsᴛʀᴀᴛɪᴏɴ❭*'}_
*_Puedes anular tu ID de registro usando tu numero de serie._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜✅꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ɪᴅʀᴇɢɪsᴛʀᴏ' : 'ɪᴅʀᴇɢɪsᴛᴇʀ'}_
*_Pueded ver tu ID de registro, para ver el numero de serie._*
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
✨ི⋮ྀ⏝✨ི⋮ྀ✨⏝ ི⋮ྀ✨ི⋮ྀ⏝✨ི⋮ྀ✨⏝ི⋮ྀ
     ۪۪۪۪࣪   ✧  ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ۪۪۪۪࣪    ࣭    𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪࣪ 𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪    ࣭     ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪     ࣭ ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪ 
    ࣭     ۪۪۪۪࣪    ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ࣭✧
 ࣭     ۪۪۪۪࣪     ࣭   ۫  ࣭     ۪۪۪۪࣪     ࣭    ࣭     ۪۪۪۪࣪     ࣭   ۫  ࣭     ۪۪۪۪࣪     ࣭   
 
࣭     ۪۪۪۪࣪   ✧  ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ۪۪۪۪࣪    ࣭    𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪࣪ 𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪    ࣭     ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪     ࣭ ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪ 
    ࣭     ۪۪۪۪࣪    ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ࣭✧
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒷꒦꒷꒦
˖˖˖˖˖˖—》🏆 ࿇ 𝑷𝑹𝑶𝑷𝑰𝑬𝑻𝑨𝑹𝑰𝑶𝑺 ࿇ 🏆《—˖˖˖˖˖˖
꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒦.꒷⏝࣪꒷꒦꒦꒷꒦⏝꒦.꒷꒷꒦꒷꒦
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜👑꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ʀᴇsᴘᴀʟᴅᴏ' : 'ʙᴀᴄᴋᴜᴘ'}_
*_Solo funciona para propietarios del bot._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜👑꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ʙᴀɴᴜsᴜᴀʀɪᴏ ➤ *❬@ᴍᴇɴsɪᴏɴᴀʀ❭*' : 'ʙᴀɴᴜsᴇʀ ➤ *❬@ᴛᴀɢ❭*'}_
*_Solo funciona para propietarios del bot._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜👑꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴅᴇsʙᴀɴᴜsᴜᴀʀɪᴏ ➤ *❬@ᴍᴇɴsɪᴏɴᴀʀ❭*' : 'ᴜɴʙᴀɴᴜsᴇʀ ➤ *❬@ᴛᴀɢ❭*'}_
*_Solo funciona para propietarios del bot._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜👑꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴛᴇɴᴇʀᴘᴏᴅᴇʀ' : 'ᴀᴜᴛᴏᴀᴅᴍɪɴ'}_
*_Solo funciona para propietarios del bot._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜👑꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ɴᴜᴇᴠᴀʙɪᴏʙᴏᴛ➤ *❬ᴛᴇxᴛᴏ❭*' : 'sᴇᴛʙɪᴏʙᴏᴛ ➤ *❬ᴛᴇxᴛᴏ❭*'}_
*_Solo funciona para propietarios del bot._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜👑꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ɴᴜᴇᴠᴏɴᴏᴍʙʀᴇʙᴏᴛ ➤ *❬ᴛᴇxᴛᴏ❭*' : 'sᴇᴛɴᴀᴍᴇʙᴏᴛ ➤ *❬ᴛᴇxᴛᴏ❭*'}_
*_Solo funciona para propietarios del bot._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜👑꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ɴᴜᴇᴠᴀғᴏᴛᴏʙᴏᴛ ➤ *❬ɪᴍᴀɢᴇɴ❭*' : 'sᴇᴛᴘᴘʙᴏᴛ ➤ *❬ɪᴍᴀɢᴇɴ❭*'}_
*_Solo funciona para propietarios del bot._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜👑꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴀᴄᴛᴜᴀʟɪᴢᴀʀ' : 'ᴜᴘᴅᴀᴛᴇ'}_
*_Solo funciona para propietarios del bot._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜👑꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ʙᴀɴᴇᴀʀᴄʜᴀᴛ' : 'ʙᴀɴᴄʜᴀᴛ'}_
*_Solo funciona para propietarios del bot._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜👑꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴅᴇsʙᴀɴᴇᴀʀᴄʜᴀᴛ' : 'ᴜɴʙᴀɴᴄʜᴀᴛ'}_
*_Solo funciona para propietarios del bot._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜👑꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'sᴀʟɪʀ' : 'ʟᴇᴀᴠᴇ'}_
*_Solo funciona para propietarios del bot._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜👑꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ʙʟᴏǫᴜᴇᴀʀ ➤ *❬@ᴍᴇɴsɪᴏɴᴀʀ❭*' : 'ʙʟᴏᴄᴋ ➤ *❬@ᴛᴀɢ❭*'}_
*_Solo funciona para propietarios del bot._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜👑꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴅᴇsʙʟᴏǫᴜᴇᴀʀ ➤ *❬@ᴍᴇɴsɪᴏɴᴀʀ❭*' : 'ᴜɴʙʟᴏᴄᴋ ➤ *❬@ᴛᴀɢ❭*'}_
*_Solo funciona para propietarios del bot._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜👑꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴏʙᴛᴇɴᴇʀᴀᴄʜɪᴠᴏ ➤ *❬ɴᴏᴍʙʀᴇ ᴀʀᴄʜɪᴠᴏ❭*' : 'ɢᴇᴛᴘʟᴜɢɪɴ ➤ *❬ғɪʟᴇɴᴀᴍᴇ❭*'}_
*_Solo funciona para propietarios del bot._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜👑꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ʙᴏʀʀᴀʀᴅᴀᴛᴏs ➤ *❬+ɴᴜᴍᴇʀᴏ❭*' : 'ᴅᴇʟᴇᴛᴇᴅᴀᴛᴀᴜsᴇʀ ➤ *❬+ɴᴜᴍᴇʀᴏ❭*'}_
*_Solo funciona para propietarios del bot._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜👑꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ᴜɴᴇᴛᴇ ➤ *❬ᴇɴʟᴀᴄᴇ❭*' : 'ᴊᴏɪɴ ➤ *❬ʟɪɴᴋ❭*'}_
*_Solo funciona para propietarios del bot._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜👑꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ʙᴄsᴜʙʙᴏᴛ ➤ *❬ᴛᴇxᴛᴏ❭*' : 'ᴋʀᴜʟssᴜʙʙᴏᴛ ➤ *❬ᴛᴇxᴛᴏ❭*'}_
*_Solo funciona para propietarios del bot._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜👑꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ʙᴄᴄ ➤ *❬ᴛᴇxᴛᴏ❭*' : 'ʙᴄᴄʜᴀᴛs ➤ *❬ᴛᴇxᴛᴏ❭*'}_
*_Solo funciona para propietarios del bot._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜👑꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ʙᴄɢᴄ ➤ *❬ᴛᴇxᴛᴏ❭*' : 'ʙʀᴏᴀᴅᴄᴀsᴛɢᴄ ➤ *❬ᴛᴇxᴛᴏ❭*'}_
*_Solo funciona para propietarios del bot._*
• • • ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ • • •
❍⃕⃟᎒⃟̀͜👑꙰͢͡➢ _${usedPrefix}${lenguajeEB.lenguaje() == 'es' ? 'ʙᴄ ➤ *❬ᴛᴇxᴛᴏ❭*' : 'ʙʀᴏᴀᴅᴄᴀsᴛᴀʟʟ ➤ *❬ᴛᴇxᴛᴏ❭*'}_
*_Solo funciona para propietarios del bot._*
◊┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◊
✨ི⋮ྀ⏝✨ི⋮ྀ✨⏝ ི⋮ྀ✨ི⋮ྀ⏝✨ི⋮ྀ✨⏝ི⋮ྀ
*╔◊╤◊═◊═❬🌹❭•ೋ°ৡৢ͜͡  ⟬❤️⟭ 𖥨֗°ೋ•❬🌹❭═◊═◊═◊╗*
╠◊╪▢❯❯ 🍷🍓 𝙆𝙧𝙪𝙡𝘽𝙤𝙩-𝙈𝘿 𝙊𝙛𝙞𝙘𝙞𝙖𝙡 𝘽𝙤𝙩 🍓🍷
*╚◊╧◊═◊═❬🌹❭•ೋ°ৡৢ͜͡  ⟬❤️⟭ 𖥨֗°ೋ•❬🌹❭═◊═◊═◊╝*
꒷꒦⏝꒦.꒷꒷꒦⏝꒦.꒷꒷꒦⏝꒦.꒷꒷꒦⏝꒦.꒷꒷꒦⏝꒦.꒷꒷꒦
✨ི⋮ྀ⏝✨ི⋮ྀ✨⏝ ི⋮ྀ✨ི⋮ྀ⏝✨ི⋮ྀ✨⏝ི⋮ྀ
     ۪۪۪۪࣪   ✧  ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ۪۪۪۪࣪    ࣭    𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪࣪ 𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪    ࣭     ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪     ࣭ ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪ 
    ࣭     ۪۪۪۪࣪    ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ࣭✧
 ࣭     ۪۪۪۪࣪     ࣭   ۫  ࣭     ۪۪۪۪࣪     ࣭    ࣭     ۪۪۪۪࣪     ࣭   ۫  ࣭     ۪۪۪۪࣪     ࣭   
 
࣭     ۪۪۪۪࣪   ✧  ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ۪۪۪۪࣪    ࣭    𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪۪࣪ 𝅦𝅦۪۪۪۪۪۪۪۪۪۪۪۪۪    ࣭     ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪     ࣭ ۪۪۪۪࣪    ࣭✧ 𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭   ۪۪۪۪࣪ 
    ࣭     ۪۪۪۪࣪    ࣭   𝅦𝅦۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫۫   ࣭     ࣭✧
 `.trim()
    
const vi = ['https://telegra.ph/file/405daebd4bc0d69e5d165.mp4',
'https://telegra.ph/file/1d0ad9f79f65f39895b08.mp4',
'https://telegra.ph/file/c25afc1685b13210ce602.mp4']

try {
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: { url: egoMenu.getRandom() }, gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: egoImg.getRandom(), gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try{
await conn.sendFile(m.chat, imagen5, 'menu.jpg', menu, fkontak, false, { mentions: [m.sender, global.conn.user.jid] })
} catch (error) {
return 
}}}} 

} catch (e) {
await m.reply(lenguajeEB['smsMalError3']() + '\n*' + lenguajeEB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeEB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeEB.smsMensError2()} ` + usedPrefix + command)
console.log(`⚠️ ${lenguajeEB['smsMensError2']()} ${usedPrefix + command} ⚠️`)
console.log(e)}}

handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu|allm|m|\?)$/i
export default handler
    
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
