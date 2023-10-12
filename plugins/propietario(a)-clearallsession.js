/* Codigo hecho por @Fabri115 y mejorado por BrunoSobrino */
import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(
      m.chat,
      { text: `${lenguajeEB['smsAvisoAG']()}💞 𝑻𝑰𝑬𝑵𝑬𝑺 𝑸𝑼𝑬 𝑼𝑻𝑰𝑳𝑰𝒁𝑨𝑹 𝑬𝑺𝑻𝑬 𝑪𝑶𝑴𝑨𝑵𝑫𝑶 𝑪𝑶𝑵 𝑬𝑳 𝑵𝑼𝑴𝑬𝑹𝑶 𝑶𝑭𝑰𝑪𝑰𝑨𝑳 𝑫𝑬𝑳 𝑩𝑶𝑻.` },
      { quoted: m }
    );
  }
 /* await conn.sendMessage(
    m.chat,
    { text: `${lenguajeEB['smsAvisoAG']()}🎧 ℙ𝕆ℝ 𝔽𝔸𝕍𝕆ℝ 𝔼𝕊ℙ𝔼ℝ𝔼, 𝕊𝔼 𝕀ℕ𝕀ℂ𝕀𝔸 𝔼𝕃 ℙℝ𝕆ℂ𝔼𝕊𝕆 𝔻𝔼 𝔼𝕃𝕀𝕄𝕀ℕ𝔸ℂ𝕀𝕆ℕ: ${filesDeleted} 𝔸ℝℂℍ𝕀𝕍𝕆 𝔻𝔼 𝕊𝔼𝕊𝕀𝕆ℕ, 𝕄𝔼ℕ𝕆𝕊 𝔼𝕃 𝔸ℝℂℍ𝕀𝕍𝕆: *(creds.json)*` },
    { quoted: m }
  );*/
  const sessionPath = './KrulBotSession/';
  try {
    if (!existsSync(sessionPath)) {
      return await conn.sendMessage(
        m.chat,
        { text: `${lenguajeEB['smsAvisoFG']()}🚀  𝕃𝔸 ℂ𝔸ℝℙ𝔼𝕋𝔸 (KrulBotSession) ℕ𝕆 𝕖𝕩𝕚𝕤𝕥𝕖 𝕠 𝕖𝕤𝕥𝕒 𝕧𝕒𝕔𝕚𝕒...*` },
        { quoted: m }
      );
    }
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      if (file !== 'creds.json') {
        await fs.unlink(path.join(sessionPath, file));
        filesDeleted++;
      }
    }
    if (filesDeleted === 0) {
      await conn.sendMessage(
        m.chat,
        { text: `${lenguajeEB['smsAvisoFG']()}🤖 𝑵𝑶 𝑺𝑬 𝑬𝑵𝑪𝑶𝑵𝑻𝑹𝑶 𝑵𝑨𝑫𝑨 𝑬𝑵 𝑳𝑨 𝑪𝑨𝑹𝑷𝑬𝑹𝑨: *(KrulBotSession)*` },
        { quoted: m }
      );
    } else {
      await conn.sendMessage(
        m.chat,
        { text: `${lenguajeEB['smsAvisoAG']()}🎧 ℙ𝕆ℝ 𝔽𝔸𝕍𝕆ℝ 𝔼𝕊ℙ𝔼ℝ𝔼, 𝕊𝔼 𝕀ℕ𝕀ℂ𝕀𝔸 𝔼𝕃 ℙℝ𝕆ℂ𝔼𝕊𝕆 𝔻𝔼 𝔼𝕃𝕀𝕄𝕀ℕ𝔸ℂ𝕀𝕆ℕ: ${filesDeleted} 𝔸ℝℂℍ𝕀ℂ𝕆 𝔻𝔼 𝕊𝔼𝕊𝕀𝕆ℕ, 𝕄𝔼ℕ𝕆𝕊 𝔼𝕃 𝔸ℝℂℍ𝕀𝕍𝕆 *(creds.json)*` },
        { quoted: m }
      );
    }
  } catch (err) {
    console.error('⚠️𝗘𝗥𝗥𝗢𝗥⚠️\n𝙴𝚁𝚁𝙾𝚁 𝙴𝙽 𝙻𝙰 𝙲𝙰𝚁𝙿𝙴𝚃𝙰, 𝙽𝙾 𝚂𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙾 𝙽𝙰𝙳𝙰 𝙴𝙽 𝙻𝙾𝚂 𝙰𝚁𝙲𝙷𝙸𝚅𝙾𝚂 𝙳𝙴 𝚂𝙴𝚂𝙸𝙾𝙽:', err);
    await conn.sendMessage(
      m.chat,
      { text: `${lenguajeEB['smsAvisoFG']()} 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁 𝙻𝙰 𝙲𝙰𝚁𝙿𝙴𝚃𝙰 𝙳𝙴 𝚂𝙴𝚂𝙸𝙾𝙽, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾...` },
      { quoted: m }
    );
  }
  await conn.sendMessage(m.chat, {text: `${lenguajeEB['smsAvisoRG']()}𝐅𝐔𝐍𝐂𝐈𝐎𝐍 𝐂𝐎𝐍 𝐄𝐗𝐈𝐓𝐎!!!\n𝚂𝙸 𝙴𝙻 𝙱𝙾𝚃 𝙽𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴, 𝙵𝙰𝚅𝙾𝚁 𝙳𝙴 𝙷𝙰𝙲𝙴𝚁 𝙿𝙴𝚀𝚄𝙴𝙽̃𝙾𝚂 𝚂𝙿𝙰𝙼.\n\n*𝙿𝙾𝚁 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n${usedPrefix}s\n${usedPrefix}s\n${usedPrefix}s`}, { quoted: m })}
handler.help = ['del_reg_in_session_owner'];
handler.tags = ['owner'];
handler.command = /^(del_reg_in_session_owner|dsowner|clearallsession|deletekrul)$/i;
handler.rowner = true
export default handler;
