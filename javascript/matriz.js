let nomes =  ["Sued", "Emerson"]
let notas = Array(2,3)

for(let i = 0; i < 2; i++){

    for(let j = 0; j < 3; j++){
        let nota = parseInt(prompt(`Digite sua ${j+1} nota de `));
       
        notas(i)(j) += nota
    }
}

for(let i = 0; i < nomes.length; i++){
    console.log(`Nome: ` + nomes[i]) 

    for(let j = 0; j < notas.length; j++){
        console.log(`Nota ${j + 1}: ${notas(i),(j)}`)
        
    }
}


