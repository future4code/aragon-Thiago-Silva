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
            localStorage.setItem("token", response.data.token)
            alert("Login realizado com sucesso!")
            navigateToAdminPage(navigate)
        })
        .catch((error) => {
            alert("Um erro ocorreu. Tente novamente!")
            console.log(error.response.message)
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
            console.log(error.response.message)
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
            alert(error.response.message)
        })
}

export const decideCandidate = (tripID, candidateId, decision, getTripsDetail) => {

    const header = {
        headers: {
            auth: localStorage.getItem('token')
        }
    }
   
    const body = {
        approve: decision
    }

    axios
        .put(
            `${BASE_URL}/${API_CLIENT}/trips/${tripID}/candidates/${candidateId}/decide`,
            body,
            header
        )
        .then(() => {
            decision ? 
            alert('Candidato aceito com sucesso!')
            : alert('Candidato reprovado com sucesso!')
            getTripsDetail()
        })
        .catch((error) => {
            alert(error.response.message)
        })
}

export const sendApplication = (body, tripId, clear) => {
    axios
    .post(`${BASE_URL}/${API_CLIENT}/trips/${tripId}/apply`, body)
    .then(() => {
        alert('Sua candidatura foi recebida com sucesso!')
        clear()
    })
    .catch((error) => {
        alert(error.response.message)
    })
}
