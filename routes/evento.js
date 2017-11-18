var express = require('express');
var router = express.Router();

/* GET evento page. */
router.get('/*', function(req, res, next) {
  res.render('evento', { titulo: 'Evento - ingressou' });
});

module.exports = router;
