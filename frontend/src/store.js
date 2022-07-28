import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { postsReducer } from './reducers/postReducers'

const reducer = combineReducers({
    posts: postsReducer
})

let initialState = {}

// making store 
const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;