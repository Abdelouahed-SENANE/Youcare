import axios from "axios";

const authenticatedInstance = axios.create({
    baseURL : 'http://localhost:8000/api',
    withCredentials: false,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    crossDomain: true
});

export default authenticatedInstance