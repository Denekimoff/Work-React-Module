import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { ThemeContext } from '../../contexts/contexts'
import { Button } from '../Button/Button'
import { IconBurger } from '../Icon/IconBurger'
import { IconSearch } from '../Icon/IconSearch'
import { IconUser } from '../Icon/IconUser'
import './Header.scss'

export const Header = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <header className={`header header--${theme}`}>
            <div className='header__body'>
                <div className='header__burger'>
                    <Button className='header__btn' onClick={toggleTheme}><IconBurger/></Button>
                </div>
                <div className='header__navbar'>
                    <Button className='header__btn'><IconSearch/></Button>
                    <Button className='header__btn'>
                        <NavLink style={{textDecoration: 'none'}} to={'/sign_in'}>
                            <IconUser/>
                        </NavLink>
                    </Button>
                </div>
            </div>
        </header>
    )
}
