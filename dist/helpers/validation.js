"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateId = exports.validateString = void 0;
const validator_1 = __importDefault(require("validator"));
const statusMessage_1 = require("./statusMessage");
const validateString = (phrase) => {
    if (!phrase.trim()) {
        return {
            error: {
                code: "E_VALIDATION_FAILURE",
                message: statusMessage_1.MESSAGE_CUSTOM.REQUIRED_NAME,
            },
        };
    }
    return { ok: true };
};
exports.validateString = validateString;
const validateId = (id) => {
    if (!id) {
        return {
            error: {
                code: "E_VALIDATION_FAILURE",
                message: statusMessage_1.MESSAGE_CUSTOM.REQUIRED_ID,
            },
        };
    }
    if (!validator_1.default.isNumeric(id)) {
        return {
            error: {
                code: "E_VALIDATION_FAILURE",
                message: statusMessage_1.MESSAGE_CUSTOM.INVALID_ID,
            },
        };
    }
    return { ok: true };
};
exports.validateId = validateId;
