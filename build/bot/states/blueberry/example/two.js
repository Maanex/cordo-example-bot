"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cordo_1 = require("cordo");
function default_1(i) {
    return {
        title: 'Not actually a Blueberry',
        description: 'This is the page for the strawberry.',
        components: [
            {
                type: cordo_1.ComponentType.BUTTON,
                style: cordo_1.ButtonStyle.SECONDARY,
                label: 'Back',
                custom_id: 'main'
            },
            {
                type: cordo_1.ComponentType.BUTTON,
                style: cordo_1.ButtonStyle.SECONDARY,
                label: 'Visit blueberry',
                custom_id: 'blueberry_example_test'
            }
        ]
    };
}
exports.default = default_1;
//# sourceMappingURL=two.js.map