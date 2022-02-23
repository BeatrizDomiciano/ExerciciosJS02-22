/*Chico tem 1,50m e cresce 2 centímetros por ano, 
enquanto Juca tem 1,10m e cresce 3 centímetros por ano. 
Construir um algoritmos que calcule e imprima quantos anos serão necessários para que Juca seja maior que Chico*/

let ch = 150
let ju = 110
var ano = 0
console.log("Chico tem 1,50m e cresce 2 centímetros por ano, enquanto Juca tem 1,10m e cresce 3 centímetros por ano.")
console.log("")
console.log("Quantos anos serão necessários para que Juca seja maior que Chico?")
while (ju<=ch){
    ano ++
    ch += 2
    ju += 3 
}
console.log("")
console.log (`A quantidade de anos que irá demorar para que Juca seja maior que Chico é de: ${ano} anos`)
