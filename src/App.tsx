/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'

import './App.scss'
import { Button } from './components/Button/Button'
import { Header } from './components/Header/Header'
import { PageWrapper } from './components/PageWrapper/PageWrapper'
import { Blog } from './components/Blog/Blog'
import { Footer } from './components/Footer/Footer'
import { Pagination } from './components/Pagination/Pagination'
import { Tabs } from './components/Tabs/Tabs'
import { PaginationCenterLinks } from './components/PaginationCenterLinks/PaginationCenterLinks'
import { FormSignIn } from './components/Forms/FormSignIn/FormSignIn'
import { FormSignUp } from './components/Forms/FormSignUp/FormSignUp'
import { FormSuccess } from './components/Forms/FormSuccess/FormSuccess'
import { FormResetPassword } from './components/Forms/FormResetPassword/FormResetPassword'
import { FormNewPassword } from './components/Forms/FormNewPassword/FormNewPassword'
import { THEMES } from './constants'
import { ThemeContext } from './contexts/contexts'
import { Div } from './components/Div/Div'

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

                {/* All Cards */}
                <Header theme={theme} toggleTheme={toggleTheme}/>
                <PageWrapper title={'Blog'} theme={theme}>
                    <Tabs theme={theme}/>
                    <Blog theme={theme}/>
                    <Pagination theme={theme}>
                        <PaginationCenterLinks/>
                    </Pagination>
                </PageWrapper>
                <Footer className={theme}/>

                {/* Sign In */}
                <Header theme={theme} toggleTheme={toggleTheme}/>
                <PageWrapper title={'Sign In'} theme={theme} button={
                    <Button className='btn' onClick={onClickHome}>{'Back to home'}</Button>
                }>
                    <FormSignIn/>
                </PageWrapper>
                <Footer/>

                {/* Sign Up */}
                <Header theme={theme} toggleTheme={toggleTheme}/>
                <PageWrapper title={'Sign Up'} theme={theme} button={
                    <Button className='btn' onClick={onClickHome}>{'Back to home'}</Button>
                }>
                    <FormSignUp/>
                </PageWrapper>
                <Footer/>

                {/* Reset Password */}
                <Header theme={theme} toggleTheme={toggleTheme}/>
                <PageWrapper title={'Reset Password'} theme={theme} button={
                    <Button className='btn' onClick={onClickHome}>{'Back to home'}</Button>
                }>
                    <FormResetPassword/>
                </PageWrapper>
                <Header theme={theme} toggleTheme={toggleTheme}/>

                {/* New Password */}
                <Header theme={theme} toggleTheme={toggleTheme}/>
                <PageWrapper title={'New Password'} theme={theme} button={
                    <Button className='btn' onClick={onClickHome}>{'Back to home'}</Button>
                }>
                    <FormNewPassword/>
                </PageWrapper>
                <Footer/>

                {/* Success */}
                <Header theme={theme} toggleTheme={toggleTheme}/>
                <PageWrapper title={'Success'} theme={theme} button={
                    <Button className='btn' onClick={onClickHome}>{'Back to home'}</Button>
                }>
                    <FormSuccess/>
                </PageWrapper>
                <Footer/>
            </ThemeContext.Provider>
            {/* <Div></Div> */}

        </div>
    )
}

export default App
