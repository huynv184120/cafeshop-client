import axiosClient from "../utils/axiosClient";
export const getListProDuct = async (params) => {
  const result = await axiosClient.get("/products", { params });
  return result.data.result;
};
export const newProduct = async (body) => {
  const result = await axiosClient.post("/products", body, {
    headers: { ...axiosClient.headers, "encType": "multipart/form-data" },
  });
  return result.data.result;
};
