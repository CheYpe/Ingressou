var express = require('express');
var http = require('http');
var router = express.Router();

/* GET login page. */
router.get('/perfil', function(req, res, next) {
  _data = {
    titulo_page: 'Ingressou - Perfil',
    url_page: req.headers.host+req.originalUrl,
    imagem: 'http://ingressou.com/images/perfil.jpg'
  }
  res.render('painelPerfil', _data);
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  _data = {
    titulo_page: 'Ingressou - Login',
    url_page: req.headers.host+req.originalUrl,
    imagem: 'http://ingressou.com/images/perfil.jpg'
  }
  res.render('painelLogin', _data);
});

/* GET login page. */
router.get('/pedidos', function(req, res, next) {
  _data = {
    titulo_page: 'Ingressou - Pedidos',
    url_page: req.headers.host+req.originalUrl,
    imagem: 'http://ingressou.com/images/perfil.jpg'
  }
  res.render('painelPedidos', _data);
});

/* GET login page. */
router.get('/eventos', function(req, res, next) {
  _data = {
    titulo_page: 'Ingressou - Eventos',
    url_page: req.headers.host+req.originalUrl,
    imagem: 'http://ingressou.com/images/perfil.jpg'
  }
  res.render('painelEventos', _data);
});

/* GET cadastro page. */
router.get('/cadastro', function(req, res, next) {
  _data = {
    titulo_page: 'Ingressou - Cadastro',
    url_page: req.headers.host+req.originalUrl,
    imagem: 'http://ingressou.com/images/perfil.jpg'
  }
  res.render('cadastro', _data);
});

module.exports = router;
