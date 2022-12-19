import Breadcrumb from 'react-bootstrap/Breadcrumb'

import { Button } from '../Button/Button'
import { PageWrapper } from '../PageWrapper/PageWrapper'
import { FormCreatePost } from '../Forms/FormCreatePost/FormCreatePost'
import 'bootstrap/dist/css/bootstrap.min.css'

export const AddPost = ({ onClickHome }: any) => {
    return (
        <>
            <PageWrapper title={'Add Post'}
                button={
                    <Button className='btn' onClick={onClickHome}>{'Back to home'}</Button>
                }
                breadcrumb={<Breadcrumb>
                    <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Add Post</Breadcrumb.Item>
                </Breadcrumb>}>
                <FormCreatePost/>
            </PageWrapper>
        </>
    )
}
