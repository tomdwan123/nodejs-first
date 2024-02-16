const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const handleHbs = require('express-handlebars');

const app = express();
app.engine(
    'hbs',
    handleHbs({ 
        layoutsDir: 'views/layouts', 
        defaultLayout: 'main-layout',
        extname: 'hbs'
    })
);
//app.set('view engine', 'hbs');
//app.set('view engine', 'pug');
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    //res.sendFile(path.join(__dirname, "views", "404.html"));
    res.render('404', { pageTitle: 'Page Not Found' })
});

app.listen(3000);