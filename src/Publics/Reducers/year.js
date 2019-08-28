const initialState = {
    yearsList: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false
}

const years = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_YEARS_PENDING':
            return{
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_YEARS_REJECTED':
            return{
                ...state,
                isLoading: false,
                isRejected: true,
            }
        case 'GET_YEARS_FULFILLED':
            return{
                ...state,
                isLoading: false,
                isFulfilled: true,
                yearsList: action.payload.data.data
            }
        default:
            return state
    }
}

export default years