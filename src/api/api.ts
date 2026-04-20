import axios from "axios";
import {getToken} from "../auth/Cognito.tsx";

// TODO change this if I ever get to building this app in cloud envrinoment
// const API = axios.create({
//     baseURL: import.meta.env.VITE_API_URL
// });

const API = axios.create({
    baseURL: "http://habit-backend-env.eba-asjncbp3.us-east-1.elasticbeanstalk.com"
});


API.interceptors.request.use((config) => {
    const token = getToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default API;
