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
        case 'GET_BOOK_BY_ID_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_BOOK_BY_ID_REJECTED':
            return{
                ...state,
                isRejected: true,
                isLoading: false
            }
        case 'GET_BOOK_BY_ID_FULFILLED':
            return{
                ...state,
                isLoading: false,
                isFulfilled: true,
            }
        default: 
            return state
    }
}

export default books