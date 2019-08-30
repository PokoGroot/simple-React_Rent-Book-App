import Axios from 'axios'
const token = window.localStorage.getItem("token")

export const login = (data) => {
    return {
        type:'LOGIN',
        payload: Axios.post('http://localhost:3030/user/login', data)
    }
}

export const register = (data) => {
    return {
        type:'REGISTER',
        payload: Axios.post('http://localhost:3030/user/register', data)
    }
}

export const getProfile = () => {
    return {
        type:'GET_PROFILE',
        payload: Axios.get("http://localhost:3030/user/profile",{
            headers:{
            Authorization : token
            }
        }
        )
    }
}