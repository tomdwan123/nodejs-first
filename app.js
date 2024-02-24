const express = require("express");
const bodyParser = require("body-parser");
const errorsController = require("./controllers/errors");
const sequelize = require("./utils/database");
const Product = require("./models/product");
const User = require("./models/user");
const path = require("path");
const handleHbs = require("express-handlebars");

const app = express();
app.engine(
  "hbs",
  handleHbs({
    layoutsDir: "views/layouts",
    defaultLayout: "main-layout",
    extname: "hbs",
  })
);
//app.set('view engine', 'hbs');
//app.set('view engine', 'pug');
app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorsController.get404);

Product.belongsTo(User, {
  constraints: true,
  onDelete: "CASCADE",
});
User.hasMany(Product);

sequelize
  .sync({ force: true })
  .then((result) => {
    console.log(result);
    app.listen(3000);
  })
  .catch((err) => console.log(err));
