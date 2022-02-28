import axios from 'axios';

export const api = axios.create({
    baseUrl: 'http://'
});

export const createSession = async (email, password) => {
    return api.post('/')
}
