import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:7243/api',
});

export default api;