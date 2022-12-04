import { ADD_LIKE, DISLIKE } from '../actionTypes/likeActionTypes'
import { IPostsStore } from '../types'

import { initialState } from './postsReducer'

export const likeReducer = (state: IPostsStore = initialState, action: any) => {
    switch (action.type) {
    case ADD_LIKE : {
        const newState = [...state.posts]
        const { id } = action.posts
        const postIndex = newState.findIndex(p => p.id === id)
        const post = newState.find(p => p.id === id)
        const newPost = {
            ...post,
            likes: false,
        }
        //! Добавить объект третьим аргументом ???
        const likeState = newState.splice(postIndex, 1)

        return ({
            ...state, ...state.posts, likeState,
        })
    }
    case DISLIKE: {
        const newState = [...state.posts]
        const { id } = action.posts
        const postIndex = newState.findIndex(p => p.id === id)
        const post = newState.find(p => p.id === id)
        const newPost = {
            ...post,
            dislike: false,
        }
        //! Добавить объект третьим аргументом ???
        const dislikeState = newState.splice(postIndex, 1)


        return ({
            ...state, ...state.posts, dislikeState,
        })
    }
    default:
        return state
    }
}
