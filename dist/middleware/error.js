"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorDefault = void 0;
const statusCode_1 = require("../helpers/statusCode");
const statusMessage_1 = require("../helpers/statusMessage");
const errorDefault = async (error, _req, res, _next) => {
    if (error.statusCode && error.message) {
        return res.status(error.statusCode).json(error.message);
    }
    return res
        .status(statusCode_1.HttpStatusCode.INTERNAL_SERVER)
        .json({ error: error.message || statusMessage_1.MESSAGE_CUSTOM.SERVER_ERROR });
};
exports.errorDefault = errorDefault;
