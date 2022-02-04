const { 
default: makeWASocket, 
DisconnectReason, 
AnyMessageContent, 
delay, 
useSingleFileAuthState 
} = require('@adiwajshing/baileys-md')
//const P = require("pino")
const { color, KentzLog } = require("./lib/color")
//const { Boom } = require("@hapi/boom")
const fs = require("fs")
setting = JSON.parse(fs.readFileSync("./setting.json"))

const { state, loadState, saveState } = useSingleFileAuthState(setting.sesionName+".json")

require("./connect/index")
require("./connect/help")
nocache("./connect/help", (module) => console.log(`Module "${module}" terupdate`))
nocache("./connect/help", (module) => console.log(`Module "${module}" terupdate`))

/* sebelom pake mampir rest api gw dulu :
  https://api.ardyapi.xyz
  https://app.ardyapi.rf.gd
  md
*/

async function start() {
  const kentz = await makeWASocket({
    //logger: P({ level: 'debug' }),
    browser: ["Kentz-Md","Safari","1.0.0"],
    printQRInTerminal: true,
    auth: state
  })
  console.log("Connected")
  
  kentz.prefa = "."
  kentz.multi = true
  kentz.nopref = false
  kentz.mode = "self"
  kentz.autoRead = true
  kentz.modelmenu = "btnaj"
  
  kentz.ev.on("messages.upsert", async m => {
    if (!m.messages) return
    msg = m.messages[0]
    require("./connect/index")(kentz, msg)
  })
  
  
  kentz.ev.on("connection.update", (update) => {
    const { connection, lastDisconnect } = update
    if (connection == "close") {
      lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut
                ? start()
                : console.log('connection closed')
    }
  })
  
  kentz.ev.on('creds.update', saveState)
  
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
 function nocache(module, cb = () => { }) {
    console.log(`Module '${module}'`)
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

start()