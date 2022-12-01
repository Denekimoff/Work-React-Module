import { ADD_LIKE } from '../actions/actionTypes'
import { DISLIKE } from '../actions/actionTypes'

const initialState = {
    cards: [],
}

export const likeReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
    case ADD_LIKE : {
        return ({
            ...state,
            cards: [...state.cards, action.card]})
    }
    case DISLIKE: {
        return ({
            ...state,
            cards: [...state.cards, action.card]})
    }
    default:
        return state
    }
}
