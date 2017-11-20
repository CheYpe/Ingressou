'use strict';

var dir = (function(my) {
  var my = {}

  var qtdIngressos = function (obj) {
    return "<div class='form-group row align-items-center'><label class='col-md-6 col-form-label text-md-right'>"+obj.nome+" - "+obj.lote+"º lote<br><span class='text-success'>"+mask.formatValor(obj.valor)+"</span></label><div class='input-group col-md-6'><input type='hidden' value='"+obj.quantidade+"' class='valueMax'><button type='button' name='button' class='input-group-addon minus mdi mdi-minus-circle-outline mdi-24px'></button><input name='"+obj.id+"' type='text' class='form-control text-center' value='0' readonly><button type='button' name='button' class='input-group-addon plus mdi mdi-plus-circle-outline mdi-24px'></button></div></div>"
  }

  my.ingressos = []

  my.cardEvento = function (obj) {
    return "<div class='col-12 col-sm-6 col-lg-4'><a href='evento/"+obj.link+"' class='card card-evento w-100 mb-3 text-light border-0 rounded-0' style='background-image: url('"+obj.imagem+"')'><img class='card-img-top rounded-0' src='"+obj.imagem+"' alt='Card image cap'><div class='card-body' style='position: relative'><h5 class='card-title font-weight-normal text-truncate'>"+obj.titulo+"</h5><div class='font-ligh row card-descricao'><div class='col'><span class='mdi mdi-calendar text-warning'></span> 28/10/2017</div><div class='col text-right'>"+obj.cidade+" <span class='mdi mdi-map-marker text-warning'></span></div></div><span class='btn btn-success btn-card-comprar border-0 rounded-0 btn-block px-3 px-sm-5'>Comprar</span></div></a></div>"
  }

  my.abaDataEvento = function (obj) {
    return "<li class='p-2'><span class='d-block data'>"+mask.formatDay(obj.data)+"</span><span class='d-block semana'>ter</span></li>"
  }

  my.detalhesIngresso = function (obj) {
    var _res = "<li><div class='row'><div class='col-lg-5'><h5>Atrações:</h5><p class='font-120'>"+obj.atracao+"</p></div><div class='col-lg-7 qtdIngressos'>"

    if(obj.categorias){
      obj.categorias.forEach(function (elem) {
        _res += qtdIngressos(elem)
        elem.quantidade = 0
        elem.data = obj.data
        my.ingressos.push(elem)
      })
    }

    _res += "</div></div></li>"

    return _res
  }

  return my

})(dir)
