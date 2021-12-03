"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceGetById = exports.serviceCreate = void 0;
const console_1 = __importDefault(require("console"));
const crypto_1 = require("../helpers/crypto");
const statusCode_1 = require("../helpers/statusCode");
const statusMessage_1 = require("../helpers/statusMessage");
const validation_1 = require("../helpers/validation");
const model_1 = require("../model");
const serviceCreate = async (name) => {
    const resultValidate = (0, validation_1.validateString)(name);
    if (resultValidate === null || resultValidate === void 0 ? void 0 : resultValidate.error) {
        return {
            statusCode: statusCode_1.HttpStatusCode.UNPROCESSABLE_ENTITY,
            message: resultValidate.error,
        };
    }
    const resultModel = await (0, model_1.modelCreateName)((0, crypto_1.encrypt)(name));
    console_1.default.log("result model create -----   ", resultModel);
    return {
        statusCode: 201,
        created: {
            id: resultModel.id,
            encrypted_name: resultModel.name,
        },
    };
};
exports.serviceCreate = serviceCreate;
const serviceGetById = async (id) => {
    const resultValidate = (0, validation_1.validateId)(id);
    if (!(resultValidate === null || resultValidate === void 0 ? void 0 : resultValidate.ok)) {
        return {
            statusCode: statusCode_1.HttpStatusCode.UNPROCESSABLE_ENTITY,
            message: resultValidate.error,
        };
    }
    const resultModel = await (0, model_1.modelGetNameById)(Number(id));
    console_1.default.log("result get  - ", resultModel);
    if (!(resultModel === null || resultModel === void 0 ? void 0 : resultModel.name) || !(resultModel === null || resultModel === void 0 ? void 0 : resultModel.id)) {
        return {
            statusCode: statusCode_1.HttpStatusCode.NOT_FOUND,
            message: {
                code: "E_VALIDATION_FAILURE",
                message: statusMessage_1.MESSAGE_CUSTOM.ID_NOT_EXISTS,
            },
        };
    }
    const textDecrypted = (0, crypto_1.decrypt)(resultModel.name);
    console_1.default.log("result decript  - ", textDecrypted);
    return {
        statusCode: 200,
        content: {
            id: resultModel === null || resultModel === void 0 ? void 0 : resultModel.id,
            decrypted_name: textDecrypted,
        },
    };
};
exports.serviceGetById = serviceGetById;
