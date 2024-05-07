
/* Questão 1 */
console.log("Questão 1 \n \n")

function HelloWorld(){

console.log("HelloWorld")

}

HelloWorld();

/* Questão  2 */
console.log("\nQuestão 2 \n \n")
const idade = function(){

let idade = 16;

console.log(`Você tem ${idade} anos!`);



}
idade();

/* Questão 3*/
console.log("\nQuestão 3 \n \n")
const calculo = function(num1,num2){

    console.log("\nnumeros :",num1,num2)
    console.log("A Soma dos Numeros é :", num1 + num2)


}

calculo(8,6);

/* Questão 4*/

console.log("\nQuestão 4 \n ")
function numAleatorio(){

let num = parseInt(Math.random() * 100);  

console.log(num);


}

numAleatorio();
/*Questão 5 */
console.log("\nQuestão 5\n ")
function dados(idade){

if (idade >= 18) {
console.log("Você pode entrar na Auto Escola;")
}else{
console.log("Você não pode Entrar na escola tem menos de 18 anos;")

}

}

dados(16);

/*Questão 6 */
console.log("\nQuestão 6 \n ")
function verificacao(nome,idade,verdadeiro){

console.log(typeof(nome))
console.log(typeof(idade))
console.log(typeof(verdadeiro))

}

verificacao("Emerson",15, true)





/* Questão 7*/
console.log("\nQuestão 7 \n ")
function numNegativo(idade){

console.log(Math.abs(idade))

}

numNegativo(-5);

/*Questão 8*/

console.log("\nQuestão 8 \n ")

function size(){
let str = "Senai";
let n = str.length;
console.log(`A String é ${str} ela póssui ${n} Caracteres!`);
}

size();
 
//Questão 9
console.log("\nQuestão 9\n ")

function potenciacao(num1,num2){

console.log(`${num1} elevado a ${num2} é = ${num1 ** num2}`);

}

potenciacao(3,2)

// Questão 10
console.log("\nQuestão 10 \n ")

function laco(){
i = 10;

for (i == 0; i-- ;){

    if(i % 2 == 0){
        console.log(i)
    }

}

}

laco();

