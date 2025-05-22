import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import productRoute from "./routes/product.route.js";
import { sql } from "./config/db.config.js";

const PORT = process.env.PORT || 3001;

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(helmet()); //helmet is a security middleware that helps you protect your app by setting various HTTP headers
app.use(morgan("dev")); //log the request details

app.get("/", (req, res)=> {
    res.send("Hello Nigga!");
});

app.use("/api/products", productRoute);

const initDB = async () => {
    try {
        await sql`
        CREATE TABLE IF NOT EXISTS products (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            price DECIMAL(10, 2) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
        )
        ` 
    } catch (error) {
        console.log("Error in initDB", error);
        
    }
}

initDB().then(()=>{
    console.log("DB Connected");
    
    app.listen(PORT, ()=>{
        console.log(`Server is running on http://localhost:${PORT}`);   
    })
})
