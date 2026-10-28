/* let aluno1 = "Ana", nota1 = 8;
if (nota1 >= 6) {
    console.log(aluno1 + " - Aprovado");
} else {
    console.log(aluno1 + " - Em recuperação");
}
let aluno2 = "Bruno", nota2 = 5;
if (nota2 >= 6) {
    console.log(aluno2 + " - Aprovado");
} else {
    console.log(aluno2 + " - Em recuperação");
}
let aluno3 = "Carlos", nota3 = 7;
if (nota3 >= 6) {
    console.log(aluno3 + " - Aprovado");
} else {
    console.log(aluno3 + " - Em recuperação");
}
let aluno4 = "Daniela", nota4 = 4;
if (nota4 >= 6) {
    console.log(aluno4 + " - Aprovado");
} else {
    console.log(aluno4 + " - Em recuperação");
}
let aluno5 = "Eduardo", nota5 = 9;
if (nota5 >= 6) {
    console.log(aluno5 + " - Aprovado");
} else {
    console.log(aluno5 + " - Em recuperação");
}
let aluno6 = "Fernanda", nota6 = 5.5;
if (nota6 >= 6) {
    console.log(aluno6 + " - Aprovado");
} else {
    console.log(aluno6 + " - Em recuperação");
} */

const nomes = ['Ana', 'Bruno', 'Carlos', 'Daniela', 'Eduardo', 'Fernanda']
const media = [9, 8, 6, 4, 3, 10]

for (let i = 0; i < 6; i++) {
    if(media[i] >= 7){
        console.log(nomes[i]+' aprovado(a)')
    }else{
        console.log(nomes[i]+' reprovado(a)')
    }
}