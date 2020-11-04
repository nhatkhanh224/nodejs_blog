const express = require('express');
const path = require('path');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const app = express();
const http = require('http');
const route = require('./routes');
const methodOverride = require('method-override');
const db = require('./config/db');
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));
//Middleware
app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride('_method'));
//Connect DB
db.connect();
//Http logger
app.use(morgan('combined'));
//Template engine
app.engine(
    'hbs',
    exphbs({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
//Routes init
route(app);
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
