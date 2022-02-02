exports.init = (sequelize, DataTypes, { User, Product }) => {
  const Cart = sequelize.define(
    "Cart",
    {
      cartId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      productId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
    },
    { underscored: true, tablename: "cart" }
  );

  User.hasMany(Cart, { foreignKey: "user_id" });
  Cart.belongsTo(Cart, { foreignKey: "user_id" });

  Product.hasMany(Cart, { foreignKey: "product_id" });
  Cart.belongsTo(Cart, { foreignKey: "product_id" });

  return Cart;
};