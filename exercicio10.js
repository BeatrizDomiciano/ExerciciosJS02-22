/* 10. Entrar com 20 números e imprimir a soma dos positivos e o total de números negativos*/

var readline = require('readline-sync')


var somaPositivo = 0 
var negativos= 0 
let n = 0


for (i=1;i<=5;i++){
    numeros  = readline.question(`Digite o ${i} numero: `)
    n = numeros
    if(n>0){
        somaPositivo += numeros 
    } else{
        negativos ++
    }
}
console.log (`Soma dos positivos: ${somaPositivo}`)
console.log (`Total de número negtivos: ${negativos}`)