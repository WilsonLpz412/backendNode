const express = require('express');
const response = require('../../network/response');
const router = express.Router();

router.get('/', function (req, res) {
  console.log(req.headers);
  res.header({'custom-header': 'Nuestro valor personalizado' });
  //res.send('Lista de mensajes');
  response.success(req, res, 'Lista de mensajes');
});
router.post('/', function (req, res) {
  console.log(req.query);
  //console.log(req.body);
  if (req.query.error == "ok") {
    response.error(req, res, 'Error inesperado', 500, 'Error simulado');
  } else {
    //res.status(201).send([{error: '', body: 'Creado correctamente'}]);
    response.success(req, res, 'Creado correctamente', 201);
  }
});

module.exports = router;