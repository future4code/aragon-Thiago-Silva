export type Statement = [
  {
    accountValue: number;
    description: string;
    paymentDate: string
  }
];

export type User = {
  id: number,
  name: string,
  cpf: string,
  birthDate: string,
  balance: number,
  statement: Statement
};

export const users: User[] = [
  {
    id: 1,
    name: "Thiago",
    cpf: "111.111.111-01",
    birthDate: "01/07/1984",
    balance: 3500,
    statement: [
      {
        accountValue: 230,
        description: "conta de luz",
        paymentDate: "02/06/2022",
      }
    ]
  },
  {
    id: 2,
    name: "Lorenzo",
    cpf: "222.222.222-02",
    birthDate: "19/06/2002",
    balance: 2500,
    statement: [
      {
        accountValue: 200,
        description: "rodízio japa",
        paymentDate: "05/06/2022",
      }
    ]
  },

  {
    id: 3,
    name: "Camila",
    cpf: "333.333.333-03",
    birthDate: "29/12/2003",
    balance: 3800,
    statement: [
      {
        accountValue: 129,
        description: "internet",
        paymentDate: "04/06/2022",
      }
    ]
  },

  {
    id: 4,
    name: "Pietro",
    cpf: "444.444.444-04",
    birthDate: "04/04/2004",
    balance: 5000,
    statement: [
      {
        accountValue: 250,
        description: "viagem para Maceió",
        paymentDate: "05/05/2022",
      }
    ]
  },

  {
    id: 5,
    name: "Lavínia",
    cpf: "555.555.555-05",
    birthDate: "05/05/2000",
    balance: 2800,
    statement: [
      {
        accountValue: 1200,
        description: "Parcela Curso Labenu",
        paymentDate: "03/06/2022",
      }
    ]
  },
];
