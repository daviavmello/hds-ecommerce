import axios from "axios";

export const getVendors = async () => {
  try {
    const response = await axios.get(`https://hds-ecommerce.herokuapp.com/vendors`);
    return response.data;
  } catch (error: any) {
    return error.response;
  }
};

export const getProducts = async () => {
  try {
    const response = await axios.get(`https://hds-ecommerce.herokuapp.com/products`);
    return response.data;
  } catch (error: any) {
    return error.response;
  }
};
