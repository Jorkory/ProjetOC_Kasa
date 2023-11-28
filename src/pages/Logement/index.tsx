import { useParams } from "react-router-dom"

function Logement() {
    const logementId = useParams()

    return (
        <>
            Logement
        </>
    )
}

export default Logement