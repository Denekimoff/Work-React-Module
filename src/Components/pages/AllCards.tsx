import { useSelector } from 'react-redux'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

import { Blog } from '../Blog/Blog'
import { BlogFavorites } from '../BlogFavorites/BlogFavorites'
import { PageWrapper } from '../PageWrapper/PageWrapper'
import { Pagination } from '../Pagination/Pagination'
import { PaginationCenterLinks } from '../PaginationCenterLinks/PaginationCenterLinks'
import { Tabs } from '../Tabs/Tabs'
import { IStore } from '../../redux/types'
import 'bootstrap/dist/css/bootstrap.min.css'

export const AllCards = () => {
    //Состояние активной вкладки ТАБ
    const activeTab = useSelector((state: IStore) => state.settings.activeTab)

    return (
        <>
            <PageWrapper title={'Blog'}
                breadcrumb={<Breadcrumb>
                    <Breadcrumb.Item active>Home</Breadcrumb.Item>
                </Breadcrumb>}>
                <Tabs/>
                {activeTab.includes('All') ? <Blog/> : <BlogFavorites/>}
                {/* <Pagination>
                    <PaginationCenterLinks/>
                </Pagination> */}
            </PageWrapper>
        </>
    )
}
