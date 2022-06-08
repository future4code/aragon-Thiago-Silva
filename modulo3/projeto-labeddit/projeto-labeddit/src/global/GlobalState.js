import { useState } from "react";
import axios from "axios";
import GlobalStateContext from "./GlobalStateContext";
import { BASE_URL } from "../constants/urls";

const GlobalState = (props) => {
  const [posts, setPosts] = useState([]);

  const [post, setPost] = useState({});

  const [postComments, setPostComments] = useState([]);

  const getPosts = () => {
    const header = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };

    axios
      .get(`${BASE_URL}/posts?page=1&size=10`, header)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const getPostComments = (postId) => {
    const header = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };

    axios
      .get(`${BASE_URL}/posts/${postId}/comments`, header)
      .then((res) => {
        setPostComments(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const states = { posts, post, postComments };

  const setters = { setPosts, setPost, setPostComments };

  const getters = { getPosts, getPostComments };

  return (
    <GlobalStateContext.Provider value={{ states, setters, getters }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
