import React, { useState } from 'react'

import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'
import './FormSignIn.scss'

export const FormSignIn = () => {
    const [email, setEmail] = useState('')
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const [password, setPassword] = useState('')
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const [error, setError] = useState(false)
    const onSubmit = (event: { preventDefault: () => any; target: any }) => {
        event.preventDefault()
        console.log(email)
        if (email.length < 0) {
            setError(true)
        }
        if (password.length < 0) {
            setError(true)
        }
    }

    return (
        <form className='form-sign-in'
            onSubmit={onSubmit}>
            <Input className='form__input'
                label='E-mail'
                placeholder='Your e-mail'
                type='email'
                error={error}
                onChange={handleEmail}
                value={email}/>
            <Input className='form__input'
                label='Password'
                type='password'
                placeholder='Your password'
                error={error}
                onChange={handlePassword}
                value={password}
            />
            <p className='form__text'>Forgot password?</p>
            <div className='form__submit'>
                <Button className='form__btn'
                    type='submit'
                    children='Sign In'/>
                <p className='submit__text'>Don`t have an account?<span>Sign Up</span></p>
            </div>
        </form>
    )
}

