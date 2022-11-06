import React from 'react'

import { Card } from '../Card/Card'
import { cardsData } from '../Card/CardsData'
import './Blog.scss'

const [ { dateCard, title, text, image } ] = cardsData

export const Blog = () => {
    return (
        <div className='blog__body'>
            <div className='blog__main-content'>
                <Card variant='bg' dateCard={dateCard} title={title} text={text} image={image}/>
                {cardsData.map( card => <Card variant='md' dateCard={dateCard} title={card.title} text={card.text} image={card.image}/>)}
            </div>
            <div className='blog__feat-content'>
                {cardsData.map( card => <Card variant='sm' dateCard={card.dateCard} title={card.title} text={card.text} image={card.image}/>)}
            </div>
        </div>
    )
}
