import { format } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../global/GlobalStateContext";
import {
  requestChangePostVote,
  requestCreatePostVote,
  requestDeletePostVote,
} from "../services/requests";
import { goToPostDetailsPage } from "../routes/coordinator";
import { PostCardStyle } from "./PostCardStyle";
import dislike from "../assets/dislike.png";
import like from "../assets/like.png";

function PostCard(props) {
  const navigate = useNavigate();

  const { setters, getters } = useContext(GlobalStateContext);

  const [isDownVoted, setIsDownVoted] = useState(false);

  const [isUpVoted, setIsUpVoted] = useState(false);

  const { setPost } = setters;

  const { getPosts } = getters;

  const {
    id,
    title,
    body,
    createdAt,
    voteSum,
    commentCount,
    userVote,
    username,
  } = props.post;

  console.log(props.post);

  const date = createdAt && format(new Date(createdAt), "dd/MM/yyyy");

  useEffect(() => {
    if (userVote) {
      userVote === 1 ? setIsUpVoted(true) : setIsDownVoted(true);
    }
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
      }
    } else {
      if (isUpVoted) {
        requestChangePostVote(id, -1, getPosts);
        setIsDownVoted(true);
        setIsUpVoted(false);
      } else {
        requestCreatePostVote(id, -1, getPosts);
        setIsDownVoted(true);
      }
    }
  };

  const removeVote = (typeVote) => {
    requestDeletePostVote(id, getPosts);
    typeVote === "up" ? setIsUpVoted(false) : setIsDownVoted(false);
  };

  //   const showVoteButtons = props.isFeed && (
  //     <>
  //       {userVote && isDownVoted ? (
  //         <button onClick={() => removeVote("down")}>
  //           Remover voto "Não Gostei"
  //         </button>
  //       ) : (
  //         <button onClick={() => chooseVote("down")}>
  //           {isUpVoted ? `Mudar voto para "Não Gostei"` : `Votar em "Não Gostei"`}
  //         </button>
  //       )}
  //       <br />
  //       {userVote && isUpVoted ? (
  //         <button onClick={() => removeVote("up")}>Remover voto "Gostei"</button>
  //       ) : (
  //         <button onClick={() => chooseVote("up")}>
  //           {isDownVoted ? `Mudar voto para "Gostei"` : `Votar em "Gostei"`}
  //         </button>
  //       )}
  //     </>
  //   );

  const showVoteButtons = props.isFeed && (
    <section className="container__votes">
      {userVote && isDownVoted ? (
        <button className="btn__vote" onClick={() => removeVote("down")}>
          Remover voto
        </button>
      ) : (
        <button className="btn__vote" onClick={() => chooseVote("down")}>
          {isUpVoted ? (
            <img id="icn__dislike" src={dislike} />
          ) : (
            <img id="icn__dislike" src={dislike} />
          )}
        </button>
      )}
      <br />
      {userVote && isUpVoted ? (
        <button className="btn__vote" onClick={() => removeVote("up")}>
          Remover voto
        </button>
      ) : (
        <button className="btn__vote" onClick={() => chooseVote("up")}>
          {isDownVoted ? (
            <img id="icn__like" src={like} />
          ) : (
            <img id="icn__like" src={like} />
          )}
        </button>
      )}
    </section>
  );

  return (
    <PostCardStyle>
      <article className="container__post-card">
        <div className="container__top-card">
          <section className="container__img-author">
            <img
              className="img__author"
              src={"https://picsum.photos/200/300?random=" + id + 1}
              alt="Imagem aleatória do post"
            />
            <span>{username}</span>
          </section>
          <section>
            <span>
              <p>Postado em {date}</p>
            </span>
          </section>
        </div>
        <p className="text__title-card">{title}</p>
        <img
          className="img__post"
          src={"https://picsum.photos/200/300?random=" + id}
          alt="Imagem aleatória do post"
        />
        {showVoteButtons}

        <p className="text__caption">
          <b>{username} </b>
          {body}
        </p>

        <p>Votos: {voteSum ? voteSum : 0}</p>

        {props.isFeed && (
          <button onClick={goToComments}>Ver comentários</button>
        )}

        <p>Comentários: {commentCount ? commentCount : 0}</p>
      </article>
    </PostCardStyle>
  );
}

export default PostCard;
