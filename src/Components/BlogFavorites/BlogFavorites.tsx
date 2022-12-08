import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ThemeContext } from '../../contexts/contexts'
import { setPosts } from '../../redux/actionCreators/postsActionCreators'
import { IPost, IStore } from '../../redux/types'
import { Card } from '../Card/Card'
import { cardsData } from '../Card/CardsData'
import { Pagination } from '../Pagination/Pagination'

export const BlogFavorites = () => {
    const { theme } = useContext(ThemeContext)
    const [data, setData] = useState([] as IPost[])
    const posts = useSelector((state: IStore) => state.posts.posts)
    const dataFavoritesId = useSelector((state: IStore) => state.posts.favorites)
    const newData = posts.filter((post: IPost) => dataFavoritesId.includes(post.id))
    useEffect (() => {
        setData(newData)
    }, [dataFavoritesId])

    // Чтобы сбоку панель не скучала
    const dataSide = data.slice(6, data.length)

    return (
        <div className={`blog__body blog__body--${theme}`}>
            <div className='blog__main-content'>
                {data.length ? newData.map( post => <Card key={post.id} variant='bg' id={post.id} date={post.date} title={post.title} text={post.text} image={post.image}/>) : 'Not Favorites posts '}
            </div>
            <div className='blog__feat-content'>
                {dataSide.map( (card) => <Card key={card.id} id={card.id} variant='sm' date={card.date} title={card.title} text={card.text} image={card.image}/>)}
            </div>
            {/* <Pagination/> */}
        </div>
    )
}
