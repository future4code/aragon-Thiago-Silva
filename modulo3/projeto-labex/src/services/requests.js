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