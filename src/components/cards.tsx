import { Link } from 'react-router-dom'
import jsonData from '../data/logements.json'

export default function Cards() {
    const data = jsonData

    return (
        <>{data.map((article) =>
            <Link key={article.id} to={"/logements/" + article.id}>
                <figure className='card'>
                    <img className='card__image' src={article.cover} alt={"Appartement"} />
                    <figcaption className='card__txt'>{article.title}</figcaption>
                </figure>
            </Link>
        )}
        </>
    )

}