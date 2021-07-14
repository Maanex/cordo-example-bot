"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cordo_1 = require("cordo");
function default_1(i) {
    i.replyInteractive({
        title: 'An interactive command',
        description: 'You have 10 seconds to click a button! After 10 seconds of not clicking a button they vanish!',
        components: [
            {
                type: cordo_1.ComponentType.BUTTON,
                style: cordo_1.ButtonStyle.SUCCESS,
                label: 'First Button',
                custom_id: 'custom_id_here'
            },
            {
                type: cordo_1.ComponentType.BUTTON,
                style: cordo_1.ButtonStyle.SUCCESS,
                label: 'Another One',
                custom_id: 'another_one'
            },
            {
                type: cordo_1.ComponentType.BUTTON,
                style: cordo_1.ButtonStyle.SUCCESS,
                label: 'Fallback to regular handlers',
                custom_id: 'cool_button'
            }
        ]
    })
        .withTimeout(10 * 1000, true, (janitor) => {
        janitor.removeComponents();
    })
        .on('custom_id_here', (r) => {
        r.edit({
            title: 'I changed the title'
        });
    })
        .on('another_one', (r) => {
        r.reply({
            content: 'Hello there!'
        });
    });
}
exports.default = default_1;
//# sourceMappingURL=tokens.js.map