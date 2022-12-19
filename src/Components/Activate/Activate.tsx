import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { activate } from '../../redux/actionCreators/userActionCreators'

export const Activate = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        const splittedPath = window.location.pathname.split('/')
        dispatch(activate({
            uid: splittedPath[2],
            token: splittedPath[3],
        }, navigate))
    }, [])
    return (
        <div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>Activate Acc</div>
    )
}
