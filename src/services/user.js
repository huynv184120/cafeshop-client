import axiosClient from '../utils/axiosClient';
export const getUser = async (id) => {
    const result = await axiosClient.get(`/users/${id}`);
    return result.data.result;
}
