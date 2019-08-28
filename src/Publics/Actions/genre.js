import Axios from 'axios'

export const getGenre = () => {
    return {
        type: 'GET_GENRES',
        payload: Axios.get ('http://localhost:3030/genre')
    }
}