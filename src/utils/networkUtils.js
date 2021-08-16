import axios from "axios";

export const getServerUrl = () => {
  return "http://localhost:3001";
};

export const getServerClient = () => {
  return axios.create({
    baseURL: getServerUrl(),
    timeout: 7000,
  });
};
