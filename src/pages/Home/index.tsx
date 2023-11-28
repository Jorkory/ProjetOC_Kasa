import imageBackground from '../../assets/falaise.jpg'
import Article from '../../components/article';

function Home() {
  return (
    <main>
      <section className='banner'>
        <h1 className='banner__title'>Chez vous, partout et ailleurs</h1>
        <img className='banner__image' src={imageBackground} alt='falaise rocheuse au bord de la mer' />
      </section>
      <section className='articles'>
        <Article />
      </section>
    </main>
  );
}

export default Home;
