const express = require('express');
const path = require('path');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const app = express();
const http = require('http');
const route = require('./routes');
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));
//Http logger
app.use(morgan('combined'));
//Template engine
app.engine(
    'hbs',
    exphbs({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
//Routes init
route(app);
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
