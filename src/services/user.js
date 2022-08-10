import axiosClient from '../utils/axiosClient';
export const getUser = async (params) => {
    const result = await axiosClient.get('/products', {params});
    return result.data.result;
}
