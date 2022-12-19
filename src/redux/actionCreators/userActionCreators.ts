import { put,takeEvery } from 'redux-saga/effects'

import { ACTIVATE, GET_ME, LOG_OUT, SET_USER, SIGN_IN, SIGN_UP } from '../actionTypes/userActionTypes'
import { IUser, JWTResponce } from '../types'

const logOut = () => ({
    type: LOG_OUT,
})

const userSignIn = (userInfo: IUser, navigate: Function) => ({
    type: SIGN_IN,
    userInfo,
    navigate,
})

const activate = (activationInfo: any, navigate: Function) => ({
    type: ACTIVATE,
    activationInfo,
    navigate,
})

const userSignUp = (userInfo: IUser) => ({
    type: SIGN_UP,
    userInfo,
})

const setUser = (user: IUser) => ({
    type: SET_USER,
    user,
})

const getMe = () => ({
    type: GET_ME,
})

//login - kipab90625@lubde.com
//pass - testtesttest
function* fetchSignIn (action: any) {
    const { userInfo, navigate } = action
    const data: Response = yield fetch('https://studapi.teachmeskills.by/auth/jwt/create/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(userInfo),
    })
    if (data.status === 200) {
        const jwt: JWTResponce = yield data.json()
        const { access, refresh } = jwt
        localStorage.setItem('jwtAccess', access)
        localStorage.setItem('jwtRefresh', refresh)
        yield fetchUserInfo()
        navigate('/')
    } else {
        alert('No authorized')
    }
}

function* fetchActivate (action: any) {
    const { activationInfo, navigate } = action

    const data: Response = yield fetch('https://studapi.teachmeskills.by/auth/users/activation/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(activationInfo),
    })
    if (data.status < 300) {
        navigate('/success')
    } else {
        console.log('Error')
    }
}

function* fetchSignUp(action: any) {
    const { userInfo } = action
    const data: Response = yield fetch('https://studapi.teachmeskills.by/auth/users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(userInfo),
    })
    const response: IUser = yield data.json()
    console.log(response)
}

function* getToken() {
    const token = localStorage.getItem('jwtAccess')
    if (token !== 'undefined') {
        const response: Response = yield fetch('https://studapi.teachmeskills.by/auth/jwt/verify/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({ token }),
        })
        if (response.status === 200) {
            return token
        } else {
            const refreshToken = localStorage.getItem('jwtRefresh')
            const newToken: Response = yield fetch('https://studapi.teachmeskills.by/auth/jwt/refresh/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify({ refreshToken }),
            })
            const data: JWTResponce = yield newToken.json()
            const { access } = data
            localStorage.setItem('jwtAccess', access)
            return access
        }
    }
    return ''
}

function* fetchUserInfo(){
    const token: string = yield getToken()
    if (token) {
        const data: Response = yield fetch('https://studapi.teachmeskills.by/auth/users/me/', {
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `Bearer ${token}`,
            },
        })
        const user: IUser = yield data.json()
        yield put(setUser(user))
    }
}

function* watcherUser () {
    yield takeEvery(SIGN_UP, fetchSignUp)
    yield takeEvery(ACTIVATE, fetchActivate)
    yield takeEvery(SIGN_IN, fetchSignIn)
    yield takeEvery(GET_ME, fetchUserInfo)
}

export { logOut, userSignUp, watcherUser, activate, userSignIn, getMe }