const { Cart } = require("../db/models/cart");

exports.createCart = async ({ userId, productId }) => {
  try {
    const cart = new Cart({
      userId,
      productId,
    });

    await cart.save();
    return cart;
  } catch (err) {
    throw new Error(err);
  }
};

exports.getAllCarts = async ({ userId }) => {
  try {
    const carts = await Cart.find({ userId }).populate("productId");
    if (!carts) throw new Error("No product found in cart");
    return carts;
  } catch (err) {
    throw new Error(err);
  }
};

exports.updateCart = async ({ id, productId, quantity }) => {
  try {
    const updateCart = await Cart.findByIdAndUpdate(id, {
      $set: {
        productId,
        quantity,
      },
    });

    return updateCart == null
      ? "Cart product not found"
      : "Successfully updated cart product";
  } catch (err) {
    throw new Error(err);
  }
};

exports.deleteCart = async ({ id }) => {
  try {
    const cart = await Cart.deleteOne({ _id: id });
    return cart.deletedCount == 1
      ? "Successfully deleted cart product"
      : "Cart product doesn't exixts";
  } catch (err) {
    throw new Error(err);
  }
};
