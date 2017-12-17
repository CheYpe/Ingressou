var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { titulo: 'Ingressou - Loja Virtual de Ingressos', imagem: 'http://ingressou.com/images/perfil.jpg' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { titulo: 'Ingressou - Login', imagem: 'http://ingressou.com/images/perfil.jpg' });
});

/* GET login page. */
router.get('/contato', function(req, res, next) {
  res.render('contato', { titulo: 'Contato - Ingressou', imagem: 'http://ingressou.com/images/perfil.jpg' });
});

module.exports = router;
