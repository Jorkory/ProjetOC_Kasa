export default function Banner(Props: { title?: string; image: string; alt: string }) {

    return (
        <>
            <img className='banner__image' src={Props.image} alt={Props.alt} />
            <h1 className='banner__title'>{Props.title}</h1>
        </>
    )
}