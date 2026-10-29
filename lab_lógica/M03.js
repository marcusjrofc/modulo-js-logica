const prompt = require("prompt-sync")();
let v = parseFloat(prompt('digite o valor da compra:'))

if(v > 0 <= 100000){
    if(v >= 100 && v <=300){
        let desconto = v * 0.10
        let total = v - desconto
        console.log(total)
    }
 if(v > 300){
    desconto = v * 0.15
    total = v - desconto
    console.log(total)
 }   
}else {
    console.log('digite número maior que 0 e menor que 100 mil!!')
}