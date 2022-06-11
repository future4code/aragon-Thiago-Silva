import { format } from "date-fns";
import { useContext, useEffect, useState } from "react";
import GlobalStateContext from "../global/GlobalStateContext";
import {
  requestChangeCommentVote,
  requestCreateCommentVote,
  requestDeleteCommentVote,
} from "../services/requests";

function CommentCard(props) {
  const { getters } = useContext(GlobalStateContext);

  const [isDownVoted, setIsDownVoted] = useState(false);

  const [isUpVoted, setIsUpVoted] = useState(false);

  const { getPostComments } = getters;

  const { id, userId, postId, body, createdAt, voteSum, userVote } =
    props.comment;

  const date = createdAt && format(new Date(createdAt), "dd/MM/yyyy");

  useEffect(() => {
    if (userVote) {
      userVote === 1 ? setIsUpVoted(true) : setIsDownVoted(true);
    }
  }, [userVote]);

  const chooseVote = (typeVote) => {
    if (typeVote === "up") {
      if (isDownVoted) {
        requestChangeCommentVote(id, 1, getPostComments, postId);

        setIsUpVoted(true);
        setIsDownVoted(false);
      } else {
        requestCreateCommentVote(id, 1, getPostComments, postId);
        setIsUpVoted(true);
      }
    } else {
      if (isUpVoted) {
        requestChangeCommentVote(id, -1, getPostComments, postId);

        setIsDownVoted(true);
        setIsUpVoted(false);
      } else {
        requestCreateCommentVote(id, -1, getPostComments, postId);
        setIsDownVoted(true);
      }
    }
  };

  const removeVote = (typeVote) => {
    requestDeleteCommentVote(id, getPostComments, postId);
    typeVote === "up" ? setIsUpVoted(false) : setIsDownVoted(false);
  };

  const showVoteButtons = (
    <>
      {userVote && isDownVoted ? (
        <button onClick={() => removeVote("down")}>
          Remover voto "Não Gostei"
        </button>
      ) : (
        <button onClick={() => chooseVote("down")}>
          {isUpVoted ? `Mudar voto para "Não Gostei"` : `Votar em "Não Gostei"`}
        </button>
      )}
      <br />
      {userVote && isUpVoted ? (
        <button onClick={() => removeVote("up")}>Remover voto "Gostei"</button>
      ) : (
        <button onClick={() => chooseVote("up")}>
          {isDownVoted ? `Mudar voto para "Gostei"` : `Votar em "Gostei"`}
        </button>
      )}
    </>
  );

  return (
    <article>
      <h3>{body}</h3>
      <span>
        <b>Autor: </b>
        {userId}
      </span>
      <p>Criado em {date}</p>
      <p>Votos: {voteSum ? voteSum : 0}</p>
      {showVoteButtons}
      <hr />
    </article>
  );
}

export default CommentCard;