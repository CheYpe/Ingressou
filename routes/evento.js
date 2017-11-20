var express = require('express');
var router = express.Router();

/* GET evento page. */
router.get('/[a-zA-Z0-9_]+?', function(req, res, next) {
  var _link = req.path.replace('/','');
  res.render('evento', {
    titulo: _link+' - ingressou',
    link: _link
  });
});

module.exports = router;
