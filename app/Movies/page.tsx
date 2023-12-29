import React from 'react'
import { getUpcomingMovies } from '@/lib/fetchresults'
import Exploremovies from '@/components/Exploremovies';

const page = async () => {
  const results=await getUpcomingMovies();
  return (
    <div className='min-h-screen p-12'>
      <h1 className='text-5xl text-gray-300 font-bold py-4'>Upcoming Movies</h1>
      <Exploremovies exploremovies={results} />;
    </div>
  )
}

export default page;