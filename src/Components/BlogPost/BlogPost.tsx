import { useSelector } from 'react-redux'

import { IStore } from '../../redux/types'
import { Card } from '../Card/Card'
import { CardSkeleton } from '../Card/CardSkeleton'

export const BlogPost = () => {
    const data = useSelector((state: IStore) => state.posts.posts)
    const newdata = [...data]
    const activePostId = useSelector((state: IStore) => state.posts.activePost)
    const post = newdata.filter(post => post.id === activePostId)
    return (
        <>
            {post.map((card) => <Card key={card.id} id={card.id} variant='sm' date={card.date} title={card.title} text={card.text} image={card.image}/>)}
        </>
    )
}
