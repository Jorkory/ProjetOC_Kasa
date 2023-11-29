import bannerImage from '../../assets/falaise.jpg'
import Banner from '../../components/banner';
import Card from '../../components/card';

function Home() {

  return (
    <main>
      <section className='banner'>
        <Banner title="Chez vous, partout et ailleurs" image={bannerImage} alt='falaise rocheuse au bord de la mer' />
      </section>
      <section className='articles'>
        <Card />
      </section>
    </main>
  );
}

export default Home;
