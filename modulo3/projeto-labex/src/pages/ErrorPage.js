import { useNavigate } from 'react-router-dom'
import { navigateToHome } from '../routes/cordinator'

function ErrorPage() {
    const navigate = useNavigate()
    
    return (
        <main>
            <h3>Error 400 - Página não encontrada!</h3>
            <button onClick={() => navigateToHome(navigate)}>Voltar para página inicial</button>
        </main>
    )
}

export default ErrorPage