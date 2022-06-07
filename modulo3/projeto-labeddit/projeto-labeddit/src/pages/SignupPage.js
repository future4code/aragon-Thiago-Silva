import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import useUnprotectedPage from "../hooks/useUnprotectedPage";
import { goToLoginPage } from "../routes/coordinator";

function SignUpPage() {
  useUnprotectedPage();

  const navigate = useNavigate();

  return (
    <main>
      <Header isProtected={false} />
      <hr />
      <section>
        <h2>Cadastro de Novo Usuário</h2>
        <button onClick={() => goToLoginPage(navigate)}>Voltar</button>
      </section>
    </main>
  );
}

export default SignUpPage;
