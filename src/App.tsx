import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

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
import './App.scss'

function App () {


    const onClickHome = () => {
        console.log('Go to home')
    }
    const [theme, setTheme] = useState(THEMES.light)
    const toggleTheme = () => {
        setTheme (theme === 'light' ? THEMES.dark : THEMES.light)
    }

    return (
        <div className={`App App--${theme}`}>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path='/'>
                            <Route index element={<AllCards/>} />
                            <Route path='sign_in' element={<SignIn onClickHome={onClickHome}/>} />
                            <Route path='sign_up' element={<SignUp onClickHome={onClickHome}/>} />
                            <Route path='reset_pass' element={<ResetPass onClickHome={onClickHome}/>} />
                            <Route path='new_pass' element={<NewPass onClickHome={onClickHome}/>} />
                            <Route path='success' element={<Success onClickHome={onClickHome}/>} />
                        </Route>
                    </Routes>
                    <Footer className={theme}/>
                </BrowserRouter>
            </ThemeContext.Provider>
        </div>
    )
}

export default App
