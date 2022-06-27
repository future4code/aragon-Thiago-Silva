const listaDeTarefas = ["lavar a louça"]

function addTarefas (tarefa) {
    tarefa = process.argv[2]

    listaDeTarefas.push(tarefa)
    
    return `Sua tarefa foi adicionada com sucesso! Tarefas: ${listaDeTarefas}`
}

console.log(addTarefas())