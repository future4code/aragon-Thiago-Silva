//Mostrar apenas o objeto com valor repetido

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

const geraItensDuplicados = (arr1, arr2) => {
  const terceiraLista = arr1.concat(arr2);
  let itensDuplicados = [];

  terceiraLista.forEach(item => {
      if (terceiraLista.filter(i => i.nome === item.nome).length > 1) {
          if (!itensDuplicados.find(i => i.nome === item.nome))itensDuplicados.push(item);
      }
  });
  return itensDuplicados;
};

console.log(geraItensDuplicados(primeiraLista, segundaLista));