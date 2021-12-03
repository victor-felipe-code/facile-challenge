import { decrypt, encrypt } from "../helpers/crypto";
import { HttpStatusCode } from "../helpers/statusCode";
import { MESSAGE_CUSTOM } from "../helpers/statusMessage";
import { validateId, validateString } from "../helpers/validation";
import { modelCreateName, modelGetNameById } from "../model";

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
        code: "E_VALIDATION_FAILURE",
        message: MESSAGE_CUSTOM.ID_NOT_EXISTS,
      },
    };
  }
  const name = resultModel?.name || "";
  const textDecrypted = decrypt(name);
  return {
    statusCode: 200,
    content: {
      id: resultModel?.id,
      decrypted_name: textDecrypted,
    },
  };
};
