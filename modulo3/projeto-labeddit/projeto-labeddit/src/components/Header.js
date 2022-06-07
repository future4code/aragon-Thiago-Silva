import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../routes/coordinator";

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
    <header>
      <h1>LabEddit</h1>
      {props.isProtected && (
        <>
          <h3>Bem-vindo, {localStorage.getItem("userEmail")}!</h3>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </header>
  );
}

export default Header;
