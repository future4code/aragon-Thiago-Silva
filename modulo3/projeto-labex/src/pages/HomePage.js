import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import useRequestData from "../hooks/useRequestData"
import { navigateToAdminPage } from '../routes/coordinator'
import TripCard from '../components/TripCard'
import { sendApplication } from "../services/requests"
import useForm from "../hooks/useForm"
import { countries } from "../constants/countries"


function HomePage() {

    const navigate = useNavigate()

    const [tripsData] = useRequestData('trips', {})
    const [tripId, setTripId] = useState('')

    const { form, onChange, clear } = useForm({
        name: '',
        age: '',
        applicationText: '',
        profession: '',
        country: ''
    })

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigateToAdminPage(navigate)
        }
    }, [])

    const onChangeTrip = (event) => {
        setTripId(event.target.value)
    }

    const onClickSend = (event) => {
        event.preventDefault()
        sendApplication(form, tripId, clear)
    }

    const tripsOptions = tripsData.trips && tripsData.trips.map((trip) => {
        return (
            <option key={trip.id} value={trip.id}>{trip.name}</option>
        )
    })

    const tripsList = tripsData.trips ? tripsData.trips.map((trip) => {
        return (
            <TripCard
                key={trip.id}
                trip={trip}
            />
        )
    }) : (<p>Carregando...</p>)

    return (
        <>
            <Header CurrentPage={"home-page"} />

            <h2>Inscreva-se numa nova viagem</h2>

            <form onSubmit={onClickSend}>
                <label htmlFor="trip">Viagem </label>
                <select
                    id={'trip'}
                    defaultValue={''}
                    onChange={onChangeTrip}
                    required
                >
                    <option
                        value={''}
                        disabled
                    >Escolha uma viagem...</option>
                    {tripsOptions}
                </ select>
                <br />
                <br />
                <label htmlFor={'name'}> Nome: </label>
                <input
                    id={"name"}
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    pattern={"^.{3,}$"}
                    title={"O nome deve ter no mínimo 3 caracteres"}
                    required
                />
                <label htmlFor={"age"}> Idade: </label>
                <input
                    id={"age"}
                    name={"age"}
                    type={"number"}
                    value={form.age}
                    onChange={onChange}
                    min={18}
                    required
                />

                <br />
                <br />
                <label htmlFor={"application-text"}> Texto de Candidatura: </label>
                <input
                    className="input-texto-cand"
                    id={"application-text"}
                    name={"applicationText"}
                    value={form.applicationText}
                    onChange={onChange}
                    pattern={"^.{30,}$"}
                    title={"O texto deve ter no mínimo 30 caracteres"}
                    required
                />
                <br />
                <br />
                <label htmlFor={"profession"}> Profissão: </label>
                <input
                    id={"profession"}
                    name={"profession"}
                    value={form.profession}
                    onChange={onChange}
                    pattern={"^.{3,}$"}
                    title={"A profissão deve ter no mínimo 3 caracteres"}
                    required
                />
                <label htmlFor={"country"}> País de origem: </label>
                <select
                    id={"country"}
                    name={"country"}
                    value={form.country}
                    onChange={onChange}
                    required
                >
                    <option
                        value={""}
                        disabled
                    >Escolha um País...</option>
                    {countries.map((country) => {
                        return <option value={country} key={country}>{country}</option>
                    })}
                </select>
                <br />
                <br />
                <button type={"submit"}>Enviar Candidatura</button>
            </form>
            <hr />
            <section>
                <h2>Lista de Viagens</h2>
                {tripsList}
            </section>
        </>
    )
};

export default HomePage;