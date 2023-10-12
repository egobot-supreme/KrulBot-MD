import axios from 'axios' 
  
 let handler = async (m, {  
 conn, text, command, usedPrefix 
 }) => { 
 if (!text) return m.reply(`*💎 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀/𝙐𝙍𝙇*\n\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊 𝘿𝙀 𝙐𝙎𝙊: *${usedPrefix + command}* <url>\n\n*𝙊𝙏𝙍𝙊 𝙀𝙅𝙀𝙈𝙋𝙇𝙊:* ${usedPrefix + command} https://github.com/BrunoSobrino`) 
 m.reply("𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙉𝘿𝙊...\n*⟬⬇️⟭ ▰▰▰▰▰▰▰▱▱ 87%*") 
 var phone = await ssweb(text, 'phone') 
 var desktop = await ssweb(text, 'desktop') 
 var tablet = await ssweb(text, 'tablet') 
 var res = `` 
 if (command === 'sshp') { 
 await conn.sendFile(m.chat, phone.result, '',res, m, false) 
 } 
 if (command === 'ssweb' || command === 'sstablet') { 
 await conn.sendFile(m.chat, tablet.result, '',res, m, false) 
 } 
 if (command === 'sspc') { 
 await conn.sendFile(m.chat, desktop.result, '',res, m, false) 
 } 
 } 
 handler.help = ['ssweb','sspc','sshp','sstablet'].map(v => v + ' <url>') 
 handler.tags = ['internet'] 
 handler.command = /^(ssweb|sstablet|sspc|sshp)$/i 
  
 handler.limit = false 
  
 export default handler 
  
 async function ssweb(url, device = 'desktop'){ 
      return new Promise((resolve, reject) => { 
           const base = 'https://www.screenshotmachine.com' 
           const param = { 
             url: url, 
             device: device, 
             cacheLimit: 0 
           } 
           axios({url: base + '/capture.php', 
                method: 'POST', 
                data: new URLSearchParams(Object.entries(param)), 
                headers: { 
                     'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' 
                } 
           }).then((data) => { 
                const cookies = data.headers['set-cookie'] 
                if (data.data.status == 'success') { 
                     axios.get(base + '/' + data.data.link, { 
                          headers: { 
                               'cookie': cookies.join('') 
                          }, 
                          responseType: 'arraybuffer' 
                     }).then(({ data }) => { 
                        let result = { 
                             status: 200, 
                             author: 'SeñorHekyzde', 
                             result: data 
                         } 
                          resolve(result) 
                     }) 
                } else { 
                     reject({ status: 404, author: 'SeñorHekyzde', message: data.data }) 
                } 
           }).catch(reject) 
      }) 
 }
