var express = require('express');
var http = require('http');
var router = express.Router();

/* GET evento page. */
router.get('/[a-z0-9_]+?', function(req, res, next) {

  var _link = req.path.replace('/','');
  http.get('http://api.ingressou.com/v1/evento/'+_link, (resp) => {

    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      data = JSON.parse(data)

      if(!data.error){
        data.titulo_page = data.titulo + ' - Ingressou'
        res.render('evento', data)
      }else{
        res.redirect('/');
      }

    });

  }).on("error", (err) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
});

module.exports = router;
