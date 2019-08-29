import Axios from 'axios'
const token = localStorage.token

export const getBook = (title = null, sort = null, availability = null, genre = null, year = null, page = null, order = null) => {
    const searchTitle = title ? `search=${title}` : ''
    const searchSort =  sort ? `&sortby=${sort}` : ''
    const searchAvailability = availability ? `&availability=${availability}` : ''
    const searchGenre = genre ? `&genre_id=${genre}` : ''
    const searchPage = page ? `&page=${page}` : ''
    const searchOrder = order ? `&orderby=${order}` : ''
    const searchYear = year ? `&year=${year}` : ``
    const searchUrl = searchTitle + searchSort + searchAvailability + searchGenre + searchPage + searchOrder + searchYear
    return {
        type: 'GET_BOOKS',
        payload: Axios.get(`http://localhost:3030/book?${searchUrl}`)
    }
}

export const getBookById = (id) => {
    return {
        type: 'GET_BOOKS_BY_ID',
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