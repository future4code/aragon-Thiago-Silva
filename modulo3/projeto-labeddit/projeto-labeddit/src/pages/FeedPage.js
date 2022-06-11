import { useContext, useEffect } from "react";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import GlobalStateContext from "../global/GlobalStateContext";
import useProtectedPage from "../hooks/useProtectedPage";
import useForm from "../hooks/useForm";
import { requestCreatePost } from '../services/requests';

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

    const showPosts = posts.length && posts.map((post) => {
        return (
            <PostCard
                key={post.id}
                post={post}
                isFeed={true}
            />
        )
    })

    return (
        <main>

            <Header
                isProtected={true}
            />
            <hr />
            <section>
                <h2>Crie um novo Post</h2>
                <form onSubmit={createPost}>
                    <label htmlFor={"title"}> Título: </label>
                    <input
                        id={"title"}
                        name={"title"}
                        value={form.title}
                        onChange={onChange}
                        pattern={"^.{5,}$"}
                        title={"O nome deve ter no mínimo 5 caracteres"}
                        required
                    />
                    <br />
                    <label htmlFor={"body"}> Texto do post: </label>
                    <input
                        id={"body"}
                        type={"text"}
                        name={"body"}
                        value={form.body}
                        onChange={onChange}
                        pattern={"^.{5,}$"}
                        title={"O nome deve ter no mínimo 5 caracteres"}
                        required
                    />
                    <br />
                    <button type={"submit"}>Criar Post</button>
                </form>
            </section>
            <hr />
            <section>
                <h2>Lista de Posts</h2>
                <nav>
                    <h2>Selecione uma página</h2>
                    {page !== 1 &&
                        <button onClick={() => changePage(-1)}>Voltar página</button>
                    }
                    <span> Página {page} </span>
                    {posts.length &&
                        <button onClick={() => changePage(1)}>Próxima página</button>
                    }
                </nav>
                <hr />
                {isLoading ? <p>CARREGANDO...</p> : showPosts}
            </section>
        </main>
    );
};

export default FeedPage;