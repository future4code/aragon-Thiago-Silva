import { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import PostCard from '../components/PostCard';
import CommentCard from '../components/CommentCard';
import GlobalStateContext from "../global/GlobalStateContext";
import useProtectedPage from '../hooks/useProtectedPage';
import useForm from '../hooks/useForm';
import { requestCreateComment } from '../services/requests';
import { goToFeedPage } from '../routes/coordinator';

function PostDetailsPage() {

    useProtectedPage();

    const navigate = useNavigate();

    const params = useParams();

    const { form, onChange, clear } = useForm({ body: "" });

    const { states, getters } = useContext(GlobalStateContext);

    const { post, postComments } = states;

    const { getPostComments } = getters;

    useEffect(() => {
        
        if (post.id && post.id === params.postId) {
            getPostComments(post.id);
        } else {
            console.log("olá")
            alert("Um erro ocorreu! Você será redirecionado para Feed.")
            goToFeedPage(navigate);
        }
    }, []);

    const createComment = (event) => {
        event.preventDefault();
        requestCreateComment(form, clear, getPostComments, post.id);
    };

    const showComments = postComments.length ? postComments.map((comment) => {
        return (
            <CommentCard
                key={comment.id}
                comment={comment}
            />
        )
    }) : <p>Não há comentários para este post. Seja a primeira pessoa a comentar!</p>

    return (
        <main>
            <Header
                isProtected={true}
            />
            <hr />
            <button onClick={() => navigate(-1)}>Voltar</button>
            <section>
                <h2>Informações do Post</h2>
                <PostCard
                    key={post.id}
                    post={post}
                    isFeed={false}
                />
            </section>
            <section>
                <h2>Escreva seu comentário</h2>
                <form onSubmit={createComment}>
                    <label htmlFor={"body"}> Comentário: </label>
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
                <h2>Lista de Comentários</h2>
                {showComments}
            </section>
        </main>
    );
};

export default PostDetailsPage;
