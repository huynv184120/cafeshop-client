import axiosClient from "../utils/axiosClient";

export const order = async (data) => {
  const result = await axiosClient.post("/orders", data);
  return result;
};
