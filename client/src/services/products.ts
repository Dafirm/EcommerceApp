import axios from 'axios'
import { NewProduct} from '../types'

const ORIGIN = 'http://localhost:4000/api/v1'
export default {
  getAll: async () => {
    try {
      const response = await axios.get(`${ORIGIN}/products`);

      return {
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      console.error("error =====:", error);
      return {
        data: null,
        status: 400,
      };
    }
  },

  createOne: async (product: NewProduct) => {
    try {
      const response = await axios.post(`${ORIGIN}/new-product`, product);
      console.log("response:", response);

      return {
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      console.error("error:", error);
      return {
        data: null,
        status: 400,
      };
    }
  },
  updateOne: async (product: NewProduct) => {
    try {
      const response = await axios.put(`${ORIGIN}/products/id/${product._id}`, product);
      console.log("response:", response);

      return {
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      console.error("error:", error);
      return {
        data: null,
        status: 400,
      };
    }
  },
};