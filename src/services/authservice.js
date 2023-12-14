import { BASE_URL } from "../constants/Constants";
import axios from "axios";

export const userLogin = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      email,
      password,
    });
    if (response?.status !== 200) throw new Error("Login failed!!");
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
