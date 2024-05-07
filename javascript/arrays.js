let arr = [1,2,5,10];
let nomes = ["Emerson","Souza"];
let bool = [false,true,false];
let mix = [1, "Pedro", true]



console.log(arr);
console.log(nomes[1].toUpperCase());
console.log(bool);
console.log(mix[mix.length - 1]);
console.log()

let pessoa = {
nome: "Emerson Souza",
profissao: "Pizzaiolo",
idade:26,

falar : function(){
    
    console.log(`Olá Bom dia, me chamo ${pessoa.nome} sou ${pessoa.profissao}, e tenho ${pessoa.idade} anos e meu telefone para contato é:${pessoa.telefone}!`);
}

}
console.log(pessoa)

console.log(pessoa.nome)




let pessoa1 = { 
    nome:`Emerson`,
    telefone:" (71)98505-3855 "

}

console.log(pessoa1);
delete pessoa1.nome;
pessoa1.casado = false;
Object.assign(pessoa, pessoa1)
console.log(pessoa);
pessoa.falar();



let nomes1 = ["Emerson", "Pedro","Paulo","Gustavo","João"];

for(let i = 0; i <= nomes1.length -1; i++){
    
    console.log(nomes1[i]);

}
console.log("\n");
let nomeRemovido = nomes1.pop();

console.log(nomeRemovido);
console.log(nomes1);

nomes1.push("Claudio");


console.log(nomes1)

function imprimirNumeros(...args){
    for(let i = 0; i < args.length; i++){
console.log(args[i])

    }

}
imprimirNumeros(1,2,43,543,24,4,43,4,3423,"sUA MÃE")



let pessoa2 = {
nome: "Emerson",
idade: 26,
profissao:"Pizzaiolo",
hobbies: ["Musica","Filmes", "Series"]

}
console.log(pessoa2)
let pessoaTexto = JSON.stringify(pessoa2);
console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);
console.log(pessoaJSON.hobbies[1])
console.log(pessoaJSON);
