import Axios from 'axios'

export const getYear = () => {
    return {
        type: 'GET_YEARS',
        payload: Axios.get ('http://localhost:3030/book/y/year')
    }
}