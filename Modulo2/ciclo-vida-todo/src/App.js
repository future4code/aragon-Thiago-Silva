import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')}; //perguntar no plantão
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
  state = {
    tarefas: [{
      id: 1651003499787,
      texto: 'fazer exercício',
      completa: false // Indica se a tarefa está completa (true ou false)
    },
    {
      id: 1651003499788, // Explicação abaixo
      texto: 'lavar carro',
      completa: false // Indica se a tarefa está completa (true ou false)
    }],
    inputValue: '',
    filtro: ''
  }

  componentDidUpdate() {
    const novaListaDeTarefasConvertida = JSON.stringify(this.state.tarefas)
    window.localStorage.setItem('Tarefas', novaListaDeTarefasConvertida)
  }

  componentDidMount() {
    let listaDeTarefas = localStorage.getItem('Tarefas')
    listaDeTarefas = JSON.parse(listaDeTarefas)
    if (listaDeTarefas !== null) {
      this.setState({ tarefas: listaDeTarefas })
    }
  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    const novaListaDeTarefas = [novaTarefa, ...this.state.tarefas]
    this.setState({ tarefas: novaListaDeTarefas })

  }

  selectTarefa = (id) => {
    const novaListaDeTarefas = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const alteraTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return alteraTarefa
      } else {
        return tarefa
      }
    })
    this.setState({ tarefas: novaListaDeTarefas })
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
