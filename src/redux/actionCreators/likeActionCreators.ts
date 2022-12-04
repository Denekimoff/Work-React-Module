import { ADD_LIKE, DISLIKE } from '../actionTypes/likeActionTypes'

let countLike = 0
let countDislike = 0

const addLike = () => ({
    type: ADD_LIKE,
    card: {
        countLike: ++countLike,
        countDislike,
    },
})

const dislike = () => ({
    type: DISLIKE,
    card: {
        countLike,
        countDislike: ++countDislike,
    },
})

export { addLike, dislike }