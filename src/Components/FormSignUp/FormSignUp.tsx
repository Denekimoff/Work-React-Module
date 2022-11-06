import { useState } from 'react'

import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import './FormSignUp.scss'

export const FormSignUp = () => {
    const [error, setError] = useState(false)
    const onSubmit = (event: { preventDefault: () => any; target: any }) => {
        event.preventDefault()
        if (event.target < 0) {
            setError(true)
        } else {
            setError(false)
        }
    }

    return (
        <form className='form-sign-up' onSubmit={onSubmit}>
            <Input className='form__input' label='Name' placeholder='Your name' type='text'/>
            <Input className='form__input' label='E-mail' placeholder='Your e-mail' type='email'/>
            <Input className='form__input' label='Password' type='password' placeholder='Your password'/>
            <Input className='form__input' label='Confirm password' type='password' placeholder='Confirm password'/>
            <div className='form__submit'>
                <Button className='form__btn' type='submit' children='Sign In'/>
                <p className='submit__text'>Don`t have an account?<span>Sign Up</span></p>
            </div>
        </form>
    )
}