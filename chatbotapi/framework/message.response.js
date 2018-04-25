"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MessageResponse {
    constructor(message) {
        if (message)
            for (var col in message) {
                this[col] = message[col];
            }
    }
}
exports.MessageResponse = MessageResponse;
