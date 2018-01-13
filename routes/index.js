var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { titulo_page: 'Ingressou - Loja Virtual de Ingressos', imagem: 'http://ingressou.com/images/perfil.jpg' });
});

/* GET contact page. */
router.get('/contato', function(req, res, next) {
  res.render('contato', { titulo_page: 'Contato - Ingressou', imagem: 'http://ingressou.com/images/perfil.jpg' });
});

/* GET new event page. */
router.get('/novoevento', function(req, res, next) {
  res.render('novoevento', { titulo_page: 'Adicionar Evento - Ingressou', imagem: 'http://ingressou.com/images/perfil.jpg' });
});

/* GET new event page. */
router.get('/novoevento/[a-z0-9_]+?', function(req, res, next) {
  var _link = req.path.replace('/novoevento/','');
  res.render('infoevento', { titulo_page: 'Informações do Evento - Ingressou', imagem: 'http://ingressou.com/images/perfil.jpg', link: _link });
});

module.exports = router;
