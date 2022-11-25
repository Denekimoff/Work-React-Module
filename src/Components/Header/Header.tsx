import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { ThemeContext } from '../../contexts/contexts'
import { Button } from '../Button/Button'
import { IconBurger } from '../Icon/IconBurger'
import { IconSearch } from '../Icon/IconSearch'
import { IconUser } from '../Icon/IconUser'
import './Header.scss'

export const Header = ({ toggleMenu }: any) => {
    const {theme} = useContext(ThemeContext)

    return (
        <header className={`header header--${theme}`}>
            <div className='header__body'>
                <div className='header__burger' onClick={toggleMenu}>
                    <Button className='header__btn'><IconBurger/></Button>
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
