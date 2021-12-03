"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateString = exports.validateId = void 0;

var _validator = _interopRequireDefault(require("validator"));

var _statusMessage = require("./statusMessage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const validateString = phrase => {
  if (!phrase.trim()) {
    return {
      error: {
        code: "E_VALIDATION_FAILURE",
        message: _statusMessage.MESSAGE_CUSTOM.REQUIRED_NAME
      }
    };
  }

  return {
    ok: true
  };
};

exports.validateString = validateString;

const validateId = id => {
  if (!id) {
    return {
      error: {
        code: "E_VALIDATION_FAILURE",
        message: _statusMessage.MESSAGE_CUSTOM.REQUIRED_ID
      }
    };
  }

  if (!_validator.default.isNumeric(id)) {
    return {
      error: {
        code: "E_VALIDATION_FAILURE",
        message: _statusMessage.MESSAGE_CUSTOM.INVALID_ID
      }
    };
  }

  return {
    ok: true
  };
};

exports.validateId = validateId;