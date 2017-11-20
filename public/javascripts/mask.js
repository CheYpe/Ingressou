'use strict';

var mask = (function(my) {
  var my = {}

  my.formatValor = function (valor) {
    valor = ("R$ "+valor).replace('.',',')

    if (!valor.includes(',')){
      return valor+',00'
    }else{
      valor = valor.split(',')
      if (valor[1].length == 1){
        valor[1] = valor[1]+"0"
      }
      return valor
    }
  }

  my.formatDate = function (dateObject) {
    var d = new Date(dateObject);
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    var date = day + "/" + month + "/" + year;

    return date;
  };

  my.formatDay = function (dateObject) {
    var d = new Date(dateObject);
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    var date = day + "/" + month;

    return date;
  };

  my.desFormatValor = function (valor) {
    valor = valor.replace('R$ ', '')
    return parseFloat(valor.replace(',','.'))
  }

  return my

})(mask)
