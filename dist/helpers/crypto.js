"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
const SECRET_KEY = process.env.SECRET_KEY;
const encrypt = (text) => crypto_js_1.default.AES.encrypt(JSON.stringify(text), SECRET_KEY).toString();
exports.encrypt = encrypt;
const decrypt = (text) => {
    const bytes = crypto_js_1.default.AES.decrypt(text, SECRET_KEY);
    const decryptedData = JSON.parse(bytes.toString(crypto_js_1.default.enc.Utf8));
    return decryptedData;
};
exports.decrypt = decrypt;
