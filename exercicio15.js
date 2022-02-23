/*15. Na usina de Angra dos Reis, os técnicos analisam a perda de massa de um material radioativo. 
Sabendo-se que este perde 25% de sua massa a cada 30 segundos, 
criar um algoritmos que imprima o tempo necessário para que a massa desse material seja menor que 0.10*/

var readline = require('readline-sync')

var massa, 

massa = readline.question(`Digite o valor da massa do material radioativo: `)
var p = 0.75
var temp =  30
while (massa > 0.10){
    massa = massa * p
    temp += 30
} 
console.log (`O tempo necessário para que a massa desse material seja menor que 0.10 é de: ${temp} segundos`)
