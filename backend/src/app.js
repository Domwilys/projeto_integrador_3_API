const express = require('express');
const router = require('./router');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();

app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,

        allowProtoMethodsByDefault: true,
    }
}));

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('./'));
app.use(express.static('./views'));
app.use(express.json());
app.use(router);

module.exports = app;