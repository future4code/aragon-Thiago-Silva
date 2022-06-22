import Post from './components/Post';

function App() {
  return (
    <>
      <h1>POST</h1>
      <Post
        nomeUsuario={'Lorenzo'}
        fotoUsuario={'https://picsum.photos/50/50'}
        fotoPost={'https://picsum.photos/200/150'}
      />  
    </>
  );
};

export default App;
