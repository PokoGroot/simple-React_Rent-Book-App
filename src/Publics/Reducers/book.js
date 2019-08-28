/* eslint-disable default-case */
const initialState = {
    booksList: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false
}

const books = ( state = initialState, action) => {
    switch (action.type){
        case 'GET_BOOKS_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_BOOKS_REJECTED':
            return{
                ...state,
                isRejected: true,
                isLoading: false
            }
        case 'GET_BOOKS_FULFILLED':
            return{
                ...state,
                isLoading: false,
                isFulfilled: true,
                booksList: action.payload.data
            }
        default: 
            return state
    }
}

export default books