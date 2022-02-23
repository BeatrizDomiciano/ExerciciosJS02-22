/*12. Criar um algoritmo que entre com uma palavra e imprima conforme o exemplo
        Palavra: sonho
            SONHO
            SONHO SONHO
            SONHO SONHO SONHO
            SONHO SONHO SONHO SONHO*/
            
var readline = require('readline-sync')

var y
let pal = ""


palavra = readline.question(`Digite uma palavra `)

tam = palavra.length

for (x=1; x <= tam;){
    x++
}

y <= x

for (y=1;y<x;y++){
    pal += palavra + (" ");
    console.log(pal)
    
}

