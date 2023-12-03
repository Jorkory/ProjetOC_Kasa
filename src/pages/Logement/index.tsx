import { useParams } from "react-router-dom"
import Slideshow from "../../components/slideshow"
import jsonData from '../../data/logements.json'
import { Navigate } from "react-router-dom"
import Collapse from "../../components/collapse"
import Rate from "../../components/rate"

function Logement() {
    const { logementId } = useParams()
    const logement = jsonData.find(element => element.id === logementId)

    if (logement === undefined) {
        return <Navigate to="/notFound" />
    }

    const pictures = logement.pictures

    return (
        <main>
            <section>
                <Slideshow pictures={pictures} />
            </section>
            <section className="logement">
                <div className="logement__location">
                    <div className="location-container">
                        <h1>{logement.title}</h1>
                        <p>{logement.location}</p>
                        <ul className="tags">{logement.tags.map((tag, index) => <li className="tags__content" key={index}>{tag}</li>)}</ul>
                    </div>
                    <div className="host-container">
                        <div className="host">
                            <div>
                                {logement.host.name.split(" ").map((name, index) => <p key={index}>{name}</p>)}
                            </div>
                            <img src={logement.host.picture} alt="" />
                        </div>
                        <Rate rating={Number(logement.rating)} />
                    </div>
                </div>
                <div className="logement__details">
                    <Collapse title="Description">
                        <p>{logement.description}</p>
                    </Collapse>
                    <Collapse title="Équipements">
                        <ul>{logement.equipments.map((list, index) => <li key={index}>{list}</li>)}</ul>
                    </Collapse>
                </div>
            </section>
        </main>
    )
}

export default Logement