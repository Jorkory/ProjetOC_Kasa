import { Link } from 'react-router-dom'
import jsonData from '../data/logements.json'

export default function Card() {
    const data = jsonData

    return (
        <>{data.map((article) =>
            <Link key={article.id} to={"/logements/" + article.id}>
                <figure className='article'>
                    <img className='article__image' src={article.cover} alt={"Appartement"} />
                    <figcaption className='article__txt'>{article.title}</figcaption>
                </figure>
            </Link>
        )}
        </>
    )

}