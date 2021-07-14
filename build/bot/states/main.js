"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cordo_1 = require("cordo");
function default_1(i, data) {
    return {
        title: 'Go to blueberry',
        description: `Click below to go to blueberry. Or strawberry.\nUser: ${i.user.username}\nData: ${data}`,
        components: [
            {
                type: cordo_1.ComponentType.BUTTON,
                style: cordo_1.ButtonStyle.SECONDARY,
                label: 'Blue',
                emoji: { id: '651455136807518208' },
                custom_id: 'blueberry_example_test'
            },
            {
                type: cordo_1.ComponentType.BUTTON,
                style: cordo_1.ButtonStyle.SECONDARY,
                label: 'Straw',
                emoji: { name: '🔥' },
                custom_id: 'blueberry_example_two'
            }
        ]
    };
}
exports.default = default_1;
//# sourceMappingURL=main.js.map