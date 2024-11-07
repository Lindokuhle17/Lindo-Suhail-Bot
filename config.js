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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_03_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDczLFxuICAgICAgICAxNDQsXG4gICAgICAgIDMwLFxuICAgICAgICA4NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDAsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMixcbiAgICAgICAgNDIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTcxLFxuICAgICAgICA2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDMyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjksXG4gICAgICAgIDEzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNixcbiAgICAgICAgMTgyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTk5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDczLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjU0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjEzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM3LFxuICAgICAgICA0LFxuICAgICAgICA4MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDczLFxuICAgICAgICA2OSxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MixcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc4LFxuICAgICAgICA4NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM0LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDU0LFxuICAgICAgICA4LFxuICAgICAgICA2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTY3LFxuICAgICAgICA1MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQyLFxuICAgICAgICA4NixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzksXG4gICAgICAgIDEsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDcxLFxuICAgICAgICA0MixcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY0LFxuICAgICAgICA1OCxcbiAgICAgICAgNDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAwLFxuICAgICAgICAxNixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEzLFxuICAgICAgICA2NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzksXG4gICAgICAgIDk2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImY4STRlV3Vla1pDK2RUcVJybmJacVZQbVdtQ0RzK0tVN3U4cENJbGdkblk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImRyVy1kQ004UjQyTHdJN0N5Vk9QUmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTQ2YzRkZWQtNjM1MC00NDRlLWIxMzQtMjhlZjg1ZWI0ZDBlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OCxcbiAgICAgIDcyLFxuICAgICAgMTk2LFxuICAgICAgMTIxLFxuICAgICAgMzAsXG4gICAgICA0LFxuICAgICAgMjI4LFxuICAgICAgMTMyLFxuICAgICAgMjA3LFxuICAgICAgMTQ4LFxuICAgICAgNzAsXG4gICAgICAxNDEsXG4gICAgICAxNDAsXG4gICAgICAxMyxcbiAgICAgIDg4LFxuICAgICAgMTgyLFxuICAgICAgMTUwLFxuICAgICAgMzAsXG4gICAgICAyMjksXG4gICAgICAyMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUxLFxuICAgICAgMTY2LFxuICAgICAgODUsXG4gICAgICAyMjMsXG4gICAgICAyMyxcbiAgICAgIDIwNixcbiAgICAgIDU2LFxuICAgICAgOTcsXG4gICAgICAxOTIsXG4gICAgICA4LFxuICAgICAgMTc3LFxuICAgICAgMTUzLFxuICAgICAgNjQsXG4gICAgICAxODUsXG4gICAgICAxODcsXG4gICAgICA1LFxuICAgICAgMjUxLFxuICAgICAgMTk1LFxuICAgICAgMTAwLFxuICAgICAgMTQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1TUzhWRVE1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNzY1NzAwNjg2MDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTGluZG9rdWhsZSBEZXNpZ25zXCIsXG4gICAgXCJsaWRcIjogXCI3NDg3ODU2MDU1MTAzNjo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00zWWd6QVFxNFdldVFZWUZDQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRG81OGh1dC9SeGptRHBpZmZrZ3dNSmRiRzRJMnlNdDlmRld0TWpFRjZsST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI5YjRuMnhNeFlCRHdtTXFwSERzcU80bkh1WFFGVUJpWDRCM3RUWE9GeXMzdWdjSkZBYjh3ZkNudktDNWRzMENqaXRjVVVBb0NDU2hzcGJpQitEaU1Edz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIwV3pUVTBQR01xdUttRjl5ODFiWGFsZVUzZ1hRaTdyOE5YT1JRTjZ0b3ZTT2lxdmhMR2pHaGMwcmdsRW43YlIrVXpMUjBPVjNIQW5DUzdCT3VjTUpDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNzY1NzAwNjg2MDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA2NDI2MDhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"    // PUT your SESSION_ID 


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
