
import { put, takeEvery } from 'redux-saga/effects'

import { ADD_FAVORITE, LOAD_POSTS, REMOVE_FAVORITE, SET_COUNT_TOTAL } from '../actionTypes/postsActionTypes'

import { SET_POSTS } from '../actionTypes/postsActionTypes'

import { IPost } from '../types'



const setPosts = (posts: IPost[]) => ({
    type: SET_POSTS,
    posts,
})

const addFavorite = (id: number) => ({
    type: ADD_FAVORITE,
    id,
})

const removeFavorite = (id: number) => ({
    type: REMOVE_FAVORITE,
    id,
})

const loadPosts = (currentPage: number, rowsPerPage: number) => ({
    type: LOAD_POSTS,
    currentPage,
    rowsPerPage,
})

// const loadPosts = () => {
//     return async (dispatch: any) => {
//         const responce = await fetch(`https://studapi.teachmeskills.by/blog/posts/?offset=${(currentPage - 1) * rowsPerPage + 1}`)
//         const data = await responce.json()
//         const { results, count } = data
//         dispatch(setPosts(results))
//         dispatch(setPostsTotal(count))
//     }
// }

function* fetchLoadPosts (datas: any) {
    const { currentPage, rowsPerPage } = datas
    console.log(currentPage, rowsPerPage)
    const responce: Response = yield fetch(`https://studapi.teachmeskills.by/blog/posts/?limit=${rowsPerPage}&offset=${(currentPage -1) * rowsPerPage}`)
    const data: {count: number, results: IPost[]} = yield responce.json()
    const { results, count } = data
    yield put(setPostsTotal(count))
    yield put(setPosts(results))
}

const setPostsTotal = (count: number) => ({
    type: SET_COUNT_TOTAL,
    count,
})

function* watcherPosts () {
    yield takeEvery(LOAD_POSTS, fetchLoadPosts)
}

export {
    setPosts,
    addFavorite,
    removeFavorite,
    loadPosts,
    // fetchLoadPosts,
    setPostsTotal,
    watcherPosts,
}