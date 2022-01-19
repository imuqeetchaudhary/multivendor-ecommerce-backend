### Online Store REST Api

---

### Routes for Products

## to create a new product

- product/ :post

```js
{
    title: String,
    price: Number
}
```

## to get all product

- product/ :get

## to get a single product

- product/:id: :get

## to update a product

- product/:id: :patch

```js
{
    title: String,
    price: Number
}
```

## to delete a single product

- product/:id: :delete
