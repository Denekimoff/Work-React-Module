import { useDispatch, useSelector } from 'react-redux'

import { setSearchValue } from '../../redux/actionCreators/postsActionCreators'
import { IStore } from '../../redux/types'

import './SearchPosts.scss'

export const SearchPosts = ({ disabled }: any) => {
    const searchValue = useSelector((state: IStore) => state.posts.searchValue)
    const dispatch = useDispatch()
    const handlerInputChange = (e: any) => dispatch(setSearchValue(e.target.value))
    const handlerInputClear = () => dispatch(setSearchValue(''))

    return (
        <div className='search__body'>
            {
                searchValue && (<svg onClick={handlerInputClear} className='clear__inner' height='16' viewBox='0 0 48 48' width='16' xmlns='http://www.w3.org/2000/svg'><path d='M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z'/><path d='M0 0h48v48h-48z' fill='none'/></svg>)
            }
            <input
                className='search__input'
                disabled={disabled}
                value={searchValue}
                onChange={handlerInputChange}
                placeholder='Поиск постов...'
            />
        </div>
    )
}
