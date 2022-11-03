/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.scss'
import { Button } from './Components/Button/Button'
import { Header } from './Components/Header/Header'
import { AuthPageWrapper } from './Components/AuthPageWrapper/AuthPageWrapper'
import { Blog } from './Components/Blog/Blog'
import { Footer } from './Components/Footer/Footer'
import { Pagination } from './Components/Pagination/Pagination'
import { Tabs } from './Components/Tabs/Tabs'
import { PaginationCenterLinks } from './Components/PaginationCenterLinks/PaginationCenterLinks'
import { Form } from './Components/Form/Form'
import { FormSuccess } from './Components/FormSuccess/FormSuccess'

function App () {

    return (
        <div className='App'>
            {/* All Cards */}
            <Header className='header'/>
            <AuthPageWrapper title={'Blog'} theme={'white'}>
                <Tabs/>
                <Blog/>
                <Pagination>
                    <PaginationCenterLinks/>
                </Pagination>
            </AuthPageWrapper>
            <Footer className='footer'/>

            {/* Sign Up */}
            <Header className='header'/>
            <AuthPageWrapper title={'Sign In'} theme={'white'} button={<Button className='btn'>Back to home</Button>}>
                <Form/>
            </AuthPageWrapper>
            <Footer className='footer'/>

            {/* Success */}
            <Header className='header'/>
            <AuthPageWrapper title={'Success'} theme={'white'} button={<Button className='btn'>Back to home</Button>}>
                <FormSuccess/>
            </AuthPageWrapper>
            <Footer className='footer'/>
        </div>
    )
}

export default App
