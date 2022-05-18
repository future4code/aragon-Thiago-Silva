import React from 'react';

class Post extends React.Component {
  state = {
    curtido: false, // Usado para a lógica de like/dislike (true/false).
    numeroCurtidas: 0, // Número de curtidas do post. Varia entre 0 e 1. 
    comentando: false, // Usado para a lógica de abrir ou fechar a caixa de comentário.
    numeroComentarios: 0, // Número de comentários do post.
    comentarios: [], // Responsável por guardar a lista de comentários feitos no post.
    inputValue: "" // Responsável por armazenar temporariamente o comentário digitado pelo usuário.
  };

  // Função que atualiza like/dislike, adicionando 1 ou removendo 1 like.
  onClickCurtida = () => {
    // verifica se a propriedade booleana curtido presente no estado é true ou false
    if (this.state.curtido) {
      // se true, o estado atualiza curtido para o seu inverso e remove 1 like.
      this.setState({ curtido: !this.state.curtido, numeroCurtidas: this.state.numeroCurtidas - 1 });
    } else {
      // se false, o estado atualiza curtido para o seu inverso e adiciona 1 like.
      this.setState({ curtido: !this.state.curtido, numeroCurtidas: this.state.numeroCurtidas + 1 });
    };
  };

  /* Início de comentário multi-linhas
  
    Função que atualiza a propriedade boolean comentando, que promove o efeito de
    estar comentando (exibe campo de comentário) ou estar visualizando os comentários.
    Se comentando for true, exibe campo. Caso contrário, exibe seção de comentários.
  
    Fim de comentário multi-linhas */
  onClickComentario = () => {
    this.setState({ comentando: !this.state.comentando });
  };

  // Função utilizado para armazenar o comentário digitado no input de comentários.
  onChangeComentario = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  /* Início de comentário multi-linhas
  
    Função responsável por confirmar o envio do novo comentário.
    Para o seu funcionamento, é necessário que ele atualize a propriedade
    comentarios (lista de comentários), comentando (false, para retornar aos 
    comentários), numeroComentarios (adicionando 1 ao total de comentários) e
    inputValue (apagando o conteúdo digitado antes do envio).
  
    Fim de comentário multi-linhas */
  enviarComentario = (comentario) => {
    const listaDeComentarios = [...this.state.comentarios, comentario]

    this.setState({
      comentarios: listaDeComentarios,
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
      inputValue: ""
    });
  };

  render() {
    /* Início de comentário multi-linhas
    
      Variável caixaDeComentario - > Armazena condicionalmente duas renderizações 
      distintas:
      Se a propriedade 'comentando' for true, renderiza a lógica de enviar um novo 
      comentário. Se 'comentando' for false, renderiza a lista de comentários,
      mapeando a propriedade 'comentarios'.
    
      Fim de comentário multi-linhas */
    const caixaDeComentario = this.state.comentando ? (
      <>
        <label htmlFor={"comentario"} >Comente: </label>
        <input
          id={"comentario"}
          value={this.state.inputValue}
          onChange={this.onChangeComentario}
        />
        <button onClick={() => { this.enviarComentario(this.state.inputValue) }}>Enviar</button>
      </>
    ) : (
      this.state.comentarios.map((comentario, index) => {
        return (
          <div key={index}>
            <p>{comentario}</p>
          </div>
        )
      })
    );

    return (
      <main>
        <header>
          <figure>
            <img src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
            <span>{this.props.nomeUsuario}</span>
          </figure>
        </header>
        <hr />
        <main>
          <figure>
            <p>{`"Acordar para quem você é requer desapego de quem você imagina ser" (Alan Watts)`}</p>
            <img src={this.props.fotoPost} alt={'Imagem do post'} />
          </figure>
        </main>
        <hr />
        <footer>
          <section>
            <span>Número de curtidas: {this.state.numeroCurtidas}</span>
            {/* Início de comentário multi-linhas
            
              Neste button foi implementando um ternário que verifica o 
              número de curtidas. Se a propriedade 'numeroCurtidas' 
              for 1 (tiver um like), exibimos no botão a descrição "Dislike".
              Caso contrário ('numeroCurtidas' for 0), exibimos a descrição "Like".

            Fim de comentário multi-linhas */}
            <button onClick={this.onClickCurtida}>
              {this.state.numeroCurtidas === 0 ? "Like" : "Dislike"}
            </button>
          </section>
          <section>
            <span>Número de comentários: {this.state.numeroComentarios}</span>
            {/* Início de comentário multi-linhas
            
              Lógica similar ao button descrito acima. Se a propriedade 'comentando'
              for true, exibimos a descrição "Fechar Comentário". Do contrário,
              exibimos "Adicionar comentário".

            Fim de comentário multi-linhas */}
            <button onClick={this.onClickComentario}>
              {this.state.comentando ? "Fechar comentário" : "Adicionar comentário"}
            </button>
            <h4>Comentários</h4>
            {caixaDeComentario}
          </section>
        </footer>
      </main>
    );
  };
};

export default Post;