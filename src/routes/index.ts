import { Router } from "express";
import { DeleteProductController } from "../app/controllers/Product/delete-product";
import { ExitExpanseController } from "../app/controllers/Expanse/ExitProductsController";
import { FilterProduct } from "../app/controllers/Product/filter-product";
import { GetAllExitExpanseController } from "../app/controllers/Expanse/GetAllExitExpanseController";
import { GetAllSalesControllers } from "../app/controllers/Expanse/GetAllSalesController";
import { ProductRegistrationController } from "../app/controllers/Product/product-registration";
import { SoldProductController } from "../app/controllers/Product/soldProductController";

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
router.get("/get-all-sales", new GetAllSalesControllers().handle)
router.post("/create-new-exit", new ExitExpanseController().handle)

router.get("/get-exits-expanses", new GetAllExitExpanseController().handle)
router.put("/update-exits-expanses/:id", new GetAllExitExpanseController().handle)
router.delete("/delete/products/:id", new DeleteProductController().handle)

export default router;
