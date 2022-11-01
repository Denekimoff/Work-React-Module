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
        <header className={className}>
            <div className='header__body'>
                <div className='header__burger'>
                    <Button className='btn-header'><IconBurger/></Button>
                </div>
                <div className='header__navbar'>
                    <Button className='btn-header'><IconSearch/></Button>
                    <Button className='btn-header'><IconUser/></Button>
                </div>
            </div>
        </header>
    )
}
