import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import useUnprotectedPage from '../hooks/useUnprotectedPage';
import useForm from '../hooks/useForm';
import { requestLogin } from "../services/requests";
import { goToSignUpPage } from "../routes/coordinator";

function LoginPage() {
    useUnprotectedPage();

    const navigate = useNavigate();

    const { form, onChange, clear } = useForm({ email: "", password: "" })

    const login = (event) => {
        event.preventDefault();
        requestLogin(form, clear, navigate);
    };

    return (
        <main>
            <Header
                isProtected={false}
            />
            <hr />
            <section>
                <h2>Login</h2>
                <form onSubmit={login}>
                    <label htmlFor={"email"}>Email: </label>
                    <input
                        id={"email"}
                        type={"email"}
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                    ></input>
                    <br />
                    <label htmlFor={"password"}>Senha: </label>
                    <input
                        id={"password"}
                        type={"password"}
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                    ></input>
                    <br />
                    <button type={"submit"}>Entrar</button>
                </form>
            </section>
            <hr />
            <section>
                <h3>Não tem cadastro? Clique no botão a seguir para se cadastrar: </h3>
                <button onClick={() => goToSignUpPage(navigate)}>Ir para cadastro</button>
            </section>
        </main>
    );
};

export default LoginPage;