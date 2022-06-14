import { useState } from "react";
import axios from "axios";
import GlobalStateContext from "./GlobalStateContext";
import { BASE_URL } from "../constants/urls";
import { size } from '../constants/pagination';

const GlobalState = (props) => {
  
  const [posts, setPosts] = useState([]);

  const [post, setPost] = useState({});

  const [postComments, setPostComments] = useState([]);

  const [page, setPage] = useState(1);

  const [isLoading, setIsLoading] = useState(false);

  const getPosts = (currentPage) => {
    setIsLoading(true);

    const header = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };

    axios
      .get(`${BASE_URL}/posts?page=${currentPage}&size=${size}`, header)
      .then((res) => {
        setPosts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const getPostComments = (postId) => {
    setIsLoading(true);

    const header = {
      headers: {
        authorization: localStorage.getItem("token")
      }
    };

    axios.get(`${BASE_URL}/posts/${postId}/comments`, header)
      .then((res) => {
        setPostComments(res.data);
        setIsLoading(false);
      }).catch((err) => {
        console.log(err.message);
      });
  };

  const states = { posts, post, postComments, page, isLoading };

  const setters = { setPosts, setPost, setPostComments, setPage, setIsLoading };

  const getters = { getPosts, getPostComments };

  return (

    <GlobalStateContext.Provider value={{ states, setters, getters }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;