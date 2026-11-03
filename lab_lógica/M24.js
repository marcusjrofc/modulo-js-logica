const entrada = [3, 5, 2, 4, 4, 1, 6];
let n = entrada[0];
let coposQuebrados = 0;

for (let i = 0; i < n; i++) {
  let latas = entrada[1 + i * 2];
  let copos = entrada[2 + i * 2];

  if (latas > copos) {
    coposQuebrados = coposQuebrados + copos;
  }
}
console.log(coposQuebrados);
