import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { connectDB } from './config/db.js';
import Product from './models/product.models.js';
import productRoutes from "./routes/product.route.js"
import path from "path";

dotenv.config();
const PORT= process.env.PORT
const app =express();

const __dirname=path.resolve();

app.use(express.json()); //allows to accept json in body
 
app.use("/api/products",productRoutes);

if(process.env.NODE_ENV ==="production"){
app.use(express.static(path.join(__dirname,"/frontend/dist")));


app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"));
})
}
app.listen(PORT,() =>{
    connectDB();
    console.log("Servers started at http://localhost:"+ PORT);
});

