import { combineReducers, createStore } from 'redux'

import { likeReducer } from './likeReducer'

const rootReducer = combineReducers({
    like: likeReducer,
})

export const store = createStore(rootReducer)
