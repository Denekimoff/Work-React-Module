import React from 'react'

import { Button } from '../Button/Button'
import './Tabs.scss'

interface TabsType {
  theme?: string
}

export const Tabs = ({ theme }: TabsType) => {
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
