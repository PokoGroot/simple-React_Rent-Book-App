/* eslint-disable default-case */
const initialState = {
    itemList: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false
}

const item = ( state = initialState, action) => {
    switch (action.type) {
        case 'GET_ITEM_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_ITEM_REJECTED':
            return {
                ...state,
                isRejected: true,
                isFulfilled: false
            }
        case 'GET_ITEM_FULFILLED':
            return {
                ...state,
                isRejected: false,
                isFulfilled: true,
                itemList: action.payload.data.data
            }
        default: 
            return state
    }
}

export default item