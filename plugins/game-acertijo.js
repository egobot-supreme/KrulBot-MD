import fs from 'fs'

let timeout = 60000
let poin = 800

let handler = async (m, { conn, usedPrefix }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {}
    let id = m.chat
    if (id in conn.tekateki) {
        conn.reply(m.chat, '╔┈┈┈┉┈┈┈┉┈┈┈┉┈┈┈┉┈┈ • • • • • • •\n║*ੈ✩‧₊˚✧*ੈ✩‧₊˚✧*ੈ✩‧₊˚✧*ੈ✩‧₊˚✧*ੈ \n╠▻【 🎉 🎊 𝙂𝙖𝙢𝙚 𝘼𝙘𝙚𝙧𝙩𝙞𝙟𝙤𝙨 🎊 🎉】\n║*ੈ✩‧₊˚✧*ੈ✩‧₊˚✧*ੈ✩‧₊˚✧*ੈ✩‧₊˚✧*ੈ\n╠┈┈┈┉┈┈┈┉┈┈┈┉┈┈┈┉┈┈ • • • • • • •\n*║ Todavia hay un acertijo sin resolver.*\n*║ Resuelvalo y gana 800 de Exp*\n╚┈┈┈┉┈┈┈┉┈┈┈┉┈┈┈┉┈┈ • • • • • • •', conn.tekateki[id][0])
        throw false
    }
    let tekateki = JSON.parse(fs.readFileSync(`./src/game/acertijo.json`))
    let json = tekateki[Math.floor(Math.random() * tekateki.length)]
    let _clue = json.response
    let clue = _clue.replace(/[A-Za-z]/g, '_')
    let caption = `
╔┈┈┈┉┈┈┈┉┈┈┈┉┈┈┈┉┈┈ • • • • • • •
║*ੈ✩‧₊˚✧*ੈ✩‧₊˚✧*ੈ✩‧₊˚✧*ੈ✩‧₊˚✧*ੈ 
╠▻【 🎉 🎊 𝙂𝙖𝙢𝙚 𝘼𝙘𝙚𝙧𝙩𝙞𝙟𝙤𝙨 🎊 🎉】
║*ੈ✩‧₊˚✧*ੈ✩‧₊˚✧*ੈ✩‧₊˚✧*ੈ✩‧₊˚✧*ੈ
╚┈┈┈┉┈┈┈┉┈┈┈┉┈┈┈┉┈┈ • • • • • • •

*${json.question}*

╔┈┈┈┉┈┈┈┉┈┈┈┉┈┈┈┉┈┈ • • • • • • •
║*ੈ✩‧₊˚✧*ੈ✩‧₊˚✧*ੈ✩‧₊˚✧*ੈ✩‧₊˚✧*ੈ 
╠▻ *❲⏳⚡ TIEMPO DEL JUEGO ⚡⏳❳:*
╠▻ ${(timeout / 1000).toFixed(2)} segundos
╠┈┈┈┉┈┈┈┉┈┈┈┉┈┈┈┉┈┈ • • • • • • •
╠▻ *❲🌟🍁 BONO EXP 🍁🌟❳:*
╠▻ +${poin} Exp
║*ੈ✩‧₊˚✧*ੈ✩‧₊˚✧*ੈ✩‧₊˚✧*ੈ✩‧₊˚✧*ੈ
╚┈┈┈┉┈┈┈┉┈┈┈┉┈┈┈┉┈┈ • • • • • • •
`.trim()
    conn.tekateki[id] = [
       await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(async () => {
            if (conn.tekateki[id]) await conn.reply(m.chat, `*❲⏳❳ Se acabó el tiempo estimado/a.\n*La respuesta era:*\n${json.response}`, conn.tekateki[id][0])
            delete conn.tekateki[id]
        }, timeout)
    ]
}

handler.help = ['acertijo']
handler.tags = ['game']
handler.command = /^(acertijo|acert|adivinanza|tekateki)$/i

export default handler
