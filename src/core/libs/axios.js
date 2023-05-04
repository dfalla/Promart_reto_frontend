import Axios from "axios";


const api = Axios.create({
    baseURL: "http://localhost:8000/api",
    // headers: {
    //     "Content-Type" : "multipart/form-data"
    // }
})

api.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token'),
    }

    return config;
});

export default api;