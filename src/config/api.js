import axios from "axios"

export const BASE_URL="https://github-livid-phi.vercel.app"
// export const BASE_URL="localhost:808"
const token=localStorage.getItem("jwt")

export const api= axios.create({
    baseURL:BASE_URL,
headers:{
    "Authorization":`bearer ${token}`,
    'Content-Type':'application/json'
}
})