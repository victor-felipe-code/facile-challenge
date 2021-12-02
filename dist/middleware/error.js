"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorDefault = void 0;

var _helpers = require("../helpers");

const errorDefault = async (error, _req, res, _next) => {
  if (error.statusCode && error.message) {
    return res.status(error.statusCode).json(error.message);
  }

  return res.status(_helpers.HttpStatusCode.INTERNAL_SERVER).json({
    error: _helpers.MESSAGE_CUSTOM.SERVER_ERROR
  });
};

exports.errorDefault = errorDefault;