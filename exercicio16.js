/*Armazenar 15 números inteiros em um vetor e 
imprimir uma mensagem contendo o número e uma das mensagens: par ou ímpar*/

let num = [53 , 38 , 130 , 151 , 55 , 21 , 33 , 66 , 73 , 106 , 109 , 304 , 257 , 15 , 29]
console.log(`Todos os valores: [${num}]`)
let numPar = num.filter(pares)
console.log(`Somente os pares: [${numPar}]`)
let numImpar = num.filter(impares)
console.log(`Somente os impares: [${numImpar}]`)

function pares(num){
    return num%2==0
}
function impares(num){
    return num%2!=0
}
