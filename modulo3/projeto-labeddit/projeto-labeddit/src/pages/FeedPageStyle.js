import styled from "styled-components";

export const FeedPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-between;

  .container__newpost {
    text-align: center;
    height: 9vh;
    display: flex;
    flex-direction: row;
    padding-left: 20px;
    align-items: center;
    font-size: 0.9em;
    background-color: ghostwhite;
    color: grey;
    font-weight: bold;
  }

  .input__post_title {
    width: 25vw;
    border: none;
    border-radius: 5px;
    padding-left: 10px; 
    height: 5vh;
    margin-left: 5px;
    &:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }
  }

  .input__post_msg {
    width: 35vw;
    border: none;
    border-radius: 5px;
    padding-left: 10px;
    height: 5vh;
    margin-left: 5px;
    &:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }
  }

  .btn__publicar {
    color: dodgerblue;
    background-color: transparent;
    border: none;
    font-weight: bold;
    margin-left: 10px;
    &:hover {
      cursor: pointer;
    }
  }

  .container__loader{
  position: absolute;
  top: 40%;
  left: 40%;
  display: block;
}
.loader{
  width: 50px;
  height: 50px;
  position: relative;
}
.loader::before,
.loader::after {
  content: '';
  position: absolute;
  height: inherit;
  width: inherit;
  border-radius: 50%;
  mix-blend-mode: multiply;
  animation: rotate 1s infinite cubic-bezier(0.77, 0, 0.175, 1);
}
.loader::before {
  background-color: #fc3f9e;
}
.loader::after {
  background-color: #50e8f3;
  animation-delay: .5s;
}
@keyframes rotate {
  0%,
  100% {
    left: 95px;
  }
  25% {
    transform: scale(.3);
  }
  50% {
    left: 0;
  }
  75% {
    transform: scale(1);
  }
}

.container__pagination {
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 10px;
  align-items: center;
  font-size: small;
  color: gray;
}

.btn__pagination {
  background-color: dodgerblue;
  color: white;
  border: none;
  width: 80px;
  height: 3.5vh;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
  }
}

.text__caption {

}
`