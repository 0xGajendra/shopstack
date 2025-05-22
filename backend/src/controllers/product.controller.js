import { sql } from "../config/db.config.js"

export const getAllProducts = async (req, res) =>{
    try {
        const products = await sql`
            SELECT * FROM products
            ORDER BY created_at DESC
        `;

        console.log(products);
        
        res.status(200).json({success: true, message: "all the products are successfully retrieved from the DB", data:products})
    } catch (error) {
        console.log("Error in getAllProducts controller", error);
        res.status(500).json({ success: false, message: "Internal Server Error"});
    }
}

export const createProduct = async (req, res) =>{
    const {name, price, image} = req.body;

    if(!name || !price || !image){
        return res.status(400).json({success: false, message: "All fields are required"})
    }

    try {
        //RETURNING * : Returns inserted value
        const newProduct = await sql`
            INSERT INTO products (name,price,image) VALUES(${name},${price},${image}) RETURNING *
        `

        console.log("new product added:", newProduct);

        res.status(201).json({success: true, data: newProduct[0]});
        
        
    } catch (error) {
        console.log("Error in createProduct controller", error);
        res.status(500).json({ success: false, message: "Internal Server Error"});
    }
}

export const getProduct = async (req, res) => {

    const {id} = req.params;

    try {
        const product = await sql`
            SELECT * FROM products WHERE id=${id}
        `
        console.log("Product",product);
        
        res.status(200).json({success: true, data: product[0]})
    } catch (error) {
        console.log("Error in getProduct controller", error);
        res.status(500).json({ success: false, message: "Internal Server Error"});
    }
    
}

export const updateProduct = async (req, res) => {
    const {id} = req.params;
    const { name , price, image} = req.body;

    try {
        const updatedProduct = 
        await sql`
            UPDATE products 
            SET name=${name}, price=${price}, image=${image} WHERE id=${id} RETURNING *
        `

        if(updatedProduct.length === 0){
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({success: true, data: updatedProduct[0]});

    } catch (error) {
        console.log("Error in updateProduct controller", error);
        res.status(500).json({ success: false, message: "Internal Server Error"});
    }
}

export const deleteProduct = async (req, res) => {
    const {id} = req.params;

    try {
        const deletedProduct = await sql`
            DELETE from products WHERE id=${id} RETURNING *
        `;

        if(deleteProduct.length === 0){
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({ success: true, data: deletedProduct[0] });
    } catch (error) {
        console.log("Error in deleteProduct controller", error);
        res.status(500).json({ success: false, message: "Internal Server Error"});
    }
}