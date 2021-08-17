import axios from "axios";

export const getServerUrl = () => {
  // If the app is running in development, it will use the app proxy to avoid CORS blocks
  return process.env.NODE_ENV === "development"
    ? null
    : "https://us4b9c5vv0.execute-api.us-east-1.amazonaws.com/prod";
};

export const getServerClient = () => {
  return axios.create({
    baseURL: getServerUrl(),
    timeout: 7000,
    headers: {
      "x-api-key": process.env.REACT_APP_API_KEY,
    },
    withCredentials: true,
  });
};
