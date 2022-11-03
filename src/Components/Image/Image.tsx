
interface ImageSrc {
  image: string
  alt: string
}
export const Image = ({ image, alt }: ImageSrc) => {
    return (
        <>
            <img src={image} alt={alt} />
        </>
    )
}
