import ContentLoader from 'react-content-loader'

export const CardSkeleton = () => (
    <ContentLoader
        speed={2}
        width={780}
        height={375}
        viewBox='0 0 1000 400'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
    >
        <rect x='36' y='131' rx='0' ry='0' width='0' height='2' /> 
        <rect x='5' y='2' rx='0' ry='0' width='110' height='20' /> 
        <rect x='3' y='34' rx='0' ry='0' width='261' height='53' /> 
        <rect x='2' y='104' rx='0' ry='0' width='261' height='234' /> 
        <rect x='6' y='355' rx='0' ry='0' width='40' height='40' /> 
        <rect x='52' y='355' rx='0' ry='0' width='40' height='40' /> 
        <rect x='501' y='357' rx='0' ry='0' width='40' height='40' /> 
        <rect x='548' y='357' rx='0' ry='0' width='40' height='40' /> 
        <rect x='273' y='34' rx='0' ry='0' width='335' height='305' />
    </ContentLoader>
)
