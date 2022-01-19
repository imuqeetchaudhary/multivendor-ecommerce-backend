const productService = require("../services/product");

exports.createProduct = async (req, res) => {
  const { title, price } = req.body;

  const product = await productService.createProduct({ title, price });

  res
    .status(200)
    .json({ message: "Successfully created a new product", product });
};

exports.getAllProducts = async (req, res) => {
  const products = await productService.getAllProducts();

  res.status(200).json({ products });
};
