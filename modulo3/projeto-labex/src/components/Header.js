import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { navigateToHome } from '../routes/coordinator'
import { requestLogin } from '../services/requests'

function Header() {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleInputValues = (event) => {
        switch (event.target.name) {
            case "email":
                return setEmail(event.target.value)
            case "password":
                return setPassword(event.target.value)
            default:
            return
        }
    }

    const login = (event) => {
        event.preventDefault()
        requestLogin(email, password, navigate)
    }

    const logout = () => {
        localStorage.removeItem("token")
        navigateToHome(navigate)
    }

    const renderHeader =
        localStorage.getItem("token") ?
            (
            <>
            <button onClick={logout}>Logout</button>
            <br/>
            </>)
            : (
                <section>
                    <label htmlFor={"email"}>E-mail: </label>
                    <input
                        type="text"
                        id={"email"}
                        name={"email"}
                        value={email}
                        onChange={handleInputValues}
                    />
                    <br />
                    <br />
                    <label htmlFor={"password"}>Senha: </label>
                    <input
                        id={"password"}
                        type={"password"}
                        name={"password"}
                        value={password}
                        onChange={handleInputValues}
                    />
                    <br />
                    <br />
                    <button onClick={login}>Entrar</button>
                    {/* Poderia ser utilizado <form onSubmit={login}> </form> entre o código acima com type="submit" no button*/}
                </section>
            )

    return (
        <main>
            <h1>LabeX</h1>
            {renderHeader}
            <br />
            <hr />
        </main>
    )
}

export default Header