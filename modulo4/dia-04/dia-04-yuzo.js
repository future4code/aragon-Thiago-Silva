const primeiraLista = [
  {
    nome: "Banana",
  },
  {
    nome: "Laranja",
  },
];

const segundaLista = [
  {
    nome: "Laranja",
  },
  {
    nome: "Cebola",
  },
];

const geraItensUnicos = (arr1, arr2) => {
  const terceiraLista = arr1.concat(arr2);
  let itensUnicos = [];

  for (itemConcat of terceiraLista) {
    let itemResultado = itensUnicos.find((item) => item.nome === itemConcat.nome);

    if (!itemResultado) {
      itensUnicos.push(itemConcat);
    }
  }
  return itensUnicos;
};

console.log(geraItensUnicos(primeiraLista, segundaLista));
