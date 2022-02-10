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
