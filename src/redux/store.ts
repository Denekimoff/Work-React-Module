import { createStore, combineReducers } from 'redux'

import { postsReducer } from './reducers/postsReducer'
import { settingsReducer } from './reducers/settingsReducer'
import { likeReducer } from './reducers/likeReducer'

const rootReducer = combineReducers({
    posts: postsReducer,
    settings: settingsReducer,
    like: likeReducer,
})

export default createStore(rootReducer)