import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'

import { userSignUp } from '../../../redux/actionCreators/userActionCreators'

import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'
import '../Form.scss'

export const FormSignUp = () => {
    const dispatch = useDispatch()
    const [error, setError] = useState(false)
    const onSubmit = (event: { preventDefault: () => any; target: any }) => {
        event.preventDefault()
        if (event.target < 0) {
            setError(true)
        } else {
            setError(false)
            dispatch(userSignUp({
                username: event.target[1].value,
                email: event.target[3].value,
                password: event.target[5].value,
            }))
        }
    }

    return (
        <form className='form' onSubmit={onSubmit}>
            <Input className='form__input' label='Name' placeholder='Your name' type='text'/>
            <Input className='form__input' label='E-mail' placeholder='Your e-mail' type='email'/>
            <Input className='form__input' label='Password' type='password' placeholder='Your password'/>
            <Input className='form__input' label='Confirm password' type='password' placeholder='Confirm password'/>
            <div className='form__submit'>
                <Button className='form__btn' type='submit' children='Sign Up'/>
                <p className='submit__text'>Already have an account?
                    <NavLink style={{textDecoration: 'none'}} to='/sign_in'>
                        <span>Sign In</span>
                    </NavLink>
                </p>
            </div>
        </form>
    )
}


