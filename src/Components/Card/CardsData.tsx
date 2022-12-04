// @ts-ignore-start
import photo from '../../assets/Astronaut.jpg'
// @ts-ignore-end

export interface CardsDataType {
    id: number
    image?: any
    title: string
    date: string
    text: string
}

const date = new Date()
const year = date.getFullYear()
const month: any = date.getMonth()
const nameMonth: any = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const day = date.getDate()

export const cardsData: CardsDataType[] = [
    {
        id: 1,
        image: photo,
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        date: `${nameMonth[month]} ${day < 10 ? '0' + day : day}, ${year}`,
        text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
    },
    {
        id: 2,
        image: photo,
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        date: `${nameMonth[month]} ${day < 10 ? '0' + day : day}, ${year}`,
        text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
    },
    {
        id: 3,
        image: photo,
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        date: `${nameMonth[month]} ${day < 10 ? '0' + day : day}, ${year}`,
        text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
    },
    {
        id: 4,
        image: photo,
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        date: `${nameMonth[month]} ${day < 10 ? '0' + day : day}, ${year}`,
        text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
    },
    {
        id: 5,
        image: photo,
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        date: `${nameMonth[month]} ${day < 10 ? '0' + day : day}, ${year}`,
        text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
    },
    {
        id: 6,
        image: photo,
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        date: `${nameMonth[month]} ${day < 10 ? '0' + day : day}, ${year}`,
        text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
    },
    {
        id: 7,
        image: photo,
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        date: `${nameMonth[month]} ${day < 10 ? '0' + day : day}, ${year}`,
        text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
    },
    {
        id: 8,
        image: photo,
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        date: `${nameMonth[month]} ${day < 10 ? '0' + day : day}, ${year}`,
        text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
    },
    {
        id: 9,
        image: photo,
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        date: `${nameMonth[month]} ${day < 10 ? '0' + day : day}, ${year}`,
        text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
    },
    {
        id: 10,
        image: photo,
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        date: `${nameMonth[month]} ${day < 10 ? '0' + day : day}, ${year}`,
        text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
    },
    {
        id: 11,
        image: photo,
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        date: `${nameMonth[month]} ${day < 10 ? '0' + day : day}, ${year}`,
        text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
    },
    {
        id: 12,
        image: photo,
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        date: `${nameMonth[month]} ${day < 10 ? '0' + day : day}, ${year}`,
        text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
    },
    {
        id: 13,
        image: photo,
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        date: `${nameMonth[month]} ${day < 10 ? '0' + day : day}, ${year}`,
        text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
    },
    {
        id: 14,
        image: photo,
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        date: `${nameMonth[month]} ${day < 10 ? '0' + day : day}, ${year}`,
        text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
    },
]