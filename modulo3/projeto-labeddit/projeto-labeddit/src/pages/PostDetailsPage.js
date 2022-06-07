import Header from "../components/Header";
import useProtectedPage from "../hooks/useProtectedPage";

function PostDetailsPage() {
    
  useProtectedPage();

  return (
    <main>
      <Header isProtected={true} />
      <hr />
      <section>
        <h2>Informações do Post</h2>
      </section>
      <hr />
      <section>
        <h2>Escreva seu comentário</h2>
      </section>
      <hr />
      <section>
        <h2>Lista de Comentários</h2>
      </section>
    </main>
  );
}

export default PostDetailsPage;
