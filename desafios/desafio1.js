var variavel1 = '1';
// console.log(variavel1);

var variavel2 = '5';
// console.log(variavel2);

var resultado = 'x';
// console.log(resultado);

let num1 = Number(5);
let num2 = Number(1);


let soma = num1+num2;
let sub = num1-num2;
let mult = num1*num2;
let div = num1/num2;

function fatorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * fatorial(num - 1);
    }
  }

console.log("Resultado da soma entre", num1, "e", num2, "é", soma);
console.log("Resultado da subtração entre", num1, "e", num2, "é", sub);
console.log("Resultado da multiplicação entre", num1, "e", num2, "é", mult);
console.log("Resultado da divisão entre", num1, "e", num2, "é", div);
console.log("Resultado de 5! é" , fatorial(5));