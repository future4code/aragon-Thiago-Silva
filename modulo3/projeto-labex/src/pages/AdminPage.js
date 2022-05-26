import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import TripCard from "../components/TripCard"
import { planets } from "../constants/planets"
import useForm from "../hooks/useForm"
import useRequestData from "../hooks/useRequestData"
import { navigateToHome } from "../routes/coordinator"
import { createTrip, deleteTrip } from "../services/requests"
import actualDate from "../utils/actualDate"

function AdminPage() {
    const navigate = useNavigate()

    const [tripsData, getTripsData] = useRequestData('trips', {})

    const { form, onChange, clear } = useForm({
        name: '',
        planet: '',
        date: '',
        description: '',
        durationInDays: ''
    })

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigateToHome(navigate)
        }
    }, []) //incluir o navigate conforme sugestão do Git ou excluir o array de dependência?

    const onClickCreate = (event) => {
        event.preventDefault()
        createTrip(form, clear, getTripsData)
    }

    const removeTrip = (tripId) => {
        if (window.confirm('Tem certeza que deseja remover esta viagem?')) {
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
            <hr />
            <section>
                <h2>Crie uma nova viagem</h2>
                <form onSubmit={onClickCreate}>
                    <label htmlFor={'name'} > Nome: </label>
                    <input
                        id={'name'}
                        name={'name'}
                        value={form.name}
                        onChange={onChange}
                        pattern={'^.{5,}$'}
                        title={'O nome da viagem deve ter no mínimo 5 caracteres'}
                        required
                    />
                    <label htmlFor={'planet'}>Planeta:</label>
                    <select
                        id={'planet'}
                        name={'planet'}
                        defaultValue={''}
                        onChange={onChange}
                        required
                    >
                        <option value={''} disabled>Escolha um Planeta...</option>

                        {planets.map((planet) => {
                            return <option value={planet} key={planet}>{planet}</option>
                        })}
                    </select>
                    <label htmlFor={"date"}>Data de lançamento: </label>
                    <input
                        id={'date'}
                        type={'date'}
                        name={'date'}
                        value={form.date}
                        onChange={onChange}
                        min={actualDate()}
                        required
                    />
                    <label htmlFor={"description"}> Descrição: </label>
                    <input
                        id={"description"}
                        name={"description"}
                        value={form.description}
                        onChange={onChange}
                        pattern={"^.{20,}$"}
                        title={"O nome deve ter no mínimo 20 caracteres"}
                        required
                    />
                    <label htmlFor={"duration"}> Duração &#40;em dias&#41;: </label>
                    <input
                        id={"duration"}
                        type={"number"}
                        name={"durationInDays"}
                        value={form.durationInDays}
                        onChange={onChange}
                        min={30}
                        required
                    />
                    <button type={'submit'}>Criar</button>
                </form>
                <hr />
            </section>
            <section>
                <h2>Lista de Viagens</h2>
                {tripList}
            </section>
        </main>
    )
}

export default AdminPage 