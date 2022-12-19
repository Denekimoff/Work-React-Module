import { LOG_OUT, SET_USER, SIGN_UP } from '../actionTypes/userActionTypes'
import { IUser } from '../types'

const initialState = {
    username: '',
    email: '',
    password: '',
    user: null,
}

export const userReducer = (state: IUser = initialState, action: any) => {
    switch (action.type) {

    case LOG_OUT: {
        return ({
            ...state,
            user: null,
        })
    }

    case SIGN_UP: {
        return ({
            ...state,
            username: action.username,
            email: action.email,
            password: action.password,
        })
    }
    case SET_USER: {
        const { user } = action
        return ({
            ...state,
            user,
        })
    }
    default: return state
    }
}