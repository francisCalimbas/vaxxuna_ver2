const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars')

const config = require('./config');
const path = require('path');
const routes = require('./routes/routes');

const app = express();
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials')
});

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('hbs', hbs.engine);
app.set('view enginer', '.hbs');

app.use('/', routes);

app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));