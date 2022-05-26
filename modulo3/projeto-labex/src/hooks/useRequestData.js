import axios from "axios"
import { useEffect, useState } from "react"
import { API_CLIENT, BASE_URL } from "../constants/urls"

const useRequestData = (path, initialState) => {
    const [data, setData] = useState(initialState)

    const getData = () => {
        const header = {
            headers: {
                auth: localStorage.getItem("token")
            }
        }

        axios
        .get(`${BASE_URL}/${API_CLIENT}/${path}`, header)
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            alert(err.message)
            console.log(err.message)
        })
    }

    useEffect(() => {
        getData()
    },[path])

    return [data, getData]
}

export default useRequestData