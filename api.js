import express from "express";
import mongoose from "mongoose";
import 'dotenv/config';
import productRoute from "./routes/product_route.js";

const app = express();
app.use(express.json());

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const DB_CLUSTER = process.env.DB_CLUSTER;
const PORT = process.env.PORT;

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}/${DB_NAME}?retryWrites=true&w=majority&appName=BackendDB`)
  .then(() => {
    console.log('Connected!');
    app.listen(PORT, () => console.log(`Server Working!`));
  })
  .catch((err) => console.log("Connection failed: ", err.message)
);

// routes
app.use('/api/products', productRoute);
