import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import useRequestData from "../hooks/useRequestData"
import { navigateToAdminPage } from "../routes/coordinator"
import TripCard from '../components/TripCard'


function HomePage() {

    const navigate = useNavigate()

    const [tripsData] = useRequestData("trips", {})

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigateToAdminPage(navigate)
        }
    }, [])

    const tripList = tripsData.trips ? tripsData.trips.map((trip) => {
        return (
            <TripCard
                key={trip.id}
                trip={trip}
            />
        )
    }) : (<p>Carregando...</p>)

    return (
        <main>
            <Header
                currentPage={"home-page"}
            />
            <h2>Inscreva-se numa nova viagem</h2>
            <hr />
            <h2>Lista de Viagens</h2>
            {tripList}
            <hr />
        </main>
    )
}

export default HomePage