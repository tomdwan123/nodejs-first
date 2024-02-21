const Sequelize = require("sequelize");

const sequelize = new Sequelize("node2", "root", "1million", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
