// Exercício 1: Declare duas variáveis chamadas "idade" e "peso", atribua
// valores a elas e imprima os valores na console.

let idade = 25;
let peso = 70;

console.log("Idade: ", idade);
console.log("peso: ", peso);
//Agora, se eu quisesse perguntar para o usuário a idade e o peso, eu poderia fazer assim:
// idade = prompt("Qual a sua idade?");
// peso = prompt("Qual o seu peso?");




// Exercício 2: Declare uma constante chamada "PI", atribua o valor de Pi a
// ela e imprima o valor na console.

const PI = 3.14159;
console.log("PI: ", PI);


// Exercício 3: Declare uma variável chamada "númeroMáximo", atribua a ela
// o valor máximo que um número pode ter em JavaScript e imprima o valor
// na console.

let númeroMáximo = Number.MAX_VALUE;
console.log("Número Máximo: ", númeroMáximo);


// Exercício 4: Declare duas variáveis chamadas "nome" e "sobrenome",
// atribua o seu nome e sobrenome a elas. Concatene-as em uma terceira
// variável chamada "nomeCompleto" e imprima.

let nome = "João";
let sobrenome = "Silva";
let nomeCompleto = nome + " " + sobrenome; //O espaço entre aspas é para separar o nome do sobrenome
console.log("Nome Completo: ", nomeCompleto);

//Caso eu quisesse perguntar o nome e sobrenome para o usuário, eu poderia fazer assim:
//nome = prompt("Qual é o seu nome?");
//sobrenome = prompt("Qual é o seu sobrenome?");
//nomeCompleto = nome + " " + sobrenome;
//console.log("Nome Completo: ", nomeCompleto);





// Exercício 5: Declare duas variáveis e atribua valores numéricos a elas. Use
// o operador de adição para realizar operações entre as duas variáveis.
// Imprima o resultado.

let num1 = 10;
let num2 = 20;
let soma = num1 + num2;
console.log("Soma: ",soma);

//Caso eu quisesse perguntar os números para o usuário, eu poderia fazer assim:
let num1 = prompt("Digite um número:");
let num2 = prompt("Digite outro número:");
//O prompt retorna uma string, então precisamos converter para número
let soma = Number(num1) + Number(num2);
console.log("Soma: ", soma);


