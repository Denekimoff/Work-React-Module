import { useState } from 'react'

import {Button} from '../Button/Button'
import {IconDown} from '../Icon/IconDown'
import {IconMark} from '../Icon/IconMark'
import {IconUp} from '../Icon/IconUp'
import { IconMore } from '../Icon/IconMore'
import {Image} from '../Image/Image'
// @ts-ignore-start
import photo from '../../assets/Astronaut.jpg'
// @ts-ignore-end
import './Card.scss'

interface CardType {
    className?: string
}

interface dataCardtype {
    id: number
    image?: any
    title: string
    date: string
    text: string
}

export const Card = ({ className }: CardType) => {
    const date = new Date()
    const id = date.getTime()
    const year = date.getFullYear()
    const month: any = date.getMonth()
    const nameMonth: any = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const day = date.getDate()

    const dataCard: dataCardtype = {
        id,
        image: photo,
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        date: ` ${nameMonth[month]} ${day < 10 ? '0' + day : day}, ${year}`,
        text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
    }

    const [count, setCount] = useState(0)
    const onClick = () => setCount(count + 1)
    const countstr = count === 0 ? ' ' : count
    const [count2, setCount2] = useState(0)
    const onClick2 = () => setCount2(count2 + 1)
    const countstr2 = count2 === 0 ? ' ' : count2

    return (
        <div className={`card--${className ? className : ''}`}>
            <div className='card__main'>
                <div className='card__info'>
                    <div className='card__date'>
                        {dataCard.date}
                    </div>
                    <div className='card__title'>
                        <h3>{dataCard.title}</h3>
                    </div>
                    <div className='card__description'>
                        {dataCard.text}
                    </div>
                </div>
                <div className='card__image'>
                    <Image image={dataCard.image} alt={dataCard.title}/>
                </div>
            </div>
            <div className='card__footer'>
                <div className='card__like'>
                    <Button className='btn-card btn-like' onClick={onClick} icon={<IconUp/>}>{countstr}</Button>
                    <Button className='btn-card btn-dislike' onClick={onClick2} icon={<IconDown/>}>{countstr2}</Button>
                </div>
                <div className='card__edit'>
                    <Button className='btn-card btn-mark' icon={<IconMark/>}/>
                    <Button className='btn-card btn-edit' icon={<IconMore/>}/>
                </div>
            </div>
        </div>
    )
}
