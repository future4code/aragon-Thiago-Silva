import { format } from 'date-fns';

function CommentCard(props) {
   
    const { userId, body, createdAt, voteSum } = props.comment;

    const date = createdAt && format(new Date(createdAt), "dd/MM/yyyy");

    return (
        <article>
            <h3>{body}</h3>
            <span><b>Autor: </b>{userId}</span>
            <p>Criado em {date}</p>

            <p>Votos: {voteSum ? voteSum : 0}</p>
            <button>Votar em "Não Gostei"</button>
            <br />
            <button>Votar em "Gostei"</button>
            <hr />
        </article>
    );
};

export default CommentCard;