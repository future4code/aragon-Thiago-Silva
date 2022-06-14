import styled from "styled-components";

export const HeaderStyle = styled.div`
  
  .container__header {
    padding: 10px;
    height: 14vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .container__welcome-logout{
      font-size: 0.8em;
      color: grey;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 20px;
      padding: 10px;
  }

  .btn__logout {
      background-color: transparent;
      border: none;
      width: 1.5vw;
      color: dodgerblue;
        &:hover {
            font-weight: bold;
        }
  }

  .logo {
    width: 180px;
    border-radius: 10px;
    &:hover {
      cursor: pointer;
    }
  }
`;
