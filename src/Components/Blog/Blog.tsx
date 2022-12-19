import { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loadPosts } from '../../redux/actionCreators/postsActionCreators'
import { IStore } from '../../redux/types'
import { ThemeContext } from '../../contexts/contexts'

import { Card } from '../Card/Card'
import './Blog.scss'
import { CardSkeleton } from '../Card/CardSkeleton'

export const Blog = () => {
    const { theme } = useContext(ThemeContext)
    const dispatch = useDispatch()
    const data = useSelector((state: IStore) => state.posts.posts)
    const currentPage = useSelector((state: IStore) => state.settings.currentPage)
    const rowsPerPage = useSelector((state: IStore) => state.settings.rowsPerPage)
    const searchValue = useSelector((state: IStore) => state.posts.searchValue)
    const loading = useSelector((state: IStore) => state.posts.loading)
    const activePost = useSelector((state: IStore) => state.posts.activePost)

    useEffect (() => {
        dispatch(loadPosts(currentPage, rowsPerPage, searchValue, loading, activePost))
    }, [currentPage, rowsPerPage, searchValue, activePost])

    const newData = data.slice(0, 6)
    const dataSide = data.slice(6, data.length)

    return (
        <div className={`blog__body blog__body--${theme}`}>
            <div className='blog__main-content'>
                {
                    loading ? [...new Array(3)].map((_, i) => <CardSkeleton key={i}/>) : newData.map(card => card === data[0] ? <Card key={card.id} variant='bg' id={card.id} date={card.date} title={card.title} text={card.text} image={card.image}/> : <Card key={card.id} variant='md' id={card.id} date={card.date} title={card.title} text={card.text} image={card.image}/>)
                }
            </div>
            <div className='blog__feat-content'>
                {dataSide.map( (card) => <Card key={card.id} id={card.id} variant='sm' date={card.date} title={card.title} text={card.text} image={card.image}/>)}
            </div>
        </div>
    )
}



