var express = require('express');
var http = require('http');
var router = express.Router();

/* GET evento page. */
router.get('/[a-zA-Z0-9_]+?', function(req, res, next) {

  var _link = req.path.replace('/','');
  http.get('http://18.231.16.165:3000/v1/evento/'+_link, (resp) => {

    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      data = JSON.parse(data)
      data.titulo += ' - Ingressou'

      res.render('evento', data);
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
});

module.exports = router;
