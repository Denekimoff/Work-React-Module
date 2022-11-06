import React from 'react'

import { Button } from '../Button/Button'
import './Tabs.scss'

interface TabsType {
  className?: string
}

export const Tabs = ({ className }: TabsType) => {
    return (
        <div className={`tabs--${className}`}>
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
