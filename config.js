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
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_30_09_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDk4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjksXG4gICAgICAgIDg3LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTE3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU5LFxuICAgICAgICA5MixcbiAgICAgICAgMzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjU0LFxuICAgICAgICA1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjI5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTk5LFxuICAgICAgICA2NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDgzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjE2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAzMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTU4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODQsXG4gICAgICAgIDc2LFxuICAgICAgICAzMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NixcbiAgICAgICAgOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxODQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAzNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2LFxuICAgICAgICA1MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDk0LFxuICAgICAgICA5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDcxLFxuICAgICAgICAxNixcbiAgICAgICAgMTcyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTM5LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTksXG4gICAgICAgIDk2LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgODIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNixcbiAgICAgICAgMTE1LFxuICAgICAgICA2NixcbiAgICAgICAgMTE3LFxuICAgICAgICA1MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAzLFxuICAgICAgICA4OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDg1LFxuICAgICAgICAyNixcbiAgICAgICAgMTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTksXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkFCbllLSE90SjVIZmVQWmUyTjJhZmx0L0ZEQjJtNVNFSkdVV0IvWjZTbFU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkpndlRCQlI2UkRTWDZwRzlfT3ZFcGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2I5OTU2ODYtNzM3ZS00NDJiLWEyZDUtNGZhYWExMmU3MWI2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQyLFxuICAgICAgNjMsXG4gICAgICAxOTcsXG4gICAgICAyNTQsXG4gICAgICA1OCxcbiAgICAgIDEwMixcbiAgICAgIDExOSxcbiAgICAgIDIyNCxcbiAgICAgIDc1LFxuICAgICAgNTcsXG4gICAgICAyNTUsXG4gICAgICAyNDEsXG4gICAgICA0OSxcbiAgICAgIDE1MixcbiAgICAgIDQ1LFxuICAgICAgNixcbiAgICAgIDIwLFxuICAgICAgODMsXG4gICAgICAyMzYsXG4gICAgICA5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NyxcbiAgICAgIDIyNixcbiAgICAgIDE4NyxcbiAgICAgIDIyNSxcbiAgICAgIDE3NyxcbiAgICAgIDE3MSxcbiAgICAgIDI0NixcbiAgICAgIDE0MyxcbiAgICAgIDE2MixcbiAgICAgIDk0LFxuICAgICAgODcsXG4gICAgICAxMDUsXG4gICAgICAyMixcbiAgICAgIDEyMyxcbiAgICAgIDEsXG4gICAgICAyMjYsXG4gICAgICAyMzIsXG4gICAgICAxMDksXG4gICAgICAxMjIsXG4gICAgICAxODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTko1UkdQQTdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI3NjU3MDA2ODYwOjU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTGluZG9rdWhsZSBEZXNpZ25zXCIsXG4gICAgXCJsaWRcIjogXCI3NDg3ODU2MDU1MTAzNjo1NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNYllnekFRNXZEN3RnWVlSaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkRvNThodXQvUnhqbURwaWZma2d3TUpkYkc0STJ5TXQ5ZkZXdE1qRUY2bEk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiK0I1cFJQdW14Skl0T2VpRHdhWmVKQ2JiZFIyRG5QOHJaWmhGLytweEd5U1Y4cXlSYTdFVTRMOEZxRmVTSlh4bjdYdFFVa3JlU3piVXpiTEdWK053QXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiU1o4RldmTWZVbXYwRzlxMmdQMWNuTkNMR3ZtWGVLZEtac0F5Z0FjcUpUMjFmNlk3ZUFLN1JmdkhONU9VcURCUk9KbVI3NEUyQUw5VnFXai91Wk5WaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjc2NTcwMDY4NjA6NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTg4ODYxOFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="    // PUT your SESSION_ID 


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
