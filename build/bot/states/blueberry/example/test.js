"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cordo_1 = require("cordo");
function default_1(i) {
    return {
        title: 'This switched now...',
        description: 'Click below to go to the main UI',
        components: [
            {
                type: cordo_1.ComponentType.BUTTON,
                style: cordo_1.ButtonStyle.SECONDARY,
                label: 'Back to main',
                custom_id: 'main'
            }
        ]
    };
}
exports.default = default_1;
//# sourceMappingURL=test.js.map