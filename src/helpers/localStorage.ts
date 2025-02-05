import { IAuth } from "../constants/interfaces";
import { deCrypter, encrypter } from "./encrypt";

export const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

// Helper function to safely get and decrypt users from localStorage
export const getDecryptedUsers = (): IAuth["user"][] => {
  const encryptedData = localStorage.getItem("users");
  console.log('encryptedData', encryptedData)
  if (!encryptedData) return [];
  try {
    const decryptedData = deCrypter(encryptedData);
    console.log('decryptedData', JSON.parse(decryptedData))
    return JSON.parse(decryptedData);
  } catch (error) {
    console.error("Error decrypting users:", error);
    return [];
  }
};

// Helper function to encrypt and save users to localStorage
export const saveEncryptedUsers = (users: IAuth["user"][]) => {
  try {
    const encryptedData = encrypter(JSON.stringify(users));
    console.log('encryptedData', encryptedData)
    localStorage.setItem("users", encryptedData);
  } catch (error) {
    console.error("Error encrypting users:", error);
    throw new Error("Failed to save user data");
  }
};

export const saveEncryptedAuthToken = (user: IAuth["user"]) => {
  try {
    const token = encrypter(JSON.stringify(user));
    localStorage.setItem("authToken", token);
  } catch (error) {
    console.error("Error encrypting auth token:", error);
    throw new Error("Failed to save authentication token");
  }
};

// Get decrypted auth token
export const getDecryptedAuthToken = (): IAuth["user"] | null => {
  const encryptedToken = localStorage.getItem("authToken");
  if (!encryptedToken) return null;
  try {
    const decryptedToken = deCrypter(encryptedToken);
    return JSON.parse(decryptedToken);
  } catch (error) {
    console.error("Error decrypting auth token:", error);
    return null;
  }
};