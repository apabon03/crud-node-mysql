const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

//routes:

const customerRoutes = require('./routes/customer');
const { urlencoded } = require('express');

//setting:

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crudmysqlnode',
    port: 3306
}, 'single'));

app.use(express.urlencoded({ extended: false }));

//middlewares:

app.use(morgan('dev'));


//routes:

app.use('/', customerRoutes);

//static files:
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log(`Server on port: 3000`)
});

