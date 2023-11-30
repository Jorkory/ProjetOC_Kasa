import bannerImage from '../../assets/falaise.jpg'
import Banner from '../../components/banner';
import Cards from '../../components/cards';

function Home() {

  return (
    <main>
      <section className='banner'>
        <Banner title="Chez vous, partout et ailleurs" image={bannerImage} alt='falaise rocheuse au bord de la mer' />
      </section>
      <section className='cards'>
        <Cards />
      </section>
    </main>
  );
}

export default Home;
