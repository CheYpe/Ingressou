var express = require('express');
var http = require('http');
var router = express.Router();

/* GET login page. */
router.get('/perfil', function(req, res, next) {
  res.render('painelPerfil', { titulo_page: 'Ingressou - Perfil', imagem: 'http://ingressou.com/images/perfil.jpg' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('painelLogin', { titulo_page: 'Ingressou - Login', imagem: 'http://ingressou.com/images/perfil.jpg' });
});

/* GET login page. */
router.get('/pedidos', function(req, res, next) {
  res.render('painelPedidos', { titulo_page: 'Ingressou - Pedidos', imagem: 'http://ingressou.com/images/perfil.jpg' });
});

/* POST login page. */
router.post('/login', function(req, res, next) {

  // http.get('http://api.ingressou.com/v1/evento/'+_link, (resp) => {
  //
  //   let data = '';
  //
  //   // A chunk of data has been recieved.
  //   resp.on('data', (chunk) => {
  //     data += chunk;
  //   });
  //
  //   // The whole response has been received. Print out the result.
  //   resp.on('end', () => {
  //     data = JSON.parse(data)
  //     data.titulo_page = data.titulo + ' - Ingressou'
  //
  //     res.render('evento', data);
  //   });
  //
  // }).on("error", (err) => {
  //   console.log("Error: " + err.message);
  // })

  res.json(200, req.body.cpf);
});

/* GET cadastro page. */
router.get('/cadastro', function(req, res, next) {
  res.render('cadastro', { titulo_page: 'Ingressou - Cadastramento', imagem: 'http://ingressou.com/images/perfil.jpg' });
});

module.exports = router;
