import axios from "axios";
import { goToFeedPage } from "../routes/coordinator";
import { BASE_URL } from "../constants/urls";

export const requestLogin = (form, clear, navigate) => {
  const body = {
    email: form.email,
    password: form.password,
  };

  axios
    .post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userEmail", form.email);
      alert("Login realizado com sucesso!");
      goToFeedPage(navigate);
    })
    .catch((err) => {
      alert("Email e/ou senha inválidos! Tente novamente");
      clear();
    });
};

export const requestSignUp = (form, clear, navigate) => {
  const body = {
    username: form.name,
    email: form.email,
    password: form.password,
  };

  axios
    .post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userEmail", form.email);
      alert("Usuário criado com sucesso! Seja bem-vindo!");
      goToFeedPage(navigate);
    })
    .catch((err) => {
      alert("Algo deu errado! Tente novamente");
      clear();
    });
};

export const requestCreatePost = (form, clear, getPosts) => {
  const header = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };

  const body = {
    title: form.title,
    body: form.body,
  };

  axios
    .post(`${BASE_URL}/posts`, body, header)
    .then((res) => {
      alert(res.data);
      getPosts();
      clear();
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const requestCreateComment = (form, clear, getPostComments, postId) => {
  const header = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };

  const body = {
    body: form.body,
  };

  axios
    .post(`${BASE_URL}/posts/${postId}/comments`, body, header)
    .then((res) => {
      alert(res.data);
      getPostComments(postId);
      clear();
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const requestCreatePostVote = (postId, direction, getPosts) => {
  const header = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };

  const body = {
    direction: direction,
  };

  axios
    .post(`${BASE_URL}/posts/${postId}/votes`, body, header)
    .then(() => {
      alert("Voto registrado com sucesso!");
      getPosts();
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const requestCreateCommentVote = (
  commentId,
  direction,
  getPostComments,
  postId
) => {
  const header = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };

  const body = {
    direction: direction,
  };

  axios
    .post(`${BASE_URL}/comments/${commentId}/votes`, body, header)
    .then(() => {
      alert("Voto registrado com sucesso!");
      getPostComments(postId);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const requestChangePostVote = (postId, direction, getPosts) => {
  const header = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };

  const body = {
    direction: direction,
  };

  axios
    .put(`${BASE_URL}/posts/${postId}/votes`, body, header)
    .then(() => {
      alert("Voto modificado com sucesso!");
      getPosts();
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const requestChangeCommentVote = (
  commentId,
  direction,
  getPostComments,
  postId
) => {

  const header = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };

  const body = {
    direction: direction,
  };

  axios
    .put(`${BASE_URL}/comments/${commentId}/votes`, body, header)
    .then(() => {
      alert("Voto modificado com sucesso!");
      getPostComments(postId);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const requestDeletePostVote = (postId, getPosts) => {
  
  const header = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };

  axios
    .delete(`${BASE_URL}/posts/${postId}/votes`, header)
    .then(() => {
      alert("Voto removido com sucesso!");
      getPosts();
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const requestDeleteCommentVote = (
  commentId,
  getPostComments,
  postId
) => {

  const header = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };

  axios
    .delete(`${BASE_URL}/comments/${commentId}/votes`, header)
    .then(() => {
      alert("Voto removido com sucesso!");
      getPostComments(postId);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
