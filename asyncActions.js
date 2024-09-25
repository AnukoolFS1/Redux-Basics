const createStore = require('redux').createStore;
const applyMiddleware = require('redux').applyMiddleware;
const axios = require('axios');
const thunk = require('redux-thunk')

const initialState = {
    loading: true,
    users: [],
    error: ''
}


const Fetch_Data = (users) => {
    return {
        type: 'FETCHED_DATA',
        payload: users
    }
}

const Fetch_Data_Failed = (error) => {
    return {
        type: 'FETCHED_DATA_ERROR',
        payload: error
    }
}

const Fetch_Data_requested = () => {
    return {
        type: 'FETCHED_DATA_REQUESTED'
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCHED_DATA":
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case "FETCHED_DATA_REQUESTED":
            return {
                loading: true,
                users: [],
                error: ''
            }
        case "FETCHED_DATA_ERROR":
            return {
                loading: false,
                users: [],
                error: payload
            }
        default:
            return { ...state }
    }
}

