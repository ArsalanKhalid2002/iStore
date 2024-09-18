import express from "express";
import Product from "../models/product.models.js";
import mongoose from "mongoose";

import { deleteProduct,updateProduct,createProduct,getProducts } from "../controllers/product.controller.js";
const router = express.Router();

router.get("/", getProducts );
router.post("/", createProduct );
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;