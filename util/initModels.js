const { User } = require('../models/user.model');
const { Product } = require('../models/product.model');
const { Cart } = require('../models/cart.model');
const { ProductInCart } = require('../models/productInCart.model');
const { Order } = require('../models/order.model');

const initModels = () => {
  //  User <--> Products
  User.hasMany(Product);
  Product.belongsTo(User);

  // User <--> Orders
  User.hasMany(Order);
  Order.belongsTo(User);

  // User <--> Cart
  User.hasOne(Cart);
  Cart.belongsTo(User);

  // Carts <-->  Products
  Cart.belongsToMany(Product, { through: ProductInCart });
  Product.belongsToMany(Cart, { through: ProductInCart });

  // Order <--> Cart
  Cart.hasOne(Order);
  Order.belongsTo(Cart);
};

module.exports = { initModels };