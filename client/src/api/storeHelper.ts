import axios from "axios";

export const getVendors = async () => {
  try {
    const response = await axios.get(
      `https://hds-ecommerce.herokuapp.com/vendors`
    );
    return response.data;
  } catch (error: any) {
    return error.response;
  }
};

export const getProducts = async () => {
  try {
    const response = await axios.get(
      `https://hds-ecommerce.herokuapp.com/products`
    );
    return response.data;
  } catch (error: any) {
    return error.response;
  }
};

export const postOrder = async (store: {
  ProductID: number;
  Price: number;
  count: number;
}) => {
  const orderId = Math.floor(Math.random() * 90000) + 10000;
  await axios
    .post(`https://hds-ecommerce.herokuapp.com/order_details`, {
      OrderID: orderId,
      ProductID: store.ProductID,
      Price: store.Price,
      OrderQuantity: store.count,
    })
    .then((res: any) => {
      console.log(res);
    })
    .catch((error: any) => {
      console.log(error);
    });
};
