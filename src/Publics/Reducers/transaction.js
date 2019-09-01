const initialState = {
    borrowedBook: [],
    errMessage:'',
    message:'',
    isLoading:false,
    isRejected:false,
    isFulfilled:false,
}

const transactions = (state = initialState, action)=>{
    switch(action.type){
        case 'BORROW_BOOK_PENDING':
            return{
                ...state,
                isLoading:true,
                isRejected:false,
                isFulfilled:false,
            }
        case 'BORROW_BOOK_REJECTED':
            return{
                ...state,
                isLoading:false,
                isRejected:true,
                errMessage:action.payload.response.data.message
                }
        case 'BORROW_BOOK_FULFILLED':
            return{
                ...state,
                isLoading:false,
                isFulfilled:true,
                errMessage:action.payload.data.message
            }
        case 'RETURN_BOOK_PENDING':
            return{
                ...state,
                isLoading:true,
                isRejected:false,
                isFulfilled:false,
            }
        case 'RETURN_BOOK_REJECTED':
            return{
                ...state,
                isLoading:false,
                isRejected:true,
                errMessage:action.payload.response.data.message
                }
        case 'RETURN_BOOK_FULFILLED':
            return{
                ...state,
                isLoading:false,
                isFulfilled:true,
                errMessage:action.payload.data.message
            }
        case 'GET_ONE_BORROW_PENDING':
            return{
                ...state,
                isLoading:true,
                isRejected:false,
                isFulfilled:false,
            }
        case 'GET_ONE_BORROW_REJECTED':
            return{
                ...state,
                isLoading:false,
                isRejected:true,
                errMessage:action.payload.response.data.message
                }
        case 'GET_ONE_BORROW_FULFILLED':
            return{
                ...state,
                isLoading:false,
                isFulfilled:true,
                errMessage:action.payload.data.message,
                borrowedBook:action.payload.data.data
            }
        default:
            return state
    }
}
export default transactions