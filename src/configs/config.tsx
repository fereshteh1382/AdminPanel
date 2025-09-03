import axios from "axios"

export const api = axios.create({
    baseURL: "https://iran-api.com/v1/states"
})


