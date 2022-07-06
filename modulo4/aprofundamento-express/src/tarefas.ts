export type Tarefas = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export const tarefas: Tarefas[] = [
    {
      userId: 1,
      id: 1,
      title: "comprar material para o escritório",
      completed: true
    },
    {
      userId: 1,
      id: 2,
      title: "atualizar a planilha",
      completed: false
    },
    {
    userId: 2,
    id: 44,
    title: "mandar email",
    completed: false
  },
  {
    userId: 2,
    id: 22,
    title: "fazer a entrevista",
    completed: true
  },
  {
    userId: 3,
    id: 43,
    title: "agendar a reunião",
    completed: true
  },
  {
    userId: 3,
    id: 44,
    title: "mandar email",
    completed: true
  }
]