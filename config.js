const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="lindokuhle.ndlngamandla99@gmail.com"
global.location="Johannesburg, South Africa."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa, Johannesburg";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/0087a0f2c1bc2446e4ce5.png" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Lindo Tech ²²¹-X-Whatsapp bot Beta!" 


global.devs = "27657006860" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "27657006860";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/0087a0f2c1bc2446e4ce5.png" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_20_09_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAzMyxcbiAgICAgICAgOSxcbiAgICAgICAgODAsXG4gICAgICAgIDgzLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDksXG4gICAgICAgIDk0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAwLFxuICAgICAgICAxODYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTksXG4gICAgICAgIDkwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODIsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjAxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjI3LFxuICAgICAgICA0OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDY5LFxuICAgICAgICA0NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjksXG4gICAgICAgIDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1LFxuICAgICAgICA3MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyNCxcbiAgICAgICAgODYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTksXG4gICAgICAgIDc2LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDM4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDUyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDYwLFxuICAgICAgICA1LFxuICAgICAgICA0MixcbiAgICAgICAgMTUsXG4gICAgICAgIDM0LFxuICAgICAgICA3OSxcbiAgICAgICAgODAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDI5LFxuICAgICAgICA4OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDYwLFxuICAgICAgICAzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDUsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk0LFxuICAgICAgICA4OSxcbiAgICAgICAgODcsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNixcbiAgICAgICAgMTI0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjIzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDczLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI5LFxuICAgICAgICA3MixcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrVXcvc1RFbjdDeTFQYTBYNzlhNFJsRFlEMGFWek9rTng0NTg2VFA1V3JjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwQVkwTkdoNFR4LVdzeXFibFY1c1JBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjIyNWJlYWJkLTNhOTQtNDM0OC04OWEyLTI4NmIwZWQwOTQxNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjcsXG4gICAgICAxNDAsXG4gICAgICAxOTAsXG4gICAgICAxNDgsXG4gICAgICAyNTUsXG4gICAgICAzOCxcbiAgICAgIDE2MixcbiAgICAgIDE2MCxcbiAgICAgIDExNyxcbiAgICAgIDE2NyxcbiAgICAgIDU2LFxuICAgICAgMTUyLFxuICAgICAgMTI0LFxuICAgICAgMTE2LFxuICAgICAgMjEyLFxuICAgICAgMTIwLFxuICAgICAgMTkxLFxuICAgICAgNixcbiAgICAgIDE5OCxcbiAgICAgIDQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY5LFxuICAgICAgMTM5LFxuICAgICAgODksXG4gICAgICAyNTEsXG4gICAgICA4NCxcbiAgICAgIDUyLFxuICAgICAgNjEsXG4gICAgICA1NixcbiAgICAgIDI1NSxcbiAgICAgIDE4NixcbiAgICAgIDIyMyxcbiAgICAgIDEyOCxcbiAgICAgIDg3LFxuICAgICAgOTAsXG4gICAgICAxMDQsXG4gICAgICAxNzYsXG4gICAgICA3NSxcbiAgICAgIDI1MyxcbiAgICAgIDYyLFxuICAgICAgMjI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdCNlY0SzdKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNzY1NzAwNjg2MDo2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkxpbmRva3VobGUgRGVzaWduc1wiLFxuICAgIFwibGlkXCI6IFwiNzQ4Nzg1NjA1NTEwMzY6NjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWJZZ3pBUTQvbTJ0d1lZVGlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJEbzU4aHV0L1J4am1EcGlmZmtnd01KZGJHNEkyeU10OWZGV3RNakVGNmxJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlRMd2x0SHFPL29TejJnaCtaNS96eW9lMHJabGlDb0MweVl6SjlKU0U4c2VsYm5FL1BuSkZ3b2UxL0x6dWR3L3Fxem44NlpUWWxPTFZ5Uk83YW5zMEJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk5Ecno5cXBSYUVGV3hlU25wOGxvS21xOGxEYkdPQlc0bmgxNDR3NVp6MDZzRmpGd1RURUszZlJBbWpkUURLZWV2V3BNajNpMUZzdzMzZWVuUXZmdUFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI3NjU3MDA2ODYwOjYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjY4NTY0MjNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"    // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Lindo Bot-X-Md",
  ownername:process.env.OWNER_NAME|| "Lindokuhle Designs",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
