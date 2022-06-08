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

    const { states, getters } = useContext(GlobalStateContext);

    const { posts } = states;

    const { getPosts } = getters;

    useEffect(() => {
        getPosts();
    }, [getPosts]);

    const createPost = (event) => {
        event.preventDefault();
        requestCreatePost(form, clear, getPosts);
    }

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
                {showPosts}
            </section>
        </main>
    );
};

export default FeedPage;