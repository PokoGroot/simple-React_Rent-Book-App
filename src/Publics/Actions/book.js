import Axios from 'axios'
const token = localStorage.token

export const getBook = (address) => {
    let url = `${address}`
    return {
        type: 'GET_BOOKS',
        payload: Axios.get(`${url}`)
    }
}

export const getBookById = (id) => {
    return {
        type: 'GET_BOOK_BY_ID',
        payload: Axios.get(`http://localhost:3030/book/${id}`)
    }
}

export const addBook = (data) => {
    return {
        type: 'ADD_BOOK',
        payload: Axios.post('http://localhost:3030/book/',
                data,
                { headers: { Authorization: token}})
    }
}

export const editBook = (data, id) => {
    return {
        type: 'EDIT_BOOK',
        payload: Axios.patch(`http://localhost:3030/book/${id}`,
                data,
                { headers: {Authorization: token}})
    }
}

export const deleteBook = (id) => {
    return {
        type: 'DELETE_BOOK',
        payload: Axios.delete(`http://localhost:3030/book/${id}`,
                { headers: {Authorization: token}})
    }
}

export const addSearch = (formSearch) => {
    return {
        type: 'ADD_SEARCH_FORM',
        payload: {search: formSearch}
    }
}