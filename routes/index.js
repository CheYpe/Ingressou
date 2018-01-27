var express = require('express');
var router = express.Router();
var host = 'http://www.ingressou.com'

/* GET home page. */
router.get('/', function(req, res, next) {
  _data = {
    titulo_page: 'Ingressou - Loja Virtual de Ingressos',
    url_page: req.headers.host+req.originalUrl,
    imagem: 'http://ingressou.com/images/perfil.jpg'
  }
  res.render('index', _data);
});

/* GET contact page. */
router.get('/contato', function(req, res, next) {
  _data = {
    titulo_page: 'Contato - Ingressou',
    url_page: req.headers.host+req.originalUrl,
    imagem: 'http://ingressou.com/images/perfil.jpg'
  }
  res.render('contato', _data);
});

/* GET new event page. */
router.get('/novoevento', function(req, res, next) {
  _data = {
    titulo_page: 'Adicionar Evento - Ingressou',
    url_page: req.headers.host+req.originalUrl,
    imagem: 'http://ingressou.com/images/perfil.jpg'
  }
  res.render('eventoNovo', _data);
});

/* GET new event page. */
router.get('/novoevento/:id', function(req, res, next) {
  _data = {
    titulo_page: 'Adicionar Evento - Ingressou',
    url_page: req.headers.host+req.originalUrl,
    imagem: 'http://ingressou.com/images/perfil.jpg',
    id: req.params.id
  }
  res.render('eventoInfo', _data);
});

/* GET new event page. */
router.get('/novoevento/:id/editar', function(req, res, next) {
  _data = {
    titulo_page: 'Adicionar Evento - Ingressou',
    url_page: req.headers.host+req.originalUrl,
    imagem: 'http://ingressou.com/images/perfil.jpg',
    id: req.params.id
  }
  res.render('eventoEditar', _data);
});

module.exports = router;
