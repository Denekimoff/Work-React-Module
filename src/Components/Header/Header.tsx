import React from 'react'

import { Button } from '../Button/Button'
import { IconBurger } from '../Icon/IconBurger'
import { IconSearch } from '../Icon/IconSearch'
import { IconUser } from '../Icon/IconUser'
import './Header.scss'

interface HeaderType {
    className?: string
}

export const Header = ({ className }: HeaderType) => {
    return (
        <header className={`header--${className}`}>
            <div className='header__body'>
                <div className='header__burger'>
                    <Button className='header__btn'><IconBurger/></Button>
                </div>
                <div className='header__navbar'>
                    <Button className='header__btn'><IconSearch/></Button>
                    <Button className='header__btn'><IconUser/></Button>
                </div>
            </div>
        </header>
    )
}
