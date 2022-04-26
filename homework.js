"use strict";

function BinarioADecimal(num){
  // tu codigo aca
  // algo
  // 1 0 0 1 --> 1x2**3 + 0x2**2 + 0x2**1 + 1x2**0
  // 8 + 0 + 0 + 1 = 9
  // necesito los datos separados
  const arreglo = num.split("");
  let resultadoFinal = 0;
  // por cada uno voy a hacer una operacion matematica
  for (let i = 0; i < arreglo.length; i++){
    resultadoFinal = resultadoFinal + arreglo[i] * Math.pow(2,arreglo.length - 1 - i);

  // voy a sumar un resultado final
}
  return resultadoFinal;
}
  



function DecimalABinario(num) {
  // tu codigo aca
  // tomamos el nuemro y lo dividimos por 2
  // dividir hasta que el resultado sea 0
  // tomar todas las sobras para obtener mi numero binario
  // guardar mi numero binario

  var arreglo = [];

  while(num > 0){
    arreglo.unshift(num % 2);
    num = Math.floor(num/2);
  }

  return arreglo.join("");
  
}

   

// No se pueden usar: 
// parseInt
// toString



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};

console.log(BinarioADecimal("11100"))