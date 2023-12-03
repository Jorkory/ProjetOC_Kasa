import { ReactComponent as Star } from '../assets/star.svg'

export default function Rate(props: { rating: number }) {
    const arrayRating = [1, 2, 3, 4, 5]
    return (
        <div className='rating'>
            {arrayRating.map(element =>
                element <= props.rating ? <Star key={element} className='rating__star fill' />
                    : <Star key={element} className='rating__star' />
            )}
        </div>
    )
}