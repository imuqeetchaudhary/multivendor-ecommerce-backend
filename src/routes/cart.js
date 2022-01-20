const express = require("express");
const router = express.Router();
const { authentication } = require("../middlewares/isAuth");
const cartController = require("../controllers/cart");

router.post("/:id", authentication, cartController.createCart);

router.get("/", authentication, cartController.getAllCarts);

router.patch("/:id", authentication, cartController.updateCart);

router.delete("/:id", authentication, cartController.deleteCart);

module.exports = router;
