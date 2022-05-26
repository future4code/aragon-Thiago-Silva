import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import useRequestData from "../hooks/useRequestData"
import { navigateToAdminPage, navigateToHome } from "../routes/coordinator"

function TripDetailsPage() {
    const navigate = useNavigate()

    const params = useParams()

    const [detailsData] = useRequestData(`trip/${params.tripId}`,{})

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigateToHome(navigate)
        }
    }, []) // incluir navigate ou excluir array de dependência?

    const candidateList = detailsData.trip && detailsData.trip.candidates.map((candidate) => {
        return (
            <div key={candidate.id}>
                <span><b>Nome:</b> {candidate.name} </span>
                <span><b>Profissão:</b> {candidate.profesion}</span>
                <span><b>Idade:</b> {candidate.age} </span>
                <span><b>País:</b> {candidate.country} </span>
                <span><b>Texto de candidatura:</b> {candidate.applicationText} </span>
                <button>Aprovar</button>
                <button>Reprovar</button>
                
            </div>
        )
    })

    console.log(candidateList)
    return (
        <main>
            <button onClick={() => navigateToAdminPage(navigate)}>Sair de detalhes</button>
                <h1>Viagem: {detailsData.trip && detailsData.trip.name}</h1>
                <hr />
                <h3>Lista de Candidatos</h3>
                {candidateList}
                <hr />
                <h3>Lista de Aprovados</h3>
        </main>
    )
}

export default TripDetailsPage