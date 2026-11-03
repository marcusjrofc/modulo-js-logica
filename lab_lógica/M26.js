const entrada = [12, 45, 7, 0];
let maior = 0;
let i = 0;

while (entrada[i] !== 0) {
  if (entrada[i] > maior) {
    maior = entrada[i];
  }
  i++;
}
console.log(maior);
