import validator from "validator";

import { HttpStatusCode, MESSAGE_CUSTOM, decrypt, encrypt } from "../helpers";
import { modelCreateName, modelGetNameById } from "../model";

const validateString = (phrase: string) => {
  if (!phrase.trim()) {
    return {
      error: {
        code: "E_VALIDATION_FAILURE",
        message: MESSAGE_CUSTOM.REQUIRED_NAME,
      },
    };
  }
  return { ok: true };
};

const validateId = (id: string) => {
  if (!id) {
    return {
      error: {
        code: "E_VALIDATION_FAILURE",
        message: MESSAGE_CUSTOM.REQUIRED_ID,
      },
    };
  }
  if (!validator.isNumeric(id)) {
    return {
      error: {
        code: "E_VALIDATION_FAILURE",
        message: MESSAGE_CUSTOM.INVALID_ID,
      },
    };
  }
  return { ok: true };
};

export const serviceCreate = async (name: string) => {
  const resultValidate = validateString(name);
  if (resultValidate?.error) {
    return {
      statusCode: HttpStatusCode.UNPROCESSABLE_ENTITY,
      message: resultValidate.error,
    };
  }
  const resultModel = await modelCreateName(encrypt(name));
  return {
    statusCode: 201,
    created: {
      id: resultModel.id,
      encrypted_name: resultModel.name,
    },
  };
};

export const serviceGetById = async (id: string) => {
  console.log("vazio   ", id);
  const resultValidate = validateId(id);
  if (!resultValidate?.ok) {
    return {
      statusCode: HttpStatusCode.UNPROCESSABLE_ENTITY,
      message: resultValidate.error,
    };
  }
  const resultModel = await modelGetNameById(Number(id));
  if (!resultModel?.name || !resultModel?.id) {
    return {
      statusCode: HttpStatusCode.NOT_FOUND,
      message: {
        code: "bllblbl",
        message: MESSAGE_CUSTOM.ID_NOT_EXISTS,
      },
    };
  }
  const textDecrypted = decrypt(resultModel.name);
  return {
    statusCode: 200,
    content: {
      id: resultModel?.id,
      decrypted_name: textDecrypted,
    },
  };
};
