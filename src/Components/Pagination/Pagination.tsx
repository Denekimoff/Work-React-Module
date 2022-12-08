import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from '../Button/Button'
import { IconLeftArrow } from '../Icon/IconLeftArrow'
import { IconRightArrow } from '../Icon/IconRightArrow'
import { ThemeContext } from '../../contexts/contexts'

import './Pagination.scss'


import { IStore } from '../../redux/types'
import { setCurrentPage } from '../../redux/actionCreators/settingsActionCreators'

interface PaginationType {
    dataCount: number
}

export const Pagination = ({ dataCount }: PaginationType) => {
    const {theme} = useContext(ThemeContext)
    const [isPrevDisabled, setIsPrevDisabled] = useState(false)
    const [isNextDisabled, setIsNextDisabled] = useState(false)
    const currentPage = useSelector((state: IStore) => state.settings.currentPage)
    const rowsPerPage = useSelector((state: IStore) => state.settings.rowsPerPage)
    const dispatch = useDispatch()


    useEffect(() => {
        setIsPrevDisabled(currentPage === 1)
        const count = Math.ceil(dataCount / rowsPerPage)
        setIsNextDisabled(currentPage === count)
    }, [currentPage, rowsPerPage])

    return (
        <div className={`paginations paginations--${theme}`}>
            <div className='wrapper'>
                <div className='pagination__body'>
                    <div className='pagination__left'>
                        <Button className='pagination__btn' onClick={() => dispatch(setCurrentPage(currentPage - 1))} disabled={isPrevDisabled}><IconLeftArrow/>{'Prev'}</Button>
                    </div>
                    <div>{currentPage}</div>
                    <div className='pagination__right'>
                        <Button className='pagination__btn' onClick={() => dispatch(setCurrentPage(currentPage + 1))} disabled={isNextDisabled}>{'Next'}<IconRightArrow /></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}


