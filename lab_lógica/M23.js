function corrigir(respostas, gabarito) {
  let acertos = 0;
  const total = gabarito.length;

  for (let i = 0; i < total; i++) {
    if (respostas[i] === gabarito[i]) {
      acertos++;
    }
  }
  const nota = (acertos / total) * 10;

  console.log(`Acertos: ${acertos} de ${total} `);
  console.log(`Nota: ${nota.toFixed(1)}`);

  return acertos;
}

const respostas = ["A", "C", "B", "D", "E"];
const gabarito = ["A", "B", "B", "D", "A"];

corrigir(respostas, gabarito);
