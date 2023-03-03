import { Router } from "express";
import { DeleteProductController } from "../app/controllers/Product/delete-product";
import { ExitExpanseController } from "../app/controllers/Expanse/Entrance/ExitProductsController";
import { updateProductController } from "../app/controllers/Product/filter-product";
import { GetAllExitExpanseController } from "../app/controllers/Expanse/Exits/GetAllExitExpanseController";
import { GetAllSalesControllers } from "../app/controllers/Expanse/Entrance/GetAllSalesController";
import { ProductRegistrationController } from "../app/controllers/Product/product-registration";
import { SoldProductController } from "../app/controllers/Product/soldProductController";
import { DeleteSaleController } from "../app/controllers/Expanse/Entrance/DeleteSaleController";
import { DeleteExitController } from "../app/controllers/Expanse/Exits/DeleteExitsController";
import { UpdateExitsController } from "../app/controllers/Expanse/Exits/UpdateExitsController";

const router = Router();

router.get("/ping", (req, res) => {
  return res.json("pong");
});

router.post(
  "/products-registration",
  new ProductRegistrationController().handle
);

router.get("/get-products", new updateProductController().handle);
router.get("/get-products/:name", new updateProductController().getByName);

router.put("/edit/product/:id", new updateProductController().edit);
router.delete("/delele/product/:id", new DeleteProductController().handle);

router.post("/add-sold-in", new SoldProductController().handle);
router.get("/get-all-sales", new GetAllSalesControllers().handle);
router.delete("/delete/sale/:id", new DeleteSaleController().handle);
router.post("/create-new-exit", new ExitExpanseController().handle);

router.get("/get-exits-expanses", new GetAllExitExpanseController().handle);
router.put(
  "/update/exit/expanses/:id",
  new UpdateExitsController().handle
);
router.delete("/delete/exit/:id", new DeleteExitController().handle);

export default router;
