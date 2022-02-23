/*Ler vários números e informar quantos números entre 100 e 200 foram digitados. 
Se o valor 0 for lido encerrar a execução*/ 

var readline = require('readline-sync')
var totalNum = 0
var n
    for (i=1;i<=5;i++){
        
        while (n!=0){ 
            n  = readline.question(`Digite o ${i} numero: `)
            if(n>=100 && n<=200) {
                totalNum ++
            } else{} 
        }   
    }
    console.log (`O total de números entre 100 e 200 é ${totalNum}`)