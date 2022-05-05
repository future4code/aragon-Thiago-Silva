import React from "react";
import TelaCadastro from "./components/TelaCadastro";
import TelaListaUsuarios from "./components/TelaListaUsuarios";

export default class App extends React.Component() {
  state = {
    // telaAtual: "cadastro"
  }

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <TelaCadastro />
      case "lista":
        return <TelaListaUsuarios />    
      default:
        return <div>Erro! Página não encontrada :(</div>
    }
  }
  render() {
    return (
      <div>
        {this.escolheTela}
      </div>
    );
  }
}
