import axiosClient from '../utils/axiosClient';
export const getListProDuct = async (params) => {
    const result = await axiosClient.get('/products', {params});
    return result.data.result;
}
