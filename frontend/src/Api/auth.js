import axios from "axios";

const API = "http://localhost:3000" 

export const registerRequest = user => axios.post(`${API}/api/register`, user)

export const loginRequest = user => axios.post(`${API}/api/login`, user)
