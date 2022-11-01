import React from 'react'

import { Button } from '../Button/Button'
import './FormSuccess.scss'

export const FormSuccess = () => {
    return (
        <div className='wrapper'>
            <form className='form'>
                <p className='form__success'>Email confirmed.</p>
                <p className='form__success'>Your registration is now completed.</p>
                <div className='form__submit'>
                    <Button className='form__btn' type='button' children='Go to home'/>
                </div>
            </form>
        </div>
    )
}
