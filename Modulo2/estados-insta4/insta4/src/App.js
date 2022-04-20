import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  margin: 20vh;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Thiago'}
          fotoUsuario={'https://picsum.photos/50/51'}
          fotoPost={'https://picsum.photos/200/151'}
        />
        <Post
          nomeUsuario={'William'}
          fotoUsuario={'https://picsum.photos/50/5'}
          fotoPost={'https://picsum.photos/200/152'}
        />
        <Post
          nomeUsuario={'Rodrigo'}
          fotoUsuario={'https://picsum.photos/50/53'}
          fotoPost={'https://picsum.photos/200/153'}
        />
      </MainContainer>
    );
  }
}

export default App;
