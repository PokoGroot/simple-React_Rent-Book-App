import Axios from 'axios'
const token = window.localStorage.getItem("token")

export const borrowBook = (data) => {
    return {
        type:'BORROW_BOOK',
        payload: Axios.post(`${process.env.REACT_APP_HOST}/trans/`,
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
        payload: Axios.patch(`${process.env.REACT_APP_HOST}/trans/`,
        data,
        {
            headers:{
            Authorization : token
            }
        }
        )
    }
}

export const getOneBorrow = (id) => {
    return {
        type:'GET_ONE_BORROW',
        payload: Axios.get(`${process.env.REACT_APP_HOST}/trans/${id}`,
        {
            headers:{
            Authorization : token
            }
        }
        )
    }
}