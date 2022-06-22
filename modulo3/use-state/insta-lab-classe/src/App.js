import React from 'react';
import Post from './components/Post';

// Classe App -> Renderiza todo o fluxo de React
class App extends React.Component {
  render() {
    return (
      <>
        <h1>Post</h1>
        {/* Início de comentário multi-linhas
        
          Componente Post -> Renderiza os conteúdos de um post.
          Recebe 3 props:
          nomeUsuario -> valor fixado 'Usuário';
          fotoUsuario -> endereço de site que gera fotos aleatórias com formato definido;
          fotoPost -> mesma coisa que fotoUsuario

          Observação: site de geração de fotos aleatórias: https://picsum.photos
          Para definir um tamanho de foto, inserir width(largura) e height(altura)
          no endereço, da seguinte forma: https://picsum.photos/width/height
        
        Fim de comentário multi-linhas */}
        <Post
          nomeUsuario={'Usuário'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
      </>
    );
  };
};

export default App;
