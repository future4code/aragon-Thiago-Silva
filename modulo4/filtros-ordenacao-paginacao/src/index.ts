import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { getUsers } from "./endpoints/getUsers";
import { searchProducts } from "./endpoints/searchProducts";
import { createNewProduct } from "./endpoints/createNewProduct";
import { deleteProducts } from "./endpoints/deleteProducts";
import { updatePrice } from "./endpoints/updatePrice";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

app.get("/ping", ping)

// Get users
app.get("/users", getUsers)

// Search products
app.get("/products", searchProducts)

// Create new product
app.post("/products", createNewProduct)

// Edit product price
app.put("/products/:id", updatePrice)

// Delete products
app.delete("/products/:id", deleteProducts)