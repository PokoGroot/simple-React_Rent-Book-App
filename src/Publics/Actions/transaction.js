import Axios from 'axios'
const token = window.localStorage.getItem("token")

export const borrowBook = (data) => {
    return {
        type:'BORROW_BOOK',
        payload: Axios.post("http://localhost:3030/trans/",
        data,
        {
            headers:{
            Authorization : token
            }
        }
        )
    }
}

export const returnBook = (data) => {
    return {
        type:'RETURN_BOOK',
        payload: Axios.patch("http://localhost:3030/trans/",
        data,
        {
            headers:{
            Authorization : token
            }
        }
        )
    }
}