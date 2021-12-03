"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = __importDefault(require("console"));
const app_1 = require("./app");
const PORT = process.env.PORT || 4000;
app_1.app.listen(PORT, () => console_1.default.log(`SERVER ON PORT ${PORT}`));
