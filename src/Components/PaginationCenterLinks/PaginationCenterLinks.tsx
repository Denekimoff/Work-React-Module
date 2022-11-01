import React from 'react'

import { Button } from '../Button/Button'

export const PaginationCenterLinks = () => {
    return (
        <div className='pagination__center'>
            <Button className='btn-pagination'>1</Button>
            <Button className='btn-pagination'>2</Button>
            <Button className='btn-pagination'>3</Button>
            <Button className='btn-pagination'>4</Button>
            <Button className='btn-pagination'>...</Button>
            <Button className='btn-pagination'>6</Button>
        </div>
    )
}
