import bannerImage from '../../assets/montagne.jpg'
import Banner from "../../components/banner";

function Propos() {
    return (
        <main>
            <section className='banner'>
                <Banner image={bannerImage} alt="montagne avec rivière" />
            </section>
        </main>
    )
}

export default Propos