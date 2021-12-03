"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encrypt = exports.decrypt = void 0;

var _cryptoJs = _interopRequireDefault(require("crypto-js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SECRET_KEY = process.env.SECRET_KEY; // Encrypt

const encrypt = text => _cryptoJs.default.AES.encrypt(JSON.stringify(text), SECRET_KEY).toString(); // Decrypt


exports.encrypt = encrypt;

const decrypt = text => {
  const bytes = _cryptoJs.default.AES.decrypt(text, SECRET_KEY);

  const decryptedData = JSON.parse(bytes.toString(_cryptoJs.default.enc.Utf8));
  return decryptedData;
};

exports.decrypt = decrypt;