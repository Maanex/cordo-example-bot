"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(i) {
    // this time we manually switch state
    // this way we can save changes before switching
    // or like below, add extra context to the state we're switching to
    i.state('main', 'never gonna', 'give you up');
    // just `i.state('main')` would be fine too, you don't need extra info
}
exports.default = default_1;
//# sourceMappingURL=another_cool_button.js.map