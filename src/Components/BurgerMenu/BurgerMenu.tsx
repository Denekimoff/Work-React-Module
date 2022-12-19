import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { IStore } from '../../redux/types'
import { ThemeContext } from '../../contexts/contexts'
import { IconDarkTheme } from '../Icon/IconDarkTheme'
import { IconLightTheme } from '../Icon/IconLightTheme'
import './BurgerMenu.scss'

export const BurgerMenu = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
    const user = useSelector((state: IStore) => state.user.user)

    return (
        <div className={`burger-menu burger-menu--${theme}`}>
            <div className='burger-menu__row'>
                <div className='burger-menu__user'>
                    {
                        user ? (<span>{`${user.username?.charAt(0).toUpperCase()}${user.username?.charAt(user.username.length - 1).toUpperCase()}`}</span>) : ''
                    }
                    { user ? user.username : <NavLink to='/sign_in' style={{textDecoration: 'none'}}>Sign In</NavLink>}
                </div>
                <div className='burger-menu__link'>
                    <NavLink to='/' style={{textDecoration: 'none'}}>Home</NavLink>
                </div>
                <div className='burger-menu__link'>
                    <NavLink to='/add_post' style={{textDecoration: 'none'}}>Add post</NavLink>
                </div>
                <span></span>
            </div>
            <div className='burger-menu__row'>
                <div className='burger-menu__theme'>
                    <div className='burger-menu__light' onClick={toggleTheme}>
                        <IconLightTheme />
                    </div>
                    <div className='burger-menu__dark' onClick={toggleTheme}>
                        <IconDarkTheme />
                    </div>
                </div>
                <div className='burger-menu__link'>
                    {
                        user ? (<div><NavLink to='/sign_in' style={{textDecoration: 'none'}}>Log Out</NavLink></div>) : ''
                    }
                </div>
            </div>
        </div>
    )
}
