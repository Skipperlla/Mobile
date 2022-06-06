import axios from "axios";
import { getStorage } from "./storage";
const baseURL = "http://192.168.23.4:5000/api/v1";
const countriesURL = "https://www.universal-tutorial.com/api";
const countriesApiToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJjb21wdG9uc3RvcmUyMDIyQGdtYWlsLmNvbSIsImFwaV90b2tlbiI6Im9SdzNQeUdVZlFsWU1oMHNqTTQtMWZJMDQxSjg2RW9Dc2JjSHZkaEptaTFyVGd4dFpONjZkY2JocUx0T1cxcldOMDgifSwiZXhwIjoxNjUzNTUxMjEyfQ.2BVIV0oMNCrJBUS2TNFHQvKS5KEE968AfE2dFJfxfXQ";
const api = (token: string | null | undefined) => {
  return axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
const countriesApi = axios.create({
  baseURL: countriesURL,
  headers: {
    Authorization: `Bearer ${countriesApiToken}`,
  },
});

export default { api, countriesApi };
