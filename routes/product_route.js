import express from "express";
import {
  getProducts, 
  getOneProduct,
  postProduct,
  putProduct,
  patchProduct,
  deleteProduct
} from "../controllers/product_controller.js";

const router = express.Router();

router.get('/', getProducts);

router.get('/:id', getOneProduct);

router.post('/', postProduct);

router.put('/:id', putProduct);

router.patch('/:id', patchProduct);

router.delete('/:id', deleteProduct);

export default router;
