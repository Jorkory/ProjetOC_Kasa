export default function Banner(props: { title?: string; image: string; alt: string }) {

    return (
        <>
            <img className='banner__image' src={props.image} alt={props.alt} />
            {props.title && <h1 className='banner__title' dangerouslySetInnerHTML={{ __html: props.title }}></h1>}
        </>
    )
}