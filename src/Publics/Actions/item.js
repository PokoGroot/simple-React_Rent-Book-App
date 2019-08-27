import Axios from 'axios'

export const getItem = () => {
    return {
        type: 'GET_ITEM',
        payload: Axios.get('http://localhost:3030/book')
    }
}