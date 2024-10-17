import { Movies } from '../types/movies';
import { MovieCard } from './MovieCard';

type Props = {
  sectionTitle: string;
  movies: Movies;
};

export const MovieRow = ({ sectionTitle, movies }: Props) => (
  <div className='flex-col space-y-4 pl-2'>
    <div className='flex'>
      <h2 className='-ml-2 inline-flex items-center text-2xl font-bold'>
        {sectionTitle}
      </h2>
    </div>

    <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 '>
      {movies.map((movie, index) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  </div>
);
