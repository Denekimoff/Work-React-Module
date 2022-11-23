import { useEffect, useState } from 'react'

import { Card } from '../Card/Card'
import { cardsData } from '../Card/CardsData'
import { CardsDataType } from '../Card/CardsData'
import './Blog.scss'

interface BlogType {
    theme?: string
}

export const Blog = ({ theme }: BlogType) => {
    const [ data, setLoadCard ] = useState<CardsDataType[]>([])

    useEffect (() => {
        setLoadCard(cardsData)
    }, [])

    return (
        <div className={`blog__body blog__body--${theme}`}>
            <div className='blog__main-content'>
                {data.map( card => card === data[0] ? <Card variant='bg' dateCard={card.dateCard} title={card.title} text={card.text} image={card.image}/> : <Card variant='md' dateCard={card.dateCard} title={card.title} text={card.text} image={card.image}/>)}
            </div>
            <div className='blog__feat-content'>
                {data.map( card => <Card variant='sm' dateCard={card.dateCard} title={card.title} text={card.text} image={card.image}/>)}
            </div>
        </div>
    )
}
