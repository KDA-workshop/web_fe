import axios from 'axios';

const API = async config => {
    try {
        const response = await axios(config);
        return response;
    } catch(error) {
        return null;
    }
};

export default API;