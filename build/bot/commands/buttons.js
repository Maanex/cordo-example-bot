"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cordo_1 = require("cordo");
function default_1(i) {
    i.reply({
        title: 'Test Command!',
        description: 'This time with buttons. Four of them actually. And one select',
        components: [
            {
                type: cordo_1.ComponentType.BUTTON,
                style: cordo_1.ButtonStyle.DANGER,
                label: 'State "Blueberry"',
                custom_id: 'blueberry_example_test'
            },
            {
                type: cordo_1.ComponentType.BUTTON,
                style: cordo_1.ButtonStyle.PRIMARY,
                label: 'State "main"',
                custom_id: 'main',
                flags: [
                    cordo_1.InteractionComponentFlag.ACCESS_MANAGE_MESSAGES
                ]
            },
            {
                type: cordo_1.ComponentType.LINE_BREAK
            },
            {
                type: cordo_1.ComponentType.BUTTON,
                style: cordo_1.ButtonStyle.PRIMARY,
                label: 'No state, just components',
                custom_id: 'cool_button',
                flags: [
                    // everyone can click this button
                    cordo_1.InteractionComponentFlag.ACCESS_EVERYONE
                ]
            },
            {
                type: cordo_1.ComponentType.BUTTON,
                style: cordo_1.ButtonStyle.SUCCESS,
                label: 'Last one with extra state changes',
                custom_id: 'another_cool_button'
            },
            {
                type: cordo_1.ComponentType.SELECT,
                options: [
                    {
                        value: 'abc',
                        label: 'ABC!'
                    },
                    {
                        value: '123',
                        label: '> 123 <'
                    }
                ],
                custom_id: 'cool_select'
            }
        ]
    });
}
exports.default = default_1;
//# sourceMappingURL=buttons.js.map