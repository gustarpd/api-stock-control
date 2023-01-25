import { Router } from "express";
import { FilterProduct } from "../app/controllers/filter-product";
import { ProductRegistrationController } from "../app/controllers/product-registration";

const router = Router();

router.get("/ping", (req, res) => {
  return res.json("pong");
});

router.post("/products-registration", new ProductRegistrationController().handle)
router.get("/get-products", new FilterProduct().handle)
router.put("/edit/product/:id", new FilterProduct().edit)

export default router;
