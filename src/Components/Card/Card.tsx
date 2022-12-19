import {
    useContext,
} from 'react'
import {
    useDispatch,
    useSelector,
} from 'react-redux'
import { Link } from 'react-router-dom'

import {
    activePostId,
    addDislike,
    addFavorite,
    addLike,
    removeDislike,
    removeFavorite,
    removeLike,
} from '../../redux/actionCreators/postsActionCreators'
import { IPost, IStore } from '../../redux/types'
import { ThemeContext } from '../../contexts/contexts'
import { Button } from '../Button/Button'
import { IconDown } from '../Icon/IconDown'
import { IconMark } from '../Icon/IconMark'
import { IconUp } from '../Icon/IconUp'
import { IconMore } from '../Icon/IconMore'
import { Image } from '../Image/Image'

import './Card.scss'

interface ICard extends IPost {
    variant: string
}

export const Card = ({ variant, date, title, text, image, id }: ICard) => {
    const {theme} = useContext(ThemeContext)
    const dispatch = useDispatch()

    const favorites = useSelector((state: IStore) => state.posts.favorites)
    const likePosts = useSelector((state: IStore) => state.posts.likePosts)
    const dislikePosts = useSelector((state: IStore) => state.posts.dislikePosts)

    const isIncludeMark = favorites.includes(id)
    const isIncludeLike = likePosts.includes(id)
    const isIncludeDislike = dislikePosts.includes(id)

    const handlerToggleFavorite = () => dispatch(isIncludeMark ? removeFavorite(id) : addFavorite(id))
    const handlerToggleLike = () => dispatch(isIncludeLike ? removeLike(id) : addLike(id))
    const handlerToggleDislike = () => dispatch(isIncludeDislike ? removeDislike(id) : addDislike(id))

    return (
        <div className={`card--${variant} card--${theme}`}>
            <Link to={'/post'} onClick={() => dispatch(activePostId(id))}>
                <div className='card__main'>
                    <div className='card__info'>
                        <div className='card__date'>
                            {date}
                        </div>
                        <div className='card__title'>
                            <h3>{title}</h3>
                        </div>
                        <div className='card__description'>
                            {text}
                        </div>
                    </div>
                    <div className='card__image'>
                        <Image image={image} alt={title}/>
                    </div>
                </div>
            </Link>
            <div className='card__footer'>
                <div className='card__like'>
                    <Button className='btn-card btn-like' onClick={handlerToggleLike} icon={<IconUp isLike={
                        isIncludeLike ? 'like' : 'unlike'
                    }/>}/>
                    <Button className='btn-card btn-dislike' onClick={handlerToggleDislike} icon={<IconDown isDislike={isIncludeDislike ? 'dislike' : 'undislike'}/>}/>
                </div>
                <div className='card__edit'>
                    <Button className='btn-card btn-mark' icon={<IconMark color={isIncludeMark ? 'tomato' : 'black'}/>} onClick={handlerToggleFavorite}/>
                    <Button className='btn-card btn-edit' icon={<IconMore/>}/>
                </div>
            </div>
        </div>
    )
}
