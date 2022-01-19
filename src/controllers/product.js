const productService = require("../services/product");
const { promise } = require("../middlewares/promise");

exports.createProduct = promise(async (req, res) => {
  const { title, price } = req.body;

  const product = await productService.createProduct({ title, price });

  res
    .status(200)
    .json({ message: "Successfully created a new product", product });
});

exports.getAllProducts = promise(async (req, res) => {
  const products = await productService.getAllProducts();

  res.status(200).json({ products });
});

exports.getSingleProduct = promise(async (req, res) => {
  const { id } = req.params;
  const product = await productService.getSingleProduct({ id });

  res.status(200).json({ product });
});

exports.deleteSingleProduct = promise(async (req, res) => {
  const { id } = req.params;
  const message = await productService.deleteSingleProduct({ id });
  console.log(message);

  res.status(200).json({ message });
});
