"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.controllerGetById = exports.controllerCreate = void 0;

var _expressRescue = _interopRequireDefault(require("express-rescue"));

var _service = require("../service");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const controllerCreate = (0, _expressRescue.default)(async (req, res, next) => {
  const {
    name
  } = req.body;
  const resultService = await (0, _service.serviceCreate)(name);

  if (resultService !== null && resultService !== void 0 && resultService.created) {
    res.status(resultService.statusCode).json(resultService.created);
    return;
  }

  next(resultService);
});
exports.controllerCreate = controllerCreate;
const controllerGetById = (0, _expressRescue.default)(async (req, res, next) => {
  var _req$params;

  const id = (_req$params = req.params) === null || _req$params === void 0 ? void 0 : _req$params.id;
  const resultService = await (0, _service.serviceGetById)(id);

  if (resultService !== null && resultService !== void 0 && resultService.content) {
    res.status(resultService === null || resultService === void 0 ? void 0 : resultService.statusCode).json(resultService.content);
    return;
  }

  next(resultService);
});
exports.controllerGetById = controllerGetById;