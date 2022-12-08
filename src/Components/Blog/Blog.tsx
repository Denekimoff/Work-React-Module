import { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ThemeContext } from '../../contexts/contexts'
// import { loadPosts } from '../../redux/actionCreators/postsActionCreators'
import { loadPosts, setPosts } from '../../redux/actionCreators/postsActionCreators'
import { cardsData } from '../Card/CardsData'

import { IStore } from '../../redux/types'
import { Card } from '../Card/Card'
import './Blog.scss'
import { Pagination } from '../Pagination/Pagination'

export const Blog = () => {
    const { theme } = useContext(ThemeContext)
    const dispatch = useDispatch()
    const data = useSelector((state: IStore) => state.posts.posts)
    const count = useSelector((state: IStore) => state.posts.countTotal)
    const currentPage = useSelector((state: IStore) => state.settings.currentPage)
    const rowsPerPage = useSelector((state: IStore) => state.settings.rowsPerPage)


    useEffect (() => {
        dispatch(loadPosts(currentPage, rowsPerPage))
        // dispatch(setPosts(cardsData))
    }, [currentPage, rowsPerPage])


    const newData = data.slice(0, 6)
    const dataSide = data.slice(6, data.length)

    return (
        <div className={`blog__body blog__body--${theme}`}>
            <div className='blog__main-content'>
                {data.map( (card) => card === data[0] ? <Card key={card.id} variant='bg' id={card.id} date={card.date} title={card.title} text={card.text} image={card.image}/> : <Card key={card.id} variant='md' id={card.id} date={card.date} title={card.title} text={card.text} image={card.image}/>)}
            </div>
            <div className='blog__feat-content'>
                {dataSide.map( (card) => <Card key={card.id} id={card.id} variant='sm' date={card.date} title={card.title} text={card.text} image={card.image}/>)}
            </div>
            <Pagination dataCount={count}/>
        </div>
    )
}



