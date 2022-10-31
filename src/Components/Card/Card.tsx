import {Button} from '../Button/Button'
import {IconDown} from '../Icon/IconDown'
import {IconMark} from '../Icon/IconMark'
import {IconUp} from '../Icon/IconUp'
import { IconMore } from '../Icon/IconMore'
import {Image} from '../Image/Image'
import photo from '../../assets/Astronaut.jpg'
import './Card.scss'

interface dataCardtype {
    id: number
    image?: any
    title: string
    date: string
    text: string
}

export const Card = () => {
    const date = new Date()
    const id = date.getTime()
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDay()

    const dataCard: dataCardtype = {
        id,
        image: photo,
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        date: `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`,
        text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
    }

    return (
        <div className='card'>
            <div className='card__row'>
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
                    <Image image={dataCard.image}/>
                </div>
            </div>
            <div className='card__row'>
                <div className='card__like'>
                    <Button className='btn-card btn-like' icon={<IconUp/>}/>
                    <Button className='btn-card btn-dislike' icon={<IconDown/>}/>
                </div>
                <div className='card__edit'>
                    <Button className='btn-card btn-mark' icon={<IconMark/>}/>
                    <Button className='btn-card btn-edit' icon={<IconMore/>}/>
                </div>
            </div>
        </div>
    )
}
