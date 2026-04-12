import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8080",
});

// Later: attach Cognito JWT here
// API.interceptors.request.use(config => {
//   config.headers.Authorization = "Bearer TOKEN";
//   return config;
// });

export default API;
