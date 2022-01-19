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

exports.getSingleProduct = async ({ id }) => {
  try {
    const products = await Product.findById(id);
    return products;
  } catch (err) {
    return err;
  }
};

exports.deleteSingleProduct = async ({ id }) => {
  try {
    const products = await Product.deleteOne({ _id: id });
    return products.deletedCount == 1
      ? "Successfully deleted Product"
      : "Product doesn't exixts";
  } catch (err) {
    return err;
  }
};
