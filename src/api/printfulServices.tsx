import axios from 'axios';

const PRINTFUL_API_URL = 'https://api.printful.com';
const API_KEY = process.env.REACT_APP_PRINTFUL_API_KEY; // Store your key in .env

export const getPrintfulProducts = async () => {
  try {
    const response = await axios.get(`${PRINTFUL_API_URL}/store/products`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data.result;
  } catch (error) {
    console.error('Error fetching products from Printful:', error);
    throw error;
  }
};

export const createOrder = async (orderData: any) => {
  try {
    const response = await axios.post(`${PRINTFUL_API_URL}/orders`, orderData, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating Printful order:', error);
    throw error;
  }
};