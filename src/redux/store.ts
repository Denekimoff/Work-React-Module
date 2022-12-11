import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import { all } from 'redux-saga/effects'

import { postsReducer } from './reducers/postsReducer'
import { settingsReducer } from './reducers/settingsReducer'
import { watcherPosts } from './actionCreators/postsActionCreators'

const sagaMiddleware = createSagaMiddleware()
function* rootSaga () {
    yield all([
        watcherPosts(),
    ])
}
const rootReducer = combineReducers({
    posts: postsReducer,
    settings: settingsReducer,
})

export default createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)


