import Cordo from 'cordo'
import { Client } from 'discord.js'


// in all examples you're required to update these two values
// if you don't know where to find them you're probably wrong here. (hint: discord.dev)
const BOT_TOKEN = 'abcabcabc'
const BOT_ID = '123123123'
// don't forget this in future examples


// create a new discord.js client
const client = new Client()

// and init cordo
Cordo.init({
  // your bot id (only required if you want to use cordo to handle buttons sent through non-slash command messages... more on that later)
  botId: BOT_ID,
  // path to the ./src/bot folder
  contextPath: [ __dirname, 'bot' ]
  // Cordo will automatically find your slash commands and register them internally
})

// tell cordo when interactions have happened (will probably make this easier to do in the future)
client.on('raw', (ev: any) => {
  if (ev.t === 'INTERACTION_CREATE')
    Cordo.emitInteraction(ev.d)
})

// discord.js stuff
client.on('ready', () => {
  console.log('READY')
})
client.login(BOT_TOKEN)


// => now onto src/bot/commands/test.ts
