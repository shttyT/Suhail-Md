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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_43_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE0LFxuICAgICAgICA2OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTA1LFxuICAgICAgICA3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExNixcbiAgICAgICAgNTMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA5MixcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAwLFxuICAgICAgICA5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDYwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDMsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUsXG4gICAgICAgIDc1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDYzLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDk5LFxuICAgICAgICAzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDk5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTUsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjE4LFxuICAgICAgICA3NyxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjExLFxuICAgICAgICA1MixcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU1LFxuICAgICAgICA5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDk5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk3LFxuICAgICAgICA2NixcbiAgICAgICAgMTY2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTAxLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTIsXG4gICAgICAgIDYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAzMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTUyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjksXG4gICAgICAgIDU3LFxuICAgICAgICA1NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDcwLFxuICAgICAgICAzLFxuICAgICAgICA1NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQwLFxuICAgICAgICAzLFxuICAgICAgICA2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2LFxuICAgICAgICA4MCxcbiAgICAgICAgMixcbiAgICAgICAgNzMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDcxLFxuICAgICAgICAyNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjksXG4gICAgICAgIDE1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMSkRIVnE1VE5DMENqa2pWYWFCallpNGxDb0Nrb280NHFmYmovL0I2aUhRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJmaENzcHV5NFFyNjc5TVIyS0NGb2FRXCIsXG4gIFwicGhvbmVJZFwiOiBcImYxZmJmOTk2LTZlNTktNDZiOS1hNGE4LWJiYTUyNmZlNWUyY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDIsXG4gICAgICAxNzAsXG4gICAgICAyNDksXG4gICAgICAxNjIsXG4gICAgICAyMTksXG4gICAgICAxMTIsXG4gICAgICA4MyxcbiAgICAgIDIwLFxuICAgICAgMTEyLFxuICAgICAgMjUwLFxuICAgICAgMTI5LFxuICAgICAgMTY5LFxuICAgICAgOSxcbiAgICAgIDAsXG4gICAgICAxMjIsXG4gICAgICAyNTIsXG4gICAgICA1OCxcbiAgICAgIDE0NSxcbiAgICAgIDIwMixcbiAgICAgIDQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUsXG4gICAgICA5OSxcbiAgICAgIDE5NCxcbiAgICAgIDMzLFxuICAgICAgMjI0LFxuICAgICAgMTQwLFxuICAgICAgMTQ5LFxuICAgICAgNjAsXG4gICAgICAyNSxcbiAgICAgIDEwMSxcbiAgICAgIDIzNixcbiAgICAgIDY4LFxuICAgICAgOTIsXG4gICAgICA2LFxuICAgICAgNSxcbiAgICAgIDE3MyxcbiAgICAgIDIwNCxcbiAgICAgIDIxMSxcbiAgICAgIDE2NixcbiAgICAgIDIzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUU1dKSkY0UFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzE4MzUxODE1OjU2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDMwMjM2OTkzMzcyNDk6NTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGVsNDhjRkVLdnlwN1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJlV1NTUTN3bTBlL2UwMFhGWW1ncVlnYWJkN3h6bzJ0NzN3TjlPYmVEa0NnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkd6dnFkYklUK0lIRWhjMXhJdTdtbjdrSnRqaEJjTUJ2UEdkMWhKMFI5QUtZMDczME9wQVlaZGw4bk1QYjZ4ZzFITzdOWHh3ZmIrdXdPTWlBTG1uSERRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjN5UTVGUndvZFA5d0kzVCtiM0R6UVhwdk0xUHBWL3hhdko4ZDJYKzVidWpvdjlIeU5EekVkbXV5MXVSYUU3TVFRcW90R2YvN3R2MDZnRVBhK0cyMmlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcxODM1MTgxNTo1NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjQxNTQwNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURXdFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRFd0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiK0hNUVFTMTVPQXZERUZ6RDYxU2VaMWRQUCtPZTkxVlNWVU5WNDlKNzhkdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDkyNzAxODc3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIxMzAzNTE3MTk4XCJ9Igp9"  // PUT your SESSION_ID 


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
