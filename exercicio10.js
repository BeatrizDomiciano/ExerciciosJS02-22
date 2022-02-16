var readline = require('readline-sync')


var somaPositivo = 0
var negativos= 0  


for (i=1;i<=5;i++){
    n  = readline.question(`Digite o ${i} numero: `)
    numeros = n
    if(n>0){
        somaPositivo += n 
    } else{
        negativos ++
    }
}
console.log (`Soma dos positivos: ${somaPositivo}`)
console.log (`Total de número negtivos: ${negativos}`)