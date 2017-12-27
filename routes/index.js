var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { titulo_page: 'Ingressou - Loja Virtual de Ingressos', imagem: 'http://ingressou.com/images/perfil.jpg' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { titulo_page: 'Ingressou - Login', imagem: 'http://ingressou.com/images/perfil.jpg' });
});

/* GET contact page. */
router.get('/contato', function(req, res, next) {
  res.render('contato', { titulo_page: 'Contato - Ingressou', imagem: 'http://ingressou.com/images/perfil.jpg' });
});

/* GET new event page. */
router.get('/novoevento', function(req, res, next) {
  res.render('novoevento', { titulo_page: 'Adicionar Evento - Ingressou', imagem: 'http://ingressou.com/images/perfil.jpg' });
});

module.exports = router;
