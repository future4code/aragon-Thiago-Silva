import { format } from 'date-fns';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalStateContext from "../global/GlobalStateContext";
import { requestChangePostVote, requestCreatePostVote, requestDeletePostVote } from '../services/requests';
import { goToPostDetailsPage } from '../routes/coordinator';

function PostCard(props) {
    const navigate = useNavigate();

    const { setters, getters } = useContext(GlobalStateContext);

    const [isDownVoted, setIsDownVoted] = useState(false);

    const [isUpVoted, setIsUpVoted] = useState(false);

    const { setPost } = setters;

    const { getPosts } = getters;

    const { id, userId, title, body,
        createdAt, voteSum, commentCount, userVote } = props.post;

    const date = createdAt && format(new Date(createdAt), "dd/MM/yyyy");

    useEffect(() => {
        if (userVote) {
            userVote === 1 ? setIsUpVoted(true) : setIsDownVoted(true);
        };
    }, [userVote]);

    const goToComments = () => {
        setPost(props.post);
        goToPostDetailsPage(navigate, id);
    };

    const chooseVote = (typeVote) => {
        if (typeVote === "up") {
            if (isDownVoted) {
                requestChangePostVote(id, 1, getPosts);
                setIsUpVoted(true);
                setIsDownVoted(false);
            } else {
                requestCreatePostVote(id, 1, getPosts);
                setIsUpVoted(true);
            };
        } else {
            if (isUpVoted) {
                requestChangePostVote(id, -1, getPosts);
                setIsDownVoted(true);
                setIsUpVoted(false);
            } else {
                requestCreatePostVote(id, -1, getPosts);
                setIsDownVoted(true);
            };
        };
    };

    const removeVote = (typeVote) => {
        requestDeletePostVote(id, getPosts);
        typeVote === "up" ? setIsUpVoted(false) : setIsDownVoted(false);
    };

    const showVoteButtons = props.isFeed && (
        <>
            {userVote && isDownVoted ?
                <button onClick={() => removeVote("down")}>Remover voto "Não Gostei"</button>
                : <button onClick={() => chooseVote("down")}>
                    {isUpVoted ? `Mudar voto para "Não Gostei"` : `Votar em "Não Gostei"`}
                </button>
            }
            <br />
            {userVote && isUpVoted ?
                <button onClick={() => removeVote("up")}>Remover voto "Gostei"</button>
                : <button onClick={() => chooseVote("up")}>
                    {isDownVoted ? `Mudar voto para "Gostei"` : `Votar em "Gostei"`}
                </button>
            }
        </>
    );

    return (
        <article>
            <h3>{title}</h3>
            <span><b>Autor: </b>{userId}</span>
            <p>Criado em {date}</p>
            <img src={"https://picsum.photos/200/300?random=" + id} alt="Imagem aleatória do post" />
            <p><b>Descrição: </b>{body}</p>
            <p>Votos: {voteSum ? voteSum : 0}</p>
            {showVoteButtons}
            <p>Comentários: {commentCount ? commentCount : 0}</p>
            {props.isFeed && <button onClick={goToComments}>Ver comentários</button>}
            <hr />
        </article>
    );
};

export default PostCard;