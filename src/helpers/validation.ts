import validator from "validator";

import { MESSAGE_CUSTOM } from "./statusMessage";

export const validateString = (phrase: string) => {
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

export const validateId = (id: string) => {
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
