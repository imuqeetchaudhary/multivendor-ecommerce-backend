const productService = require('../services/product');
const saleService = require('../services/sale');
const { promise } = require('../middlewares/promise');

exports.createProduct = promise(async (req, res) => {
	const { title, price, description } = req.body;
	const image = req.file.filename;
	const ownerId = req.user.userId;

	const product = await productService.createProduct({
		title,
		price,
		image,
		description,
		ownerId,
	});

	const newProductObj = productService.excludeCreatedAtUpdatedAt({ product });

	const imageRequest = {
		type: 'GET',
		url: `http://localhost:8000/${newProductObj.image}`,
	};

	res.status(200).json({
		message: 'Successfully created a new product',
		newProductObj,
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
			type: 'GET',
			url: `http://localhost:8000/product/${id}`,
		},
	});
});

exports.deleteProduct = promise(async (req, res) => {
	const { id } = req.params;
	const message = await productService.deleteProduct({ id });

	res.status(200).json({ message });
});

exports.getSaleGraphOfAllProductsForASpecificSeller = promise(async (req, res) => {
	const ownerId = req.params.sellerId;

	const sellerProducts = await productService.getAllProductsForASpecificOwner({
		ownerId,
	});

	let productsGraph = [];

	for (let i = 0; i < sellerProducts.length; i++) {
		const allSalesForASingleProduct = await saleService.getAllSalesForASingleProduct(
			{
				productId: sellerProducts[i].productId,
			}
		);

		const productSaleQuantity = allSalesForASingleProduct.reduce(
			(accumulator, nextSale) => {
				return nextSale.productQuantity + accumulator;
			},
			0
		);

		newProductObj = {
			productId: sellerProducts[i].productId,
			title: sellerProducts[i].title,
			saleQuantity: productSaleQuantity,
		};

		productsGraph.push(newProductObj);
	}

	res.status(200).json({ productsGraph });
});

exports.getAllProductsForASpecificOwner = promise(async (req, res) => {
	const ownerId = req.user.userId;

	const products = await productService.getAllProductsForASpecificOwner({ ownerId });

	res.status(200).json({ products });
});
