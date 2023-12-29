import React from 'react'
import { notFound } from 'next/navigation';
import { getSearchedMovies } from '@/lib/fetchresults';
import { getPopularMovies } from '@/lib/fetchresults';
import MoviesCarousel from '@/components/MovieCarousel';
type Props = {
    params: {
      term: string;
    };
  };

const page = async ({ params: { term } }: Props) => {
    if (!term) notFound();

  const termToUse = decodeURI(term);
  const movies = await getSearchedMovies(termToUse);
  const popularMovies = await getPopularMovies();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-5 pt-20 xl:pt-20 text-white">
        <h1 className="text-6xl font-bold px-10">Results for {termToUse}</h1>

        <MoviesCarousel title="Movies" movies={movies} isVertical />

        <MoviesCarousel title="You may also like" movies={popularMovies} />
      </div>
    </div>
  )
}

export default page