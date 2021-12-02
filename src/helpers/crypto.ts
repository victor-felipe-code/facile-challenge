import CryptoJS from "crypto-js";

const SECRET_KEY = process.env.SECRET_KEY as string;

// Encrypt
export const encrypt = (text: string) =>
  CryptoJS.AES.encrypt(JSON.stringify(text), SECRET_KEY).toString();

// Decrypt
export const decrypt = (text: string) => {
  const bytes = CryptoJS.AES.decrypt(text, SECRET_KEY);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
};
