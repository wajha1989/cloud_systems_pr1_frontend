import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

// Later: attach Cognito JWT here
// API.interceptors.request.use(config => {
//   config.headers.Authorization = "Bearer TOKEN";
//   return config;
// });

export default API;
