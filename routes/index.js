var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { titulo: 'Ingressou - loja virtual de ingressos', page: 'home' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { titulo: 'Ingressou - Login' });
});

/* GET login page. */
router.get('/contato', function(req, res, next) {
  res.render('contato', { titulo: 'Ingressou - loja virtual de ingressos', page: 'contato' });
});

module.exports = router;
