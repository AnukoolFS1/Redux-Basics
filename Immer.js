const redux = require('redux');
const createStore = redux.createStore;
const produce = require('immer').produce


const initialStage = {
    name: 'Anukool',
    address: {
        street: 'Local col',
        location: 'Chhatterpur',
        state: 'New Delhi'
    }
}

const updateStreet = () => {
    return {
        type: 'Update_street',
        payload: "higher complex"
    }
}

// const reducer = (state = initialStage, { type, payload })=>{
//     switch (type) {
//         case 'Update_street':
//             return {
//                 ...state,
//                 address: {
//                     ...state.address,
//                     street: payload
//                 }
//             }
//         default:
//             return state
//     }
// }

const reducer = (state = initialStage, { type, payload })=>{
    switch (type) {
        case 'Update_street':
            return produce(state, (draft)=>{
                 draft.address.street = payload
            })
        default:
            return state
    }
}

const store = createStore(reducer);

const unsubscribe = store.subscribe(()=>console.log(store.getState()))

store.dispatch(updateStreet())

unsubscribe()