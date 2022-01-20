const cartService = require("../services/cart");
const { promise } = require("../middlewares/promise");

exports.createCart = promise(async (req, res) => {
  const productId = req.params.id;
  const userId = req.user._id;

  const cart = await cartService.createCart({
    userId,
    productId,
  });

  res.status(200).json({
    message: "Successfully added a new product to cart",
    cart,
  });
});

exports.getAllCarts = promise(async (req, res) => {
  const userId = req.user._id;

  const cart = await cartService.getAllCarts({ userId });

  res.status(200).json({ cart });
});

exports.updateCart = promise(async (req, res) => {
  const { id } = req.params;
  const { productId, quantity } = req.body;

  const message = await cartService.updateCart({
    id,
    productId,
    quantity,
  });

  res.status(200).json({
    message,
    request: {
      type: "GET",
      url: `http://localhost:8000/cart/${id}`,
    },
  });
});

exports.deleteCart = promise(async (req, res) => {
  const { id } = req.params;
  const message = await cartService.deleteCart({ id });

  res.status(200).json({ message });
});
