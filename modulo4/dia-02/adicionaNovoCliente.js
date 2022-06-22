const clients = [
  { id: 1, nome: "Fulano" },
  { id: 2, nome: "Ciclano" },
  { id: 3, nome: "Beltrano" },
  { id: 4, nome: "Fulana" },
];

function addNewClient(client) {
  let index = clients?.findIndex((val) => val.id === client.id);

  if (index < 0) {
    clients.push(client);
  } else {
    return console.log(`Erro. Parâmetro inválido: id ${client.id} já existe.`);
  }
}

addNewClient({ id: 5, nome: "Thiago" });
addNewClient({ id: 6, nome: "Vernizzi" });
addNewClient({ id: 2, nome: "Silva" });
console.log(clients);
