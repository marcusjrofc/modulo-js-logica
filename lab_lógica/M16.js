const carrinho = [
  { produto: "Arroz 5 kg", preco: 27.9, qtd: 2 },
  { produto: "Feijão 1 kg", preco: 8.49, qtd: 3 },
  { produto: "Café 500 g", preco: 18.5, qtd: 1 },
];
let total = 0;
let itens = 0;

for (let i = 0; i < carrinho.length; i++) {
  itens += carrinho[i].qtd;
  total += carrinho[i].preco * carrinho[i].qtd;
  console.log(
    carrinho[i].produto,
    "x R$",
    carrinho[i].qtd,
    "= R$",
    carrinho[i].preco * carrinho[i].qtd,
  );
}
console.log("Itens:", itens);
console.log("Total: R$", total);
