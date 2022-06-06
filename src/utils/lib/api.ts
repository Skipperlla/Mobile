import Axios from "axios";

let baseURL = "https://api.product.com/";
const TOKEN = "<Token_here>";

const api = Axios.create({
  baseURL,
  headers: {
    Accept: "application/json, text/plain, */*",
    Authorization: `TOKEN ${TOKEN}`,
  },
});

export default api;
