import axios from 'axios';

const baseApiUrl = 'https://jsonplaceholder.typicode.com';
const apiUrl = `${baseApiUrl}/todos`;


export const insertAsync = async (data) => {
    const response = await axios.post(apiUrl, data);
    return response.data;
}



export const getAllAsync = async (data) => {
    const response = await axios.get(apiUrl);
    return response.data;
}




