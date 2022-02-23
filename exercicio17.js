/*Criar um vetor com 20 elementos inteiros. 
Imprimir o maior e o menor, sem ordenar, o percentual de números pares e média dos elementos do vetor */

let num = [8 ,9 , 215, 21, 20, 15, 341, 58, 30, 35, 31, 62, 12, 629, 265,2 ,25,654, 89,626]
var maior= 0 
var menor = num[0]
var perc, media, soma = 0
//maior e menor
for(i=0; i<20; i++){
    if(num[i]>maior){
        maior = num[i]
    } 
    if(num[i] < menor){
        menor = num[i]
    }
}

//numeros pares
let numPar = num.filter(pares)
function pares(num){
    return num%2==0
}
perc = (numPar.length/20)*100
//média
for(i=0; i<20; i++){
    soma = num[i] + soma
}
media = soma / 20
//resultados
    console.log (`O maior número é; ${maior}`)
    console.log (`O menor número é; ${menor}`)
    console.log (`A porcentagem de números pares é: ${perc}%`)
    console.log (`A média dos números é: ${media}`)
    
