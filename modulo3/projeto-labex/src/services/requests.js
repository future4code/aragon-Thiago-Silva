import axios from "axios"
import { API_CLIENT, BASE_URL } from "../constants/urls"
import { navigateToAdminPage } from "../routes/coordinator"

export const requestLogin = (email, password, navigate) => {
    const body = {
        email: email,
        password: password
    }

    axios
    .post(`${BASE_URL}/${API_CLIENT}/login`, body)
    .then((response) => {
        console.log(response.data)
        localStorage.setItem("token", response.data.token)
        alert("Login realizado com sucesso!")
        navigateToAdminPage(navigate)
    })
    .catch((error) => {
        alert("Um erro ocorreu. Tente novamente!")
        console.log(error)
    })
}

    export const deleteTrip = (tripId, getTripsData) => {
        const header = {
            headers: {
                auth: localStorage.getItem('token')
            }
        }

        axios
        .delete(`${BASE_URL}/${API_CLIENT}/trips/${tripId}`, header)
        .then(() => {
            alert("Viagem excluída com sucesso!")
            getTripsData()
        })
        .catch((error) => {
            alert(error.message)
            console.log(error.message)
        })
    }

    export const createTrip = (body, clear, getTripsData) => {
        const header = {
            headers: {
                auth: localStorage.getItem('token')
            }
        }

        axios
        .post(`${BASE_URL}/${API_CLIENT}/trips`, body, header)
        .then(() => {
            alert("Viagem criada com sucesso!")
            clear()
            getTripsData()
        })
        .catch((error) => {
            alert(error.message)
        })
    }
