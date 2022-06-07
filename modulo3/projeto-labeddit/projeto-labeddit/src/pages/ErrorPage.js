import { useNavigate } from "react-router-dom";
import { goToFeedPage } from "../routes/coordinator";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <main>
      <h1>Error 400 - Página não encontrada!</h1>
      <button onClick={() => goToFeedPage(navigate)}>Ir para Feed</button>
    </main>
  );
}

export default ErrorPage;
