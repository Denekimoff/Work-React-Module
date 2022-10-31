
interface ImageSrc {
  image: string
}
export const Image = ({ image }: ImageSrc) => {
    return (
        <>
            <img src={image} alt='avatar' />
        </>
    )
}
