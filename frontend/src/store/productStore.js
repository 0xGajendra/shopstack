import axios from "axios";
import { create } from "zustand";

export const useProductStore = create((set, get) => ({
    products: [],
    loading: false,
    error: null,
    fetchProducts: async () => {
        set({loading: true, error: null});
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/products`);
            set({products: response.data.data});
        }catch(error){
            if(error.status === 429) 
                set({error: "Too many requests. Please try again later."});
            else if(error.status === 500) 
                set({error: "Internal server error. Please try again later."});
            else if(error.status === 404) 
                set({error: "Products not found."});
            else
            set({error: error.message});
        }
        finally {
            set({loading: false});
        }
    }

}));