import axios from "axios";
import { getStorage } from "./storage";
const baseURL = "http://192.168.23.4:5000/api/v1";

const api = (token: string | null | undefined) => {
  return axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export default api;
