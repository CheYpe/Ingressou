'use strict';

var dir = (function(my) {
  var my = {}

  var qtdIngressos = function (obj) {
    return "<div class='form-group row align-items-center'><label class='col-md-6 col-form-label text-md-right'>"+obj.nome+" - "+obj.lote+"º lote<br><span class='text-success'>"+mask.formatValor(obj.valor)+"</span></label><div class='input-group col-md-6'><input type='hidden' value='"+obj.quantidade+"' class='valueMax'><button type='button' name='button' class='input-group-addon minus mdi mdi-minus-circle-outline mdi-24px'></button><input name='"+obj.id+"' type='text' class='form-control text-center' value='0' readonly><button type='button' name='button' class='input-group-addon plus mdi mdi-plus-circle-outline mdi-24px'></button></div></div>"
  }

  my.ingressos = []

  my.cardEvento = function (obj) {
    return "<a class='card card-evento grid-item border-0 bg-dark text-light' href='evento/"+obj.link+"'><img class='card-img-top' src='"+obj.imagem+"' alt='Card image cap'><div class='card-body d-flex align-content-between flex-wrap'><h5 class='card-title font-weight-normal text-truncate'>"+obj.titulo+"</h5><div class='font-ligh row card-descricao'><div class='col text-truncate'><span class='mdi mdi-calendar text-warning'></span> "+moment.utc(obj.data_periodo).format('DD/MM/YYYY')+"</div><div class='col text-right col-localizacao text-truncate'>"+obj.cidade+"</div><div class='col text-right col-informacoes text-uppercase text-truncate'>Informações</div></div></div></a>"
  }

  my.abaDataEvento = function (obj) {
    return "<li class='p-2'><span class='d-block data'>"+moment.utc(obj.data_periodo).format('DD/MM')+"</span><span class='d-block semana text-lowercase'>"+moment.utc(obj.data_periodo).format('ddd')+"</span></li>"
  }

  my.atracoesDia = function (obj) {
    return "<div class='p-3 mt-2 atracoesDia'><h6 class='font-120'>Atrações desse dia:</h6><p class='text-justify'>"+obj.atracao+"</p></div>"
  }

  my.ingressos = function (obj) {
    var _res = ""

    if(obj){
      obj.forEach(function (elem) {
        _res += qtdIngressos(elem)
        elem.quantidade = 0
        elem.data = obj.data
        my.ingressos.push(elem)
      })
    }else{
      _res = "<li class='py-2 alert alert-warning text-center'>Nenhum ingresso encontrado</li>"
    }

    return _res
  }

  return my

})(dir)
