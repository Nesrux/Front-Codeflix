import { Banner } from './components/Banner';
import Header from './components/Header';
import { MovieRow } from './components/MovieRow';
import {
  getFeaturedMovie,
  getMovieById,
  getMoviesByGenre,
} from './services/MovieService';

export default async function Home() {
  const randomNum = Math.floor(Math.random() * (106 - 101 + 1)) + 101;
  const featuredMovie = await getFeaturedMovie(randomNum.toString());
  const genres = ['Drame', 'Action', 'Comedy', 'Animation'];

  const movies = await Promise.all(
    genres.map(async (genre) => {
      const movies = await getMoviesByGenre(genre, { _limit: 8 });
      return { sectionTitle: genre, movies };
    })
  );


  return (
    <div className='relative bg-gradient-to-b pb-8'>
      <Header />

      <main className='relative mb-48 h-screen pl-4 lg:pl-16 '>
        <Banner movie={featuredMovie} />
        {movies.map((movie) => (
          <MovieRow
            movies={movie.movies}
            key={movie.sectionTitle}
            sectionTitle={movie.sectionTitle}
          />
        ))}
      </main>
    </div>
  );
}
