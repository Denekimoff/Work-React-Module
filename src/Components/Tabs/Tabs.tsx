import { useContext } from 'react'

import { ThemeContext } from '../../contexts/contexts'

import { Button } from '../Button/Button'
import './Tabs.scss'



export const Tabs = () => {
    const {theme} = useContext(ThemeContext)

    return (
        <div className={`tabs tabs--${theme}`}>
            <div className='wrapper'>
                <div className='tabs__body'>
                    <Button className='tabs__btn'>All</Button>
                    <Button className='tabs__btn'>My favorites</Button>
                    <Button className='tabs__btn'>Popular</Button>
                </div>
            </div>
        </div>
    )
}
