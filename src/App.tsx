import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import React from 'react'

import { useDispatch } from 'react-redux'

import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { THEMES } from './constants'
import { ThemeContext } from './contexts/contexts'
import { AllCards } from './components/pages/AllCards'
import { SignIn } from './components/pages/SignIn'
import { SignUp } from './components/pages/SignUp'
import { ResetPass } from './components/pages/ResetPass'
import { NewPass } from './components/pages/NewPass'
import { Success } from './components/pages/Success'
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu'
import './App.scss'
import { Post } from './components/pages/Post'
import { Activate } from './components/Activate/Activate'
import { AddPost } from './components/pages/AddPost'

import { getMe } from './redux/actionCreators/userActionCreators'

function App () {
    const dispatch = useDispatch()
    //Состояние темы приложения
    const [theme, setTheme] = useState(THEMES.light)
    const toggleTheme = () => {
        setTheme (theme === 'light' ? THEMES.dark : THEMES.light)
    }

    React.useEffect (() => {
        dispatch(getMe())
    },[])


    //Состояние для показа меню
    const [menu, setMenu] = useState(false)
    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <div className={`App App--${theme}`}>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <BrowserRouter>
                    <Header toggleMenu={toggleMenu} menu={menu}/>
                    {menu && <BurgerMenu />}
                    <Routes>
                        <Route path='/'>
                            <Route index element={<AllCards/>} />
                            <Route path='sign_in' element={<SignIn/>} />
                            <Route path='sign_up' element={<SignUp/>} />
                            <Route path='reset_pass' element={<ResetPass/>} />
                            <Route path='new_pass' element={<NewPass/>} />
                            <Route path='success' element={<Success/>} />
                            <Route path='post' element={<Post/>} />
                            <Route path='add_post' element={<AddPost/>} />
                            <Route path='activate'>
                                <Route path='*' element={<Activate/>}/>
                            </Route>
                        </Route>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </ThemeContext.Provider>
        </div>
    )
}

export default App
