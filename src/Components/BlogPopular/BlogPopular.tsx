import { useContext} from 'react'
import { useSelector } from 'react-redux'

import { ThemeContext } from '../../contexts/contexts'
import { IPost, IStore } from '../../redux/types'
import { Card } from '../Card/Card'

export const BlogPopular = () => {
    const { theme } = useContext(ThemeContext)

    const posts = useSelector((state: IStore) => state.posts.posts)
    const postsLikeId = useSelector((state: IStore) => state.posts.likePosts)
    const newData = posts.filter((post: IPost) => postsLikeId.includes(post.id))

    return (
        <div className={`blog-favorites__body blog__body--${theme}`}>
            <div className='blog-favorites__main-content'>
                {postsLikeId ? newData.map( post => <Card key={post.id} variant='bg' id={post.id} date={post.date} title={post.title} text={post.text} image={post.image}/>) : 'Not Favorites posts '}
            </div>
        </div>
    )
}
