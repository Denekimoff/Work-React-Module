import { Breadcrumb, Pagination } from 'react-bootstrap'

import { BlogPost } from '../BlogPost/BlogPost'
import { PageWrapper } from '../PageWrapper/PageWrapper'


export const Post = () => {
    return (
        <PageWrapper
            breadcrumb={<Breadcrumb>
                <Breadcrumb.Item active>Home</Breadcrumb.Item>
            </Breadcrumb>}>
            <BlogPost/>
            <Pagination/>
        </PageWrapper>
    )
}
