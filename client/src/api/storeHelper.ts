import axios from "axios";

export const getVendors = async () => {
  try {
    const response = await axios.get(`http://www.localhost:3001/vendors`);
    return response.data;
  } catch (error: any) {
    return error.response;
  }
};

export const getProducts = async () => {
  try {
    const response = await axios.get(`http://www.localhost:3001/products`);
    return response.data;
  } catch (error: any) {
    return error.response;
  }
};
