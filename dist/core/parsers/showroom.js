"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = require("../../utils/log");
let Log = log_1.default.getInstance();
class Parser {
    static parse({ key = '', iv = '', options }) {
        if (!options.m3u8Url) {
            Log.error('Missing m3u8 url for openrec.');
        }
        const prefix = options.m3u8Url.match(/^(.+\/)/)[1];
        return {
            key,
            iv,
            prefix: prefix
        };
    }
}
exports.default = Parser;
//# sourceMappingURL=showroom.js.map