import {
    put,
    takeEvery,
} from 'redux-saga/effects'

import {
    ADD_FAVORITE,
    SET_POSTS,
    LOAD_POSTS,
    REMOVE_FAVORITE,
    SET_COUNT_TOTAL,
    SET_SEARCH_VALUE,
    IS_LOADING,
    ADD_LIKE,
    REMOVE_LIKE,
    ADD_DISLIKE,
    REMOVE_DISLIKE,
    OPEN_POST,
} from '../actionTypes/postsActionTypes'

import { IPost } from '../types'

const isLoading = (loading: boolean) => ({
    type: IS_LOADING,
    loading,
})

const setSearchValue = (value: string) => ({
    type: SET_SEARCH_VALUE,
    value,
})

const setPosts = (posts: IPost[]) => ({
    type: SET_POSTS,
    posts,
})

const addFavorite = (id: number) => ({
    type: ADD_FAVORITE,
    id,
})

const removeFavorite = (id: any) => ({
    type: REMOVE_FAVORITE,
    id,
})

const addLike = (id: number) => ({
    type: ADD_LIKE,
    id,
})

const removeLike = (id: number) => ({
    type: REMOVE_LIKE,
    id,
})

const addDislike = (id: number) => ({
    type: ADD_DISLIKE,
    id,
})

const removeDislike = (id: number) => ({
    type: REMOVE_DISLIKE,
    id,
})

const openPost = (id: number) => ({
    type: OPEN_POST,
    id,
})

const loadPosts = (currentPage: number, rowsPerPage: number, searchValue: string, loading: boolean, activePost: number) => ({
    type: LOAD_POSTS,
    currentPage,
    rowsPerPage,
    searchValue,
    loading,
    activePost,
})

const setPostsTotal = (count: number) => ({
    type: SET_COUNT_TOTAL,
    count,
})

function* watcherPosts () {
    yield takeEvery(LOAD_POSTS, fetchLoadPosts)
}

function* fetchLoadPosts (datas: any) {
    window.scrollTo(0, 0)
    const { currentPage, rowsPerPage, searchValue, loading, activePost } = datas
    //Куда запхать activePost...
    yield put(isLoading(!loading))
    const responce: Response = yield fetch(`https://studapi.teachmeskills.by/blog/posts/?limit=${rowsPerPage}&offset=${(currentPage -1) * rowsPerPage}&search=${searchValue}`)
    const data: {count: number, results: IPost[]} = yield responce.json()
    const { results, count } = data
    yield put(setPostsTotal(count))
    yield put(setPosts(results))
    yield put(isLoading(!!loading))
}

export {
    setSearchValue,
    setPosts,
    addFavorite,
    removeFavorite,
    loadPosts,
    openPost,
    setPostsTotal,
    watcherPosts,
    addLike,
    removeLike,
    addDislike,
    removeDislike,
}