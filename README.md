# Online Store REST Api

---

### Base URL: http://localhost:8000

---

## Routes for User Auth

### to register a new user

- user/register :post

```js
{
    name: String,
    email: String,
    password: String,
    isAdmin: Boolean,
}
```

### to login a new user

- user/login :post

```js
{
    email: String,
    password: String,
}
```

### to get all users

- user/all :get :protected

## Routes for Products

### to create a new product

- product/ :post :protected

```js
{
    title: String,
    price: Number,
    image: String,
    description: String,
}
```

### to get all product

- product/ :get

### to get a single product (where id === productId)

- product/:id: :get

### to update a product

- product/:id: :patch :protected (where id === productId)

```js
{
    title: String,
    price: Number,
    description: String,
}
```

### to delete a single product

- product/:id: :delete :protected (where id === productId)

### to get products selling graph for a specific seller

- product/seller/:sellerId :get :protected

## Routes for Adding Products to Cart

### to add a new product to cart

- cart/:id: :post :protected (where id === productId)

### to get all cart products

- cart/ :get :protected

### to update a cart product

- cart/:id: :patch :protected (where id === cartId)

```js
{
    productId: Number,
    quantity: Number,
}
```

### to delete a single cart product

- cart/:id: :delete :protected (where id === cartId)

## Routes for Sale

### to create a new sale

- sale/:cartId :post :protected

### to get all sales for admin

- sale/admin :get :protected

### to get all sales for seller

- sale/seller :get :protected

### to get all sales for buyer

- sale/buyer :get :protected

### to get single sale by pk

- sale/:saleId :get :protected

### to get total quantity of product sold

- sale/product-sold/:productId :get :protected

### to get all purchase history of a specific buyer

- sale/purchase-history/:buyerId :get :protected
