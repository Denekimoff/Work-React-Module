import { useContext, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { IStore } from '../../redux/types'
import { ThemeContext } from '../../contexts/contexts'
import { IconDarkTheme } from '../Icon/IconDarkTheme'
import { IconLightTheme } from '../Icon/IconLightTheme'
import './BurgerMenu.scss'
import { logOut } from '../../redux/actionCreators/userActionCreators'

export const BurgerMenu = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {theme, toggleTheme} = useContext(ThemeContext)
    const user = useSelector((state: IStore) => state.user.user)
    const handlerLogOut = () => {
        dispatch(logOut())
        localStorage.removeItem('jwtAccess')
        localStorage.removeItem('jwtRefresh')
        navigate('/sign_in')
    }


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
                        user ? (<div>
                            <button onClick={handlerLogOut}>
                                <NavLink to='/sign_in' style={{textDecoration: 'none'}}>
                                    Log Out
                                </NavLink>
                            </button>
                        </div>) : ''
                    }
                </div>
            </div>
        </div>
    )
}


