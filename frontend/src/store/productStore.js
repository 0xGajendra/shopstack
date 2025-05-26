import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

export const useProductStore = create((set, get) => ({
    products: [],
    loading: false,
    error: null,
    currentProduct: null,

    //form state
    formData: {
        name: "",
        price: "",
        image: "",
    },

    fetchProducts: async () => {
        set({loading: true, error: null, products: null});
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/products`);
            set({products: response.data.data });
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
    },

    deleteProduct: async (id) => {
        set({loading: true})
        try {
            await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/products/${id}`);
            set(prev => ({products: prev.products.filter(product => product.id !== id)}));
        } catch (error) {
            console.log("Error in deleteProduct function:", error);
            toast.error("Failed to delete product. Please try again later.");
        }
        finally{
            set({loading: false});
        }
    },

    setFormData: (formData)=> set({formData: formData}),
    resetForm: () => set({ FormData: {name: "", price: "", image: ""}}),

    addProduct: async (e)=> {
        e.preventDefault();
        set({loading: true, error: null});

        try {
            const {formData} = get();
            console.log(formData);
            
            await axios.post(`${import.meta.env.VITE_BASE_URL}/api/products`, formData);
            await get().fetchProducts();
            get().resetForm();
            toast.success("Product added succcesfully")    
        } catch (error) {
            console.log("Error in addProduct function", error);
            toast.error("Something went wrong");
        }
        finally{
            set({ loading: false });
        }
    },

    fetchProduct: async (id) => {
        set({loading: true})

        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/products/:${id}`);
            set({ currentProduct : response.data.data, formData: response.data.data, error:null }); //pre-fill form with current product data
        } catch (error) {
            console.log("Error in fetch Product", error);
            set({ error: "Something went wrong", currentProduct: null })
        } 
        finally{
            set({ loading: false });
        }
    },

    updateProduct: async (id) => {
        set({ loading: true });
        try {
            const {formData} = get();
            const response = await axios.put(`${import.meta.env.VITE_BASE_URL}/api/products/${id}`, formData);
            toast.success("Product updated successfully"); 
        } catch (error) {
            toast.error("Something went wrong");
            console.log('Error in updateProduct function', error);
        }
        finally{
            set({ loading: false });
        }

    }

}));