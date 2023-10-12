import similarity from 'similarity'

const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/^ⷮ/i.test(m.quoted.text)) return !0
    this.tekateki = this.tekateki ? this.tekateki : {}
    if (!(id in this.tekateki)) return m.reply('🧐🍷 Estimado/a ese acertijo ya ha terminado, llego o respondio tarde.')
    if (m.quoted.id == this.tekateki[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tekateki[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.response.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tekateki[id][2]
            m.reply(`╔┈┈┈┉┈┈┈┉┈┈┈┉┈┈┈┉┈┈ • • • • • • •\n║*ੈ✩‧₊˚✧*ੈ✩‧₊˚✧*ੈ✩‧₊˚✧*ੈ✩‧₊˚✧*ੈ\n╠▻【 🎉 🎊 𝙂𝙖𝙢𝙚 𝘼𝙘𝙚𝙧𝙩𝙞𝙟𝙤𝙨 🎊 🎉】\n║*ੈ✩‧₊˚✧*ੈ✩‧₊˚✧*ੈ✩‧₊˚✧*ੈ✩‧₊˚✧*ੈ\n╠┈┈┈┉┈┈┈┉┈┈┈┉┈┈┈┉┈┈ • • • • • • •\n*║ La respuesta es correcta!! ✨🥳🎊*\n*║ Ahora ganaste:* +${this.tekateki[id][2]} de EXP 💦\n╚┈┈┈┉┈┈┈┉┈┈┈┉┈┈┈┉┈┈ • • • • • • •`)
            clearTimeout(this.tekateki[id][3])
            delete this.tekateki[id]
        } else if (similarity(m.text.toLowerCase(), json.response.toLowerCase().trim()) >= threshold) m.reply(`😂 Ni cerca, pero casi lo logras!.`)
        else m.reply('*⛔ La respuesta es incorrecta, intente nuevamente.*')
    }
    return !0
}

handler.exp = 0

export default handler
