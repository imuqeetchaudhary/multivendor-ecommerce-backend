const productService = require("../services/product");
const { promise } = require("../middlewares/promise");

exports.createProduct = promise(async (req, res) => {
  const { title, price, description } = req.body;
  const image = req.file.filename;

  const product = await productService.createProduct({
    title,
    price,
    image,
    description,
  });

  const imageRequest = {
    type: "GET",
    url: `http://localhost:8000/${product.image}`,
  };

  res.status(200).json({
    message: "Successfully created a new product",
    product,
    imageRequest,
  });
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

exports.updateProduct = promise(async (req, res) => {
  const { id } = req.params;
  const { title, price, description } = req.body;

  const message = await productService.updateProduct({
    id,
    title,
    price,
    description,
  });

  res.status(200).json({
    message,
    request: {
      type: "GET",
      url: `http://localhost:8000/product/${id}`,
    },
  });
});

exports.deleteProduct = promise(async (req, res) => {
  const { id } = req.params;
  const message = await productService.deleteProduct({ id });

  res.status(200).json({ message });
});
