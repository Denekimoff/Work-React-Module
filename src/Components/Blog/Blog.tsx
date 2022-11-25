import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ThemeContext } from '../../contexts/contexts'
import { Card } from '../Card/Card'
import { cardsData } from '../Card/CardsData'
import { CardsDataType } from '../Card/CardsData'
import './Blog.scss'

export const Blog = () => {
    const { theme } = useContext(ThemeContext)

    const [ data, setLoadCard ] = useState<CardsDataType[]>([])
    useEffect (() => {
        setLoadCard(cardsData)
    }, [])

    const [ isAutorized, setIsAutorized ] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (isAutorized) {
            navigate('./sign_in')
        }
    }, [isAutorized])

    return (
        <div className={`blog__body blog__body--${theme}`}>
            <div className='blog__main-content'>
                {data.map( (card, i) => card === data[0] ? <Card key={i} variant='bg' dateCard={card.dateCard} title={card.title} text={card.text} image={card.image}/> : <Card key={i} variant='md' dateCard={card.dateCard} title={card.title} text={card.text} image={card.image}/>)}
            </div>
            <div className='blog__feat-content'>
                {data.map( (card, i) => <Card key={i} variant='sm' dateCard={card.dateCard} title={card.title} text={card.text} image={card.image}/>)}
            </div>
        </div>
    )
}
