import React from 'react'

import './Pagination.scss'
import { Button } from '../Button/Button'
import { IconLeftArrow } from '../Icon/IconLeftArrow'
import { IconRightArrow } from '../Icon/IconRightArrow'

interface PaginationType {
  className?: string
  children?: any
}

export const Pagination = ({ className, children }: PaginationType) => {
    return (
        <div className={className}>
            <div className='wrapper'>
                <div className='pagination__body'>
                    <div className='pagination__left'>
                        <Button className='btn-pagination'><IconLeftArrow/> Prev</Button>
                    </div>
                    {children}
                    <div className='pagination__right'>
                        <Button className='btn-pagination'>Next <IconRightArrow/></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
