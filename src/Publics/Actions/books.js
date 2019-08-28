import Axios from 'axios'

export const getBooks = () => {
    return {
        type: 'GET_BOOKS',
        payload: Axios.get('http://localhost:3030/book')
    }
}
