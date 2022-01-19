const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");

router.post("/create", productController.createProduct);

router.get("/all", productController.getAllProducts);

module.exports = router;
