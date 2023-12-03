import { Link } from 'react-router-dom'
import jsonData from '../data/logements.json'

export default function Cards() {

    return (
        <>{jsonData.map((element) =>
            <Link key={element.id} to={"/logements/" + element.id}>
                <figure className='card'>
                    <img className='card__image' src={element.cover} alt={"Appartement"} />
                    <figcaption className='card__txt'>{element.title}</figcaption>
                </figure>
            </Link>
        )}
        </>
    )

}