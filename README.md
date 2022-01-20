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
}
```

### to get all product

- product/ :get

### to get a single product

- product/:id: :get

### to update a product

- product/:id: :patch :protected

```js
{
    title: String,
    price: Number,
}
```

### to delete a single product

- product/:id: :delete :protected
