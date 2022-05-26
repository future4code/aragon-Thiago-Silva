import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import TripCard from "../components/TripCard"
import useRequestData from "../hooks/useRequestData"
import { navigateToAdminPage } from "../routes/coordinator"
import { deleteTrip } from "../services/requests"

function AdminPage () {
    const navigate = useNavigate()

    const [tripsData, getTripsData] = useRequestData('trips', {})

    useEffect(() => {
        if(!localStorage.getItem('token')) {
            navigateToAdminPage(navigate)
        }
    }, [])

    const removeTrip = (tripId) => {
        if(window.confirm('Tem certeza que deseja remover esta viagem?')) {
            deleteTrip(tripId, getTripsData)
        }
    }

    const tripList = tripsData.trips ? tripsData.trips.map((trip) => {
        return (
            <TripCard
            key={trip.id}
            trip={trip}
            removeTrip={removeTrip}
            />
        )
    }) : (<p>Carregando...</p>)

    return (
        <main>
            <Header 
            currentPage={"admin"}
            />
            <h3>Crie uma nova viagem</h3>
            <hr />
            <h3>Lista de Viagens</h3>
            {tripList}
        </main>
    )
}

export default AdminPage 