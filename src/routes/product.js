const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");

router.post("/create", productController.createProduct);

router.get("/all", productController.getAllProducts);

router.get("/:id", productController.getSingleProduct);

router.patch("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;
