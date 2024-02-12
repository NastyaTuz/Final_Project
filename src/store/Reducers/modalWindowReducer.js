const defaultState = {
    orderModal: false,
    saleModal: false
}

const CHANGE_ORDER_MODAL = 'CHANGE_ORDER_MODAL'
const CHANGE_SALE_MODAL = 'CHANGE_SALE_MODAL'

export const modalWindowReducer = (state = defaultState, action) =>{
    switch(action.type){
        case CHANGE_ORDER_MODAL:
            return {...state, orderModal: action.payload}
        case CHANGE_SALE_MODAL:
            return {...state, saleModal: action.payload};
        default:
            return state
    }
}

export const OrderModalAction = (payload) => ({type: CHANGE_ORDER_MODAL, payload})
export const SaleModalAction = (payload) => ({type: CHANGE_SALE_MODAL, payload})