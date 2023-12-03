import { useParams } from "react-router-dom"
import Slideshow from "../../components/slideshow"
import jsonData from '../../data/logements.json'
import { Navigate } from "react-router-dom"

function Logement() {
    const { logementId } = useParams()
    const logement = jsonData.find(element => element.id === logementId)

    if (logement === undefined) {
        return <Navigate to="/notFound" />
    }

    const pictures = logement.pictures

    return (
        <main>
            <Slideshow pictures={pictures} />
        </main>
    )
}

export default Logement