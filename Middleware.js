const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreator = redux.bindActionCreators
const applyMiddleware = redux.applyMiddleware

const logger = require('redux-logger').createLogger()

const initialCakeState = {
    numOfCakes:10
}

const initialIceCreamState = {
    numOfIceCream:15
}

const orderCake = (qty = 1) => {
    return {
        type: 'Order-Cake',
        payload: qty
    }
}

const restoreCake = (qty = 10) => {
    return {
        type: 'Restore-Cakes',
        payload: qty
    }
}

const orderIceCream = (qty = 1) => {
    return {
        type: 'Order-IceCream',
        payload:qty
    }
}

const restoreIceCream = (qty = 20) => {
    return {
        type: 'Restore-IceCream',
        payload: qty
    }
}

const CakeReducer = (state = initialCakeState, action)=>{
    switch(action.type){
        case 'Order-Cake':
            return {...state,
                numOfCakes: state.numOfCakes - action.payload
            }
        case 'Restore-Cakes':
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }

        default:
            return state
    }
}

const IceCreamReducer = (state = initialIceCreamState, {type, payload})=>{
    switch(type){
        case 'Order-IceCream':
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - payload
            }
        case 'Restore-IceCream':
            return {
                ...state,
                numOfIceCream: state.numOfIceCream + payload
            }
        default:
            return state
    }
}

const combinedReducer = redux.combineReducers({cakestore:CakeReducer, iceCreamStore:IceCreamReducer})

const store = createStore(combinedReducer, applyMiddleware(logger))
const dispatch = store.dispatch;

const action = bindActionCreator({orderCake, restoreCake, orderIceCream, restoreIceCream}, dispatch)

// const unsubscribe = store.subscribe(()=>console.log(store.getState()));

action.orderCake()
action.orderCake()
action.orderCake()
action.orderCake()// 6
action.orderIceCream()
action.orderIceCream()
action.orderIceCream()
action.orderIceCream(5) // 7

action.restoreCake(14); // 20
action.restoreIceCream(23); //30

// unsubscribe();