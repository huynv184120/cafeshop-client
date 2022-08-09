import axiosClient from '../utils/axiosClient';

export const signin = async (data) => {
    const result = await axiosClient.post('/auth/signin', data);
    return result.data.result;
}

export const signup = async (data) => {
    const result = await axiosClient.post('/auth/signup', data);
    return result.data.result;
}