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
    return err;
  }
};

exports.getAllProducts = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (err) {
    return err;
  }
};
