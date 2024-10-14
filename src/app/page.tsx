import { Banner } from './components/Banner';
import Header from './components/Header';
import { MovieRow } from './components/MovieRow';
import { getFeaturedMovie, getMovieById } from './services/MovieService';

export default async function Home() {
  const randomNum = Math.floor(Math.random() * (106 - 101 + 1)) + 101;
  const featuredMovie = await getFeaturedMovie(randomNum.toString());

  return (
    <div className='relative bg-gradient-to-b pb-8'>
      <Header />

      <main className='relative mb-48 h-screen pl-4 lg:pl-16 '>
        <Banner movie={featuredMovie} />
        <MovieRow sectionTitle='Popular' />
        <MovieRow sectionTitle='Trending' />
        <MovieRow sectionTitle='Top Rated' />
      </main>
    </div>
  );
}
