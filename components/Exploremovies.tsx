import React from 'react';
import { Movie } from '@/typings';
import Image from 'next/image';
import getImagePath from '@/lib/getImagePath';


const Exploremovies = ({ exploremovies }: { exploremovies: Movie[] }) => {
  return (
    <div className='grid grid-cols-5 gap-3 overflow-hidden'>
      {exploremovies?.map((movie) => {
        return (
          <div key={movie.id} className='flex flex-col items-center justify-between'>  
            {movie.poster_path && (
              <Image
                key={movie.id}
                className="object-cover"
                src={getImagePath(movie.poster_path, true)}
                alt=""
                width={200}
                height={108}
              />
            )}
            {/* Uncomment the line below to display movie title */}
            {/* <p className='text-sm text-left font-bold text-white'>{movie.title}</p> */}
          </div>
        );
      })}
    </div>
  );
};

export default Exploremovies;
