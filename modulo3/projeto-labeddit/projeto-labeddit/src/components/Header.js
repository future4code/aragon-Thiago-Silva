import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../routes/coordinator";
import { HeaderStyle } from "./HeaderStyle";
import labeddit from "../assets/labeddit.png";
import icon from "../assets/logout-icon.png";
import { goToFeedPage } from "../routes/coordinator";

function Header(props) {
  const navigate = useNavigate();

  const logout = () => {
    if (window.confirm("Tem certeza de que deseja sair?")) {
      localStorage.removeItem("token");
      localStorage.removeItem("userEmail");
      goToLoginPage(navigate);
      alert("Logout com sucesso!");
    }
  };

  return (
    <HeaderStyle>
      <header className="container__header">
        <section>
        <img onClick={goToFeedPage} className="logo" src={labeddit} alt="logo Labeddit"/>
        </section>

        
        {props.isProtected && (
          <section className="container__welcome-logout">
            <p>Bem-vindo, {localStorage.getItem("userEmail")}!</p>
            <button className="btn__logout" onClick={logout}><img width={"20px"} src={icon} alt="botao sair"></img></button>
          </section>
        )}
        
      </header>
    </HeaderStyle>
  );
}

export default Header;
