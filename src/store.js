//REDUX STORE
import {createStore} from 'redux'

//initial state
const initialState = {
    test: "Startfase"
}

//reducer
function reducer(state, action){

    console.log(state, action)

    return state
}

//actions

//store = reducer + initial state
const store = createStore(reducer, initialState)

export default store