import { Router } from "express";
import { ProductController } from "../controllers/productController";
import { ProductService } from "@src/application/services/productService";
import { productRepositoryImpl } from "@src/infrastructure/repositories/productRepositoryImpl";
import { Postgres } from "@src/infrastructure/database/db";
import Env from "@src/common/Env";

const router = Router();

export let db = new Postgres({
  database: "test_db",
  host: "postgres",
  password: "postgres",
  port: 5432,
  user: "postgres",
});

const productRepository = new productRepositoryImpl(db.getSequelizeInstance());
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);

router.get("/", (req, res) => productController.getAllproducts(req, res));
router.get("/:id", (req, res) => productController.getproductById(req, res));
router.post("/", (req, res) => productController.createproduct(req, res));
router.put("/:id", (req, res) => productController.updateproduct(req, res));
router.delete("/:id", (req, res) => productController.deleteproduct(req, res));

export default router;
