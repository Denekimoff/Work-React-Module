import React from 'react'

import { Button } from '../Button/Button'
import './Tabs.scss'

interface TabsType {
  className?: string
}

export const Tabs = ({ className }: TabsType) => {
    return (
        <div className={className}>
            <div className='wrapper'>
                <div className='tabs__body'>
                    <Button className='btn-tab'>All</Button>
                    <Button className='btn-tab'>My favorites</Button>
                    <Button className='btn-tab'>Popular</Button>
                </div>
            </div>
        </div>
    )
}
