const Cart = require("../models/cart");
const db = require("../utils/database");

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {}

  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }

  static deleteById(id) {}

  static findById(id, cb) {}
};
