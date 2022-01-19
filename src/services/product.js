const { Product } = require("../db/models/product");

exports.createProduct = async ({ title, price }) => {
  try {
    const product = new Product({
      title,
      price,
    });

    await product.save();
    return product;
  } catch (err) {
    throw new Error(err);
  }
};

exports.getAllProducts = async () => {
  try {
    const products = await Product.find();
    if (!products) throw new Error("Products not found");
    return products;
  } catch (err) {
    throw new Error(err);
  }
};

exports.getSingleProduct = async ({ id }) => {
  try {
    const products = await Product.findById(id);
    if (!products) return "Product not found";
    return products;
  } catch (err) {
    throw new Error(err);
  }
};

exports.deleteSingleProduct = async ({ id }) => {
  try {
    const products = await Product.deleteOne({ _id: id });
    return products.deletedCount == 1
      ? "Successfully deleted Product"
      : "Product doesn't exixts";
  } catch (err) {
    throw new Error(err);
  }
};
