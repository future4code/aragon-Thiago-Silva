import { useNavigate } from "react-router-dom"
import { navigateToTripDetailsPage } from "../routes/coordinator"

function TripCard (props) {
    const navigate = useNavigate()

    const {id, name, description, planet, durationInDays, date} = props.trip

    const token =  localStorage.getItem('token')

    return (
        <main>
            <p><b>Nome:</b> {name} </p>
            <p><b>Descrição:</b> {description} </p>
            <p><b>Planeta:</b> {planet} </p>
            <p><b>Duração:</b> {durationInDays} </p>
            <p><b>Data:</b> {date} </p>
        

        {token && (
            <section>
                <button onClick={() => navigateToTripDetailsPage(navigate, id)}>Exibir detalhes</button>
                <button onClick={() => props.removeTrip(id)}>Excluir viagem</button>
                <br />
                <br />
            </section>
        )}  
        <hr />  
        </main>
    )
}

export default TripCard