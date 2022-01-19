const express = require("express");
const router = express.Router();
const { upload } = require("../middlewares/upload");
const productController = require("../controllers/product");

router.post("/", upload.single("image"), productController.createProduct);

router.get("/", productController.getAllProducts);

router.get("/:id", productController.getSingleProduct);

router.patch("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;
