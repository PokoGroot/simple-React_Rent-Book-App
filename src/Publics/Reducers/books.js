/* eslint-disable default-case */
const initialState = {
    booksList: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false
}

const books = ( state = initialState, action) => {
    switch (action.type) {
        case 'GET_BOOKS_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_BOOKS_REJECTED':
            return {
                ...state,
                isRejected: true,
                isFulfilled: false
            }
        case 'GET_BOOKS_FULFILLED':
            return {
                ...state,
                isRejected: false,
                isFulfilled: true,
                booksList: action.payload.data.data
            }
        default: 
            return state
    }
}

export default books