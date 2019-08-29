import Axios from 'axios'

export const getBook = (title = null, sort = null, availability = null, genre = null, page = null, order = null) => {
    const searchTitle = title? `search=${title}` : ''
    const searchSort =  sort? `&sortby=${sort}` : ''
    const searchAvailability = availability? `&availability=${availability}` : ''
    const searchGenre = genre? `&genre_id=${genre}` : ''
    const searchPage = page? `&page=${page}` : ''
    const searchOrder = order? `&orderby${order}` : ''
    const searchUrl = searchTitle + searchSort + searchAvailability + searchGenre + searchPage + searchOrder
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