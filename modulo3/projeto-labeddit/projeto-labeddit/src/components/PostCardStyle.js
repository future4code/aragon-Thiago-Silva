import styled from "styled-components";

export const PostCardStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  text-align: center;

  .container__post-card {
    background-color: ghostwhite;
    width: 60vw;
    border-radius: 10px;
  }

  .img__author {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    box-shadow: 2px 2px 2px 0 grey;
  }

  .container__top-card {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      color: grey;
      font-size: small;
  }

  .container__img-author{
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 5px;
  }

  .text__title-card {
      margin-bottom: 5px;
      font-weight: bold;
  }

  .img__post {
    width: 30vw;
    height: 60vh;
    border-radius: 5px;
  }
  
  .container__votes {
      display: flex;
      flex-direction: row;
      justify-content: center;
  }

  #icn__dislike {
      width: 20px;
      background-color: transparent;
      border: none;
  }

  #icn__like {
      width: 20px;
  }

  
`;
