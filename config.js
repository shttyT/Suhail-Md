const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="shttheroku@gmail.com"
global.location="Nairobi,Kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "its keensly" 


global.devs = "254718351815" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254718351815";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254718351815,254xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_00_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMyxcbiAgICAgICAgNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDczLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDc4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgODksXG4gICAgICAgIDE1NixcbiAgICAgICAgNDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxODUsXG4gICAgICAgIDIsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDg2LFxuICAgICAgICA5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMwLFxuICAgICAgICA4MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA1LFxuICAgICAgICA1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDM1LFxuICAgICAgICA0NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjU1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3LFxuICAgICAgICA0LFxuICAgICAgICA5NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDksXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDMwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE1LFxuICAgICAgICA1MixcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDM4LFxuICAgICAgICA1NSxcbiAgICAgICAgMzksXG4gICAgICAgIDExOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDk4LFxuICAgICAgICA1LFxuICAgICAgICAxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDc2LFxuICAgICAgICA4MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1LFxuICAgICAgICA4NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAzNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDUyLFxuICAgICAgICA3MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg5LFxuICAgICAgICA4MixcbiAgICAgICAgODIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOCxcbiAgICAgICAgNTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk5LFxuICAgICAgICA4LFxuICAgICAgICAxLFxuICAgICAgICAxODcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc2LFxuICAgICAgICA3NCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MixcbiAgICAgICAgODAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzksXG4gICAgICAgIDExMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODMsXG4gICAgICAgIDUwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjUzLFxuICAgICAgICA0MSxcbiAgICAgICAgNTksXG4gICAgICAgIDMzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOFBJT0R3Ly9mNnNDYXFGcTMyUWIrdG1sZXZhNW83UjhaQjlxeWliR1pDVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNG1tTEt0aXlST2VtYVpCbWJpa0dKQVwiLFxuICBcInBob25lSWRcIjogXCJlZWIyZTg3My05ZTQwLTRmYzMtODE4Yi05ZWFlYzVmZmNmNTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIsXG4gICAgICAxMTgsXG4gICAgICAyNDgsXG4gICAgICAyMjIsXG4gICAgICAxNzMsXG4gICAgICAxMjYsXG4gICAgICA2MyxcbiAgICAgIDg4LFxuICAgICAgMTM0LFxuICAgICAgMTEzLFxuICAgICAgMTYwLFxuICAgICAgMTYwLFxuICAgICAgMTg1LFxuICAgICAgMTU4LFxuICAgICAgMTQ0LFxuICAgICAgMjIzLFxuICAgICAgNTUsXG4gICAgICA1NSxcbiAgICAgIDIzOSxcbiAgICAgIDEyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzEsXG4gICAgICAyMjksXG4gICAgICAxNzIsXG4gICAgICAyNTEsXG4gICAgICAxODgsXG4gICAgICAyNTEsXG4gICAgICAyMDAsXG4gICAgICA0OSxcbiAgICAgIDkxLFxuICAgICAgNzMsXG4gICAgICAxNjAsXG4gICAgICA4LFxuICAgICAgMjA4LFxuICAgICAgMjE3LFxuICAgICAgMTgsXG4gICAgICAyMDUsXG4gICAgICAyNTQsXG4gICAgICAyNTIsXG4gICAgICAxNDMsXG4gICAgICAxMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRjZLUEVYN0pcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcxODM1MTgxNTo1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTAzMDIzNjk5MzM3MjQ5OjU5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xpbDQ4Y0ZFTC9EemJVR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZVdTU1Ezd20wZS9lMDBYRlltZ3FZZ2FiZDd4em8ydDczd045T2JlRGtDZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2K2N4Y1JQQlR4V2lXVnJCOUdSRWVvM1VMclZla1JhMDBwaVA0WGpUV1pSTzBWZ2gwMThLSHFFMXVaR3VYQnBidjNHOHdoOUNRdG1VbnM4ci82Vi9CZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoWCs2dFNYWDNwL1dGa09FWnJzRTdVanB3bTFoRUdEcWc1V1hweVNLR3BIenVTWmRLWUNDZ0xpRDg2aTJJa2pFOExDZUZ1d3lkRTlEMkwyN01hUU1pUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MTgzNTE4MTU6NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDQwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMwMzIwMDIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEV3RcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURXdC5qc29uIjogIntcImtleURhdGFcIjpcIitITVFRUzE1T0F2REVGekQ2MVNlWjFkUFArT2U5MVZTVlVOVjQ5Sjc4ZHc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ5MjcwMTg3NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTMwMzUxNzE5OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "'",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "keensly",
  packname: process.env.PACK_NAME || "keensly",
  botname : process.env.BOT_NAME  || "keensly",
  ownername:process.env.OWNER_NAME|| "keensly",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "keensly"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
