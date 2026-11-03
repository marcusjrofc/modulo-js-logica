const temperaturas = [30, 32, 28, 31, 29, 33, 27];
let soma = 0;

for (let temp of temperaturas) {
  soma+= temp
}
const media = soma / temperaturas.length
const maior = Math.max(...temperaturas)
let dias_acima = 0;
for(let temp of temperaturas){
    if(temp>media){
        dias_acima++
    }
}
console.log('Média:',media.toFixed(1),'\nMaior:',maior,'\nDias acima:',dias_acima)