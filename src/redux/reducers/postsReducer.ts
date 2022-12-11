import {
    ADD_DISLIKE,
    ADD_FAVORITE,
    ADD_LIKE,
    IS_LOADING,
    REMOVE_DISLIKE,
    REMOVE_FAVORITE,
    REMOVE_LIKE,
    SET_COUNT_TOTAL,
    SET_POSTS,
    SET_SEARCH_VALUE,
} from '../actionTypes/postsActionTypes'

import { IPostsStore } from '../types'

export const initialState = {
    posts: [],
    favorites: [],
    countTotal: 0,
    searchValue: '',
    loading: false,
    likePosts: [],
    dislikePosts: [],
}

const postsReducer = (state: IPostsStore = initialState , action: any) => {
    switch (action.type) {

    case IS_LOADING: {
        console.log(`Текущее состояние загрузки - ${state.loading}`, `Статус загрузки сменился на - ${action.loading}`)
        return ({
            ...state,
            loading: action.loading,
        })
    }
    case SET_COUNT_TOTAL: {
        const { count } = action
        return ({
            ...state,
            countTotal: count,
        })
    }
    case SET_POSTS: {
        const { posts } = action
        return ({
            ...state,
            posts,
        })
    }
    case ADD_FAVORITE: {
        const { id } = action
        return ({
            ...state,
            favorites: [...state.favorites, id],
        })
    }
    case REMOVE_FAVORITE: {
        const { id } = action
        return ({
            ...state,
            favorites: state.favorites.filter((el) => el !== id),
        })
    }
    case ADD_LIKE: {
        const { id } = action
        return ({
            ...state,
            likePosts: [...state.likePosts, id],
        })
    }
    case REMOVE_LIKE: {
        const { id } = action
        return ({
            ...state,
            likePosts: state.likePosts.filter((el) => el !== id),
        })
    }
    case ADD_DISLIKE: {
        const { id } = action
        return ({
            ...state,
            dislikePosts: [...state.dislikePosts, id],
        })
    }
    case REMOVE_DISLIKE: {
        const { id } = action
        return ({
            ...state,
            dislikePosts: state.dislikePosts.filter((el) => el !== id),
        })
    }
    case SET_SEARCH_VALUE: {
        const { value } = action
        return ({
            ...state,
            searchValue: value,
        })
    }
    default: return state
    }
}

export { postsReducer }