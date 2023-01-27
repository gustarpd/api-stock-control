import { Router } from "express";
import { DeleteProductController } from "../app/controllers/delete-product";
import { FilterProduct } from "../app/controllers/filter-product";
import { ProductRegistrationController } from "../app/controllers/product-registration";
import { SoldProductController } from "../app/controllers/soldProductController";

const router = Router();

router.get("/ping", (req, res) => {
  return res.json("pong");
});

router.post(
  "/products-registration",
  new ProductRegistrationController().handle
);
router.get("/get-products", new FilterProduct().handle);
router.put("/edit/product/:id", new FilterProduct().edit);
router.delete("/delele/product/:id", new DeleteProductController().handle);


router.post("/add-sold-in", new SoldProductController().handle);

export default router;
