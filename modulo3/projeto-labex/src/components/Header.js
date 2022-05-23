import { useNavigate } from 'react-router-dom'
import { navigateToHome, navigateToAdminPage } from '../routes/cordinator'

function Header (props) {
    const navigate = useNavigate()

    return (
        <main>
            <h1>LabeX</h1>
            { props.currentPage === "home-page" ? <button onClick={() => navigateToAdminPage(navigate)}>Entrar</button>
            : <button onClick={() => navigateToHome(navigate)}>Logout</button>}
            <hr />
        </main>
    )
}

export default Header