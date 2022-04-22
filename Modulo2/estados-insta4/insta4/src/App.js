import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
// const lista = listaDePessoas.map((pessoa) => {
//     return lista
// })

class App extends React.Component {

  state = {
    nomeInput: "",
    nome2Input: "",
    nome3Input: "",

    listaDePessoas: [
      {
        nome: "Camila",
        fotoUsuario: "https://picsum.photos/200/200?id=1",
        fotoPost: "https://picsum.photos/200/200?id=2"
      },
      {
        nome: "Thiago",
        fotoUsuario: 'https://picsum.photos/200/200?id=3',
        fotoPost: 'https://picsum.photos/200/200?id=4'
      },
      {
        nome: "Lorenzo",
        fotoUsuario: 'https://picsum.photos/200/200?id=5',
        fotoPost: 'https://picsum.photos/200/200?id=6'
      },
    ]
  }
  onChangeIdade = (event) => {
    this.setState({ nomeInput: event.target.value })
  }

  onSubmitForm = (event) => {
    event.preventDefault()

    const novaListaDePessoas = [...this.state.listaDePessoas]
    novaListaDePessoas.push({
      nome: this.state.nomeInput,
      nome2: this.state.nome2Input,
      nome3: this.state.nome3Input,
    })

    this.setState({ listaDepessoas: novaListaDePessoas })
  }
  render() {
    return (

      <MainContainer>
        <form className="form" onSubmit={this.onSubmitForm}>
          <label for="">
            <input
              name="Nome"
              placeholder='Nome'
              value={this.state.nomeInput}
              onChange={this.onChangeNome}
            />
          </label>

          <label>
            <input
              name="fotoUsuario"
              placeholder='fotoUsuario'
              value={this.state.nome2Input}
              onChange={this.onChangeNome}
            />
          </label>
          <label for="">
            <input
              name="fotoPost"
              placeholder='fotoPost'
              value={this.state.nomeInput}
              onChange={this.onChangeNome}
            />
          </label>

          <button>Adicionar</button>
        </form>
       
        {this.state.listaDePessoas.map((pessoa) => {
          console.log(pessoa)
          return <Post
            nomeUsuario={pessoa.nome}
            fotoUsuario={pessoa.fotoUsuario}
            fotoPost={pessoa.fotoPost}
          />
        })}
      </MainContainer>
    );
  }
}


export default App;