const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="lindokuhle.ndlangamandla@gmail.com"
global.location="Pongola, KZN."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/South Africa";
global.github=process.env.GITHUB|| "https://github.com/Lindokuhle17/Lindo-Suhail-Md";
global.gurl  =process.env.GURL  || "https://https://wa.me/message/MAD66BH7UVM6G1";
global.website=process.env.GURL || "https://https://wa.me/message/MAD66BH7UVM6G1" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://drive.google.com/file/d/1OgpK4VNVilYd92u7LGizlkr4MAqa9jHE/view?usp=sharing" ; // SET LOGO FOR IMAGE 



global.devs = "0657006860" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "0657006860";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©Lindo sᴜʜᴀɪʟBot²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Lindokuhle Bot",
  packname: process.env.PACK_NAME || "♥️",
    botname : process.env.BOT_NAME  || "Lindokuhle Bot",
  ownername:process.env.OWNER_NAME|| "Lindokuhle Designs",

  sessionName:process.env.SESSION_ID || "SUHAIL_07_11_02_19_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNkhKMktYY2wzUXR0SUhCb1JRc1d5R2hDOVF4SUNrTlNEQVJGWGdiRCtVOD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInZWWXpQQnNJNVlGMWtHVjVzZjZCQ3huS055ZlZlcDdBbVExbEEyMjA0aUk9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwib0ZQcDNROTg0UE1FeFZCbWN6MkNCWkE4ZGkzNzFnUjcwSzdIcDR1L3AwVT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkpObG8xcUpORHZOQmJRd1J1T1k3aHZweis3TzNQK1F6OGQ3UEdRNUtvV2M9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiRUE3bERpeWJtU1lFZzA0eDVvMEZ4bjE1ck1tV0FOamQxdkJmeUZENzhIRT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImFGZXBIUkdURE9MbG5FTFd6L0wweTg1cVRLMXZNemZmY1lwZjR3bTFEQm89XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJhSDhYdHBvVUNnb3I0SmIwbHorYmg1cndIUG80NGs0N202TnRaeVFrVmtRPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiU25rN0tDSkdFTytxdkQ2R1o2eVBiZjRFNTFIS1VxQXR1Uzc5VnY5TEJFbz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCIraUZKK2duNnR4TlZzQ3R1WnRDU0lqRGhSMEdKaTBRczJmUHdPNWh1MzhkYlM3T2dBUGhTc1RRSlliM3FXMlpaS2RnK1AzcWdyQlB4V2czWEM5dUNpQT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTA0LFwiYWR2U2VjcmV0S2V5XCI6XCJqRHF1ZWZxVHpGaWdlZFBSa2ZlSDJab01lT2pJT2RFeFhaSEZrRnMrTkFrPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiS29MVWhyeGVUbHVadkppN2pXSWpVUVwiLFwicGhvbmVJZFwiOlwiZGExMTNmOTctN2E2Zi00OGVmLTlhOWUtZmQwMDZhNTFhN2NjXCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJGMXZJTDgwSUh1VXlwZjFZdjVWeVdiWDdEZlE9XCJ9LFwicmVnaXN0ZXJlZFwiOmZhbHNlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIllHV3lJMEN4WXptTlI4YXl6TFZ5VmcxZVBtRT1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDTVRZZ3pBUWt2N0xyZ1lZQnlBQUtBQT1cIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIkRvNThodXQvUnhqbURwaWZma2d3TUpkYkc0STJ5TXQ5ZkZXdE1qRUY2bEk9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJmTHJWOCsrNkh1NWJMQUQ2aDZzazN1RmI0NnNxRFlGbUM1UVhBVTRqaU9WL2QxWXJyUlVmUzdRZlM0Qmo0cnF3b3pXeE5OeDRwTEdqMDYrU0FOZ1dEUT09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIkcySndBU3lsazJZMlhmNExWUnp6VkE5K0EvRlN3SEsvMUhaUngzSThuaGJZdUdmMlFOanR0SXQ4cFgwKzBVRzBwb2RTajd0Y2tWcWF4Y0xNbmsweGdBPT1cIn0sXCJtZVwiOntcImlkXCI6XCIyNzY1NzAwNjg2MDo2N0BzLndoYXRzYXBwLm5ldFwiLFwibmFtZVwiOlwiTGluZG9rdWhsZSBEZXNpZ25zXCIsXCJsaWRcIjpcIjc0ODc4NTYwNTUxMDM2OjY3QGxpZFwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjI3NjU3MDA2ODYwOjY3QHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQlE2T2ZJYnJmMGNZNWc2WW4zNUlNRENYV3h1Q05zakxmWHhWclRJeEJlcFNcIn19XSxcInBsYXRmb3JtXCI6XCJzbWJhXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzA4MzI2Njc4LFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQU9taFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9tUi5qc29uIjogIntcImtleURhdGFcIjpcImY3YXFZWk5UVWFZcExmL040V01PYWpKajIvamRiVm9qWEh5MVhVaUwxcm89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAwNzIzNzc1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE2OTUwNTk5ODk0MTFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPbVMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwSitPem1pMmVlazBCMElOT0tNSFczYnEvNGRrRmJKU25VRHM4VHQyODdjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMDcyMzc3NSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNjk1MTE0MTc5NTExXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT21XLmpzb24iOiAie1wia2V5RGF0YVwiOlwibFdnTVpFaExXeUhIbFFZbXM2TWlvNUh5T2liajZYeUlzRG1NZ2NzOGQzRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDA3MjM3NzgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9tWS5qc29uIjogIntcImtleURhdGFcIjpcIlhVVXN4QUpCSUo1TWQ4WnJ2TG9GK2ZxdjZBZDEyT1VvcDV3a0s0UnBzM0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAwNzIzNzc4LFwiY3VycmVudEluZGV4XCI6NyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDIsMyw3XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPbVouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4MUZtbngwZ1UyNWxZaFhlbWJHcjAxbGJpaHl3Q1FsbGRHVUZGSU5VRVJ3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMDcyMzc3OCxcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9tYS5qc29uIjogIntcImtleURhdGFcIjpcIkJ1cDV4ZVlQc2Frc2tpS2dlRDFVS0tEM21abG01U1dUclRnS1Rxd2thSWM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAwNzIzNzc4LFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDIsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT21iLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNXFOYmdzU0hpWE5Ebi9pb1RzTlhrT0U4UHBZTXRKcXFMdjVKdG1iSGhOND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDA3MjM3NzgsXCJjdXJyZW50SW5kZXhcIjo4LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT21jLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWjlHanJMOUF2aHFOcnE2MDRQZlQ2NHlVWDhFRTQ5eU95MnRwV3FGSTR4QT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDA3MjM3NzgsXCJjdXJyZW50SW5kZXhcIjo4LFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9tZC5qc29uIjogIntcImtleURhdGFcIjpcIkw4NEZaVXlCN0JuVFdiOEIwOFlzYWJkdGUyVTVQRFlIUHh2SVQ1RkFObmM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAwNzIzNzc4LFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNjk3NzA1NTY2NTMyXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT21lLmpzb24iOiAie1wia2V5RGF0YVwiOlwiN0V1am96ZnBFMXpTYW14QTFkRm5ITkNuYXQ2NFA4UXZHd0tMUzg3Q2VqZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDA3MjM3NzksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9tZi5qc29uIjogIntcImtleURhdGFcIjpcIitYZnNYOG90MUJmTmhCZ1BibENaOUwzYm5XRFZDZm5CSURTVHRma0NvZHc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAwNzIzNzc5LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9tZy5qc29uIjogIntcImtleURhdGFcIjpcInpLQ2dKeFlyNC9ISk5ZalBMUGYxQ3czWWxmYjFMMWhtem1NcWphOFY3U0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAwNzIzNzc5LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPbWguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIrc3ZCRU1YMTEwY1Y5R3ZjOU1QTG5oWGNvb1gzU1h3aE1jRThkZDJXWEtNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMDcyMzc3OSxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT21pLmpzb24iOiAie1wia2V5RGF0YVwiOlwickFFaGZIcW9UZHBXZ2FzWXpJNkpRekdtTEVNWlE2TVdpbkhTbzQyZlJBaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDA3MjM3NzksXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE2OTk1NTQ4NzUwNzJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPbWouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJaV3A0a0RZbVZHbUkveDR5NWJSMEVVZ1dYOUt1UzBTdXdHcUdqRlBNM2Q4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMDcyMzc4MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNjk5NTU0OTMwMzExXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT21rLmpzb24iOiAie1wia2V5RGF0YVwiOlwiM1pTaVZoMDdVTUZzSjE5dVFWNGRSK050eHAwVElkMS9VQkN0L2pOV2FYVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDA3MjM3ODAsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIxNzAyMTQ3Nzg4OTIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT21uLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYUdRTHJHQlVkcXhrc2VaQStrZFpJVktqb0RKQ2dKcEJYQm1zVk0wSitjST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDA3MjM3ODAsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDVdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9tby5qc29uIjogIntcImtleURhdGFcIjpcIndJaE82eGh2RzZSbHJ6QS96Tk9yR0ZPZDQzK016OTltbTdWaUdSYTEzNk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAwNzIzNzgwLFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCw1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDc3NjEyNDE0NDhcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUQ0QUFPbWwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzaWhjVGJTc2RReUxTTnlpSEdXa24yYml0d2JpNE9SKzlLZ0dncDhST2MwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMDcyMzc4MCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDI1MTU0MzQ2OThcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUVFQUFPbW0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJrSlV6OHM3aGJkanNvVjNObG5JYzFHeXRCam5ZN01temE0MEJHOUtJY1MwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMDcyMzc4MCxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDM1MzAxMDUxMDRcIn0iCn0=",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
