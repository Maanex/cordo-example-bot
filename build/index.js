"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cordo_1 = require("cordo");
const discord_js_1 = require("discord.js");
const BOT_TOKEN = 'NDg2MjcxMzQ1NTc1OTg1MTU0.W42Zew.dFTuY6EdJig_jYry9iEDdIPn5TE';
const BOT_ID = '486271345575985154';
const client = new discord_js_1.Client();
cordo_1.default.init({
    botId: BOT_ID,
    contextPath: [__dirname, 'bot'] // path to the ./src/bot folder
});
cordo_1.default.addMiddlewareInteractionCallback((data) => {
    data.footer = 'I always add a footer';
});
cordo_1.default.setMiddlewareUserData((userid) => {
    return {
        nameReversed: userid.split('').reverse().join('')
    };
});
// tell cordo when interactions have happened (will probably make this easier to do in the future)
client.on('raw', (ev) => {
    if (ev.t === 'INTERACTION_CREATE')
        cordo_1.default.emitInteraction(ev.d);
});
client.on('ready', () => {
    console.log('READY');
});
client.login(BOT_TOKEN);
//# sourceMappingURL=index.js.map