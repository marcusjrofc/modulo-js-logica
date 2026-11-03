const times = [
  { nome: "Tubarões", v: 3, e: 1, d: 1 },
  { nome: "Leões", v: 2, e: 4, d: 0 },
  { nome: "Gaviões", v: 1, e: 1, d: 3 },
];

let nomeLider = "";
let pontosLider = -1;
let vitoriasLider = -1;

for (let i = 0; i < times.length; i++) {
  let pontosAtuais = times[i].v * 3 + times[i].e * 1 + times[i].d * 0;
  console.log(times[i].nome, ":", pontosAtuais);

  if(pontosAtuais>pontosLider || (pontosAtuais === pontosLider && times[i].v > vitoriasLider )){
    nomeLider = times[i].nome;
    pontosLider = pontosAtuais;
    vitoriasLider = times[i].v;
  }
}
console.log('Líder:',nomeLider)
