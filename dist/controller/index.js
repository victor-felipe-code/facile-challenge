"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllerGetById = exports.controllerCreate = void 0;
const console_1 = __importDefault(require("console"));
const express_rescue_1 = __importDefault(require("express-rescue"));
const service_1 = require("../service");
exports.controllerCreate = (0, express_rescue_1.default)(async (req, res, next) => {
    const { name } = req.body;
    const resultService = await (0, service_1.serviceCreate)(name);
    console_1.default.log("CONTROLLER  CREATE ------   ", resultService);
    if (resultService && resultService.created) {
        console_1.default.log("CONTROLLER  CREATE ------ IF  ", resultService);
        res.status(resultService.statusCode).json(resultService.created);
        return;
    }
    next(resultService);
});
exports.controllerGetById = (0, express_rescue_1.default)(async (req, res, next) => {
    var _a;
    const id = (_a = req.params) === null || _a === void 0 ? void 0 : _a.id;
    const resultService = await (0, service_1.serviceGetById)(id);
    console_1.default.log("CONTROLLER  get ------   ", resultService);
    if (resultService && resultService.content) {
        console_1.default.log("CONTROLLER  get ------  IF ", resultService);
        res.status(resultService === null || resultService === void 0 ? void 0 : resultService.statusCode).json(resultService.content);
        return;
    }
    next(resultService);
});
