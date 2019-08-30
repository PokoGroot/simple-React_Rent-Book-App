/* eslint-disable default-case */
const initialState = {
    booksList: [],
    bookDetail: [],
    searchForm: [],
    errMessage: '',
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
                bookDetail: action.payload.data.data[0]
            }
        case 'ADD_BOOK_PENDING':
            return{
                ...state,
                isLoading:true,
                isRejected:false,
                isFulfilled:false,
            }
        case 'ADD_BOOK_REJECTED':
            return{
                ...state,
                isLoading:false,
                isRejected:true,
                errMessage:action.payload.response.data.message,
            }
        case 'ADD_BOOK_FULFILLED':
            // state.booksList.unshift(action.payload.data.data)
            return{
                ...state,
                isLoading:false,
                isFulfilled:true
            }
        case 'EDIT_BOOK_PENDING':
            return{
                ...state,
                isLoading:true,
                isRejected:false,
                isFulfilled:false,
            }
        case 'EDIT_BOOK_REJECTED':
            return{
                ...state,
                isLoading:false,
                isRejected:true,
                errMessage:action.payload.response.data.message,
            }
        case 'EDIT_BOOK_FULFILLED':
            return{
                ...state,
                isLoading:false,
                isFulfilled:true
            }
        case 'DELETE_BOOK_PENDING':
            return{
                ...state,
                isLoading:true,
                isRejected:false,
                isFulfilled:false,
            }
        case 'DELETE_BOOK_REJECTED':
            return{
                ...state,
                isLoading:false,
                isRejected:true,
                errMessage:action.payload.response.data.message,
            }
        case 'DELETE_BOOK_FULFILLED':
            return{
                ...state,
                isLoading:false,
                isFulfilled:true
            }
        case 'ADD_SEARCH_FORM_PENDING':
            return{
                ...state,
                isLoading:true,
                isRejected:false,
                isFulfilled:false,
            }
        case 'ADD_SEARCH_FORM_REJECTED':
            return{
                ...state,
                isLoading:false,
                isRejected:true,
                errMessage:action.payload.response.data.message,
            }
        case 'ADD_SEARCH_FORM_FULFILLED':
            // state.booksList.unshift(action.payload.data.data)
            return{
                ...state,
                isLoading:false,
                isFulfilled:true,
                searchForm: action.payload.data
            }
        default: 
            return state
    }
}

export default books