/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'

import './App.scss'
import { Button } from './components/Button/Button'
import { Header } from './components/Header/Header'
import { AuthPageWrapper } from './components/AuthPageWrapper/AuthPageWrapper'
import { Blog } from './components/Blog/Blog'
import { Footer } from './components/Footer/Footer'
import { Pagination } from './components/Pagination/Pagination'
import { Tabs } from './components/Tabs/Tabs'
import { PaginationCenterLinks } from './components/PaginationCenterLinks/PaginationCenterLinks'
import { FormSignIn } from './components/FormSignIn/FormSignIn'
import { FormSignUp } from './components/FormSignUp/FormSignUp'
import { FormSuccess } from './components/FormSuccess/FormSuccess'

// Test LOAD Card
import { data } from './assets/data'
import { CardTest } from './components/Card/CardTest'
import './components/Card/Card.scss'

function App () {

    // Test LOAD Card |
    interface dataTypes {
        id?: number;
    image?: string;
    text?: string;
    date?: string;
    lesson_num?: number;
    title?: string;
    author?: number;
    }

    const [ data1, setLoadCard ] = useState<dataTypes[]>([])

    useEffect (() => {
        setLoadCard(data)
    }, [])
    // Test LOAD Card |

    const onClickHome = () => {
        console.log('Go to home')
    }

    return (
        <div className='App'>
            {/* All Cards */}
            <Header/>
            <AuthPageWrapper title={'Blog'} theme={'white'}>
                <Tabs/>
                <Blog/>
                <Pagination>
                    <PaginationCenterLinks/>
                </Pagination>
            </AuthPageWrapper>
            <Footer/>

            {/* Sign In */}
            <Header/>
            <AuthPageWrapper title={'Sign In'} theme={'white'} button={
                <Button className='btn' onClick={onClickHome}>{'Back to home'}</Button>
            }>
                <FormSignIn/>
            </AuthPageWrapper>
            <Footer/>

            {/* Sign Up */}
            <Header/>
            <AuthPageWrapper title={'Sign Up'} theme={'white'} button={
                <Button className='btn' onClick={onClickHome}>{'Back to home'}</Button>
            }>
                <FormSignUp/>
            </AuthPageWrapper>
            <Footer/>

            {/* Success */}
            <Header/>
            <AuthPageWrapper title={'Success'} theme={'white'} button={
                <Button className='btn' onClick={onClickHome}>{'Back to home'}</Button>
            }>
                <FormSuccess/>
            </AuthPageWrapper>
            <Footer/>

            {/* Test Load Cards */}
            <Header/>
            <AuthPageWrapper title={'Test LOAD Cards'}>
                <div className='wrapper'>
                    {data1.map(({ id, image, title, text, date }) => (
                        <CardTest key={id} image={image} title={title} text={text} date={date} className='bg' />
                    ))}
                </div>
            </AuthPageWrapper>
        </div>
    )
}

export default App
