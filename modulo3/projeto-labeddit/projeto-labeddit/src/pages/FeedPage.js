import { useContext, useEffect } from "react";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import GlobalStateContext from "../global/GlobalStateContext";
import useProtectedPage from "../hooks/useProtectedPage";
import useForm from "../hooks/useForm";
import { requestCreatePost } from "../services/requests";
import { FeedPageStyle } from "./FeedPageStyle";
import { goToFeedPage } from "../routes/coordinator";

function FeedPage() {
  useProtectedPage();

  const { form, onChange, clear } = useForm({ title: "", body: "" });

  const { states, setters, getters } = useContext(GlobalStateContext);

  const { posts, page, isLoading } = states;

  const { setPage } = setters;

  const { getPosts } = getters;

  useEffect(() => {
    getPosts(page);
  }, []);

  const createPost = (event) => {
    event.preventDefault();
    requestCreatePost(form, clear, getPosts);
  };

  const changePage = (sum) => {
    const nextPage = page + sum;

    setPage(nextPage);
    getPosts(nextPage);
  };

  const showPosts =
    posts.length &&
    posts.map((post) => {
      return <PostCard key={post.id} post={post} isFeed={true} />;
    });

  return (
    <FeedPageStyle>
      <Header isProtected={true} />
      <section className="container__newpost">
        <form onSubmit={createPost}>
          <label htmlFor={"title"}>Novo Post: </label>
          <input
            className="input__post_title"
            id={"title"}
            placeholder="Digite o título..."
            name={"title"}
            value={form.title}
            onChange={onChange}
            pattern={"^.{5,}$"}
            title={"O nome deve ter no mínimo 5 caracteres"}
            required
          />
          <label htmlFor={"body"}> </label>
          <input
            className="input__post_msg"
            id={"body"}
            placeholder="Digite a mensagem..."
            type={"text"}
            name={"body"}
            value={form.body}
            onChange={onChange}
            pattern={"^.{5,}$"}
            title={"O nome deve ter no mínimo 5 caracteres"}
            required
          />
          <button className="btn__publicar" type={"submit"}>
            Publicar
          </button>
        </form>
      </section>

      <section>
        <nav className="container__pagination">
          {page !== 1 && (
            <button className="btn__pagination" onClick={() => changePage(-1)}>Voltar</button>
          )}
          <span> Página {page} </span>
          {posts.length && (
            <button className="btn__pagination" onClick={() => changePage(1)}>Próximo</button>
          )}
          {page >2 && (
            <button className="btn__pagination" onClick={() => changePage(-page+1)}>Início</button>
          )}
        </nav>
        {isLoading ? (
          <div class="container__loader">
          <span class="loader"></span>
        </div>
        ) : (
          showPosts
        )}
        <nav className="container__pagination">
          {page !== 1 && (
            <button className="btn__pagination" onClick={() => changePage(-1)}>Voltar</button>
          )}
          <span> Página {page} </span>
          {posts?.length && (
            <button className="btn__pagination" onClick={() => changePage(1)}>Próximo</button>
          )}
          {page >2 && (
            <button className="btn__pagination" onClick={() => changePage(-page+1)}>Início</button>
          )}
        </nav>
      </section>
    </FeedPageStyle>
  );
}

export default FeedPage;
