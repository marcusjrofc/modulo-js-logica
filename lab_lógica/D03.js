const dias = [1, 1, 0, 1, 1, 1, 0, 1];
let sequenciaAtual = 0;
let recordeMaximo = 0;

for (let i = 0; i < dias.length; i++) {
  if (dias[i] === 1) {
    sequenciaAtual++;
    if (sequenciaAtual > recordeMaximo) {
      recordeMaximo = sequenciaAtual;
    }
  } else {
    sequenciaAtual = 0;
  }
}
console.log("Maior sequência: " + recordeMaximo);
