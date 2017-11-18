'use strict';

var dir = (function(my) {
  var my = {}

  my.cardEvento = function (obj) {
    var _card = "<div class='col-12 col-sm-6 col-lg-4'><a href='evento.html?t="+obj.link+"' class='card card-evento w-100 mb-3 text-light border-0 rounded-0' style='background-image: url('http://18.231.16.165:3000/"+obj.imagem+"')'><img class='card-img-top rounded-0' src='http://18.231.16.165:3000/"+obj.imagem+"' alt='Card image cap'><div class='card-body' style='position: relative'><h5 class='card-title font-weight-normal text-truncate'>"+obj.titulo+"</h5><div class='font-ligh row card-descricao'><div class='col'><span class='mdi mdi-calendar text-warning'></span> 28/10/2017</div><div class='col text-right'>"+obj.cidade+" <span class='mdi mdi-map-marker text-warning'></span></div></div><span class='btn btn-success btn-card-comprar border-0 rounded-0 btn-block px-3 px-sm-5'>Comprar</span></div></a></div>"

    return _card
  }

  return my

})(dir)
