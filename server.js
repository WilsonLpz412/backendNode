const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

const router = require('./network/routes')

db('mongodb+srv://db_user_backendNode:OdTGDijnJnFUMSkh@cluster0.63u4m.mongodb.net/db_backendNode?retryWrites=true&w=majority');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(router);
router(app);

//app.use('/', function (req, res) {
//  res.send('Hola');
//});

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000');