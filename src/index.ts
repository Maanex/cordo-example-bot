import Cordo from 'cordo'
import { Client } from 'discord.js'


const BOT_TOKEN = 'abcabcabc'
const BOT_ID = '123123123'


const client = new Client()

Cordo.init({
  botId: BOT_ID,
  contextPath: [ __dirname, 'bot' ] // path to the ./src/bot folder
})

Cordo.addMiddlewareInteractionCallback((data) => {
  data.footer = 'I always add a footer'
})

Cordo.setMiddlewareUserData((userid) => {
  return {
    nameReversed: userid.split('').reverse().join('')
  }
})

// tell cordo when interactions have happened (will probably make this easier to do in the future)
client.on('raw', (ev: any) => {
  if (ev.t === 'INTERACTION_CREATE')
    Cordo.emitInteraction(ev.d)
})

client.on('ready', () => {
  console.log('READY')
})
client.login(BOT_TOKEN)
