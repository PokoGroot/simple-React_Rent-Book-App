import Axios from 'axios'

export const getGenre = () => {
    return {
        type: 'GET_GENRES',
        payload: Axios.get (`${process.env.REACT_APP_HOST}/genre`)
    }
}