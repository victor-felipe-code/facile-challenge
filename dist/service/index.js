"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serviceGetById = exports.serviceCreate = void 0;

var _crypto = require("../helpers/crypto");

var _statusCode = require("../helpers/statusCode");

var _statusMessage = require("../helpers/statusMessage");

var _validation = require("../helpers/validation");

var _model = require("../model");

const serviceCreate = async name => {
  const resultValidate = (0, _validation.validateString)(name);

  if (resultValidate !== null && resultValidate !== void 0 && resultValidate.error) {
    return {
      statusCode: _statusCode.HttpStatusCode.UNPROCESSABLE_ENTITY,
      message: resultValidate.error
    };
  }

  const resultModel = await (0, _model.modelCreateName)((0, _crypto.encrypt)(name));
  console.log("result model create -----   ", resultModel);
  return {
    statusCode: 201,
    created: {
      id: resultModel.id,
      encrypted_name: resultModel.name
    }
  };
};

exports.serviceCreate = serviceCreate;

const serviceGetById = async id => {
  const resultValidate = (0, _validation.validateId)(id);

  if (!(resultValidate !== null && resultValidate !== void 0 && resultValidate.ok)) {
    return {
      statusCode: _statusCode.HttpStatusCode.UNPROCESSABLE_ENTITY,
      message: resultValidate.error
    };
  }

  const resultModel = await (0, _model.modelGetNameById)(Number(id));
  console.log("result get  - ", resultModel);

  if (!(resultModel !== null && resultModel !== void 0 && resultModel.name) || !(resultModel !== null && resultModel !== void 0 && resultModel.id)) {
    return {
      statusCode: _statusCode.HttpStatusCode.NOT_FOUND,
      message: {
        code: "E_VALIDATION_FAILURE",
        message: _statusMessage.MESSAGE_CUSTOM.ID_NOT_EXISTS
      }
    };
  }

  const textDecrypted = (0, _crypto.decrypt)(resultModel.name);
  console.log("result decript  - ", textDecrypted);
  return {
    statusCode: 200,
    content: {
      id: resultModel === null || resultModel === void 0 ? void 0 : resultModel.id,
      decrypted_name: textDecrypted
    }
  };
};

exports.serviceGetById = serviceGetById;