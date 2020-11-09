    /*
    function funcao() {
      console.log(arguments); // REVIEW arguments retorna todos os argumentos passados na função
    };

    funcao('Valor', 1, 2, 3);
    */

    /*
    // REVIEW uso de RestOperator (...(Cria um array com o resto dos valores enviados))
function conta(operador, acumulador, ...numeros) { // o Rest sempre deve ser o ultimo parâmetro
  for(let numero of numeros){// NOTE (in retorna os indices e of os valores)
    
    if(operador === "+"){
      acumulador += numero;
    }

    if(operador === "-"){
      acumulador -= numero;
    }
    
    if(operador === "*"){
      acumulador *= numero;
    }

    if(operador === "/"){
      acumulador /= numero;
    }

  };
  console.log(acumulador);
};

conta('-', 0, 20, 30, 40, 50);
 */

 // NOTE arguments não funcionam em arrow functions por isso pode se usar o rest

 const conta = (...args) => {
   console.log(args);
 };

 conta('*', 1, 10, 20, 30);