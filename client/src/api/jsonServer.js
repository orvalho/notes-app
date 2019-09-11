import axios from 'axios';

export default axios.create({
    baseURL: 'URL_PROVIDED_BY_NGROK'
});