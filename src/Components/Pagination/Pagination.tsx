import React from 'react'

import './Pagination.scss'
import { Button } from '../Button/Button'
import { IconLeftArrow } from '../Icon/IconLeftArrow'
import { IconRightArrow } from '../Icon/IconRightArrow'

interface PaginationType {
    theme?: string
    children?: any
}

export const Pagination = ({ theme, children }: PaginationType) => {
    return (
        <div className={`pagination pagination--${theme}`}>
            <div className='wrapper'>
                <div className='pagination__body'>
                    <div className='pagination__left'>
                        <Button className='pagination__btn'><IconLeftArrow/>{'Prev'}</Button>
                    </div>
                    {children}
                    <div className='pagination__right'>
                        <Button className='pagination__btn'>{'Next'}<IconRightArrow/></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
