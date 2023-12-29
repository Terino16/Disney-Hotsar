/* eslint-disable react/no-unescaped-entities */

import CarouselBannerWrapper from '@/components/CarouselBannerWrapper';
import SearchBannerWrapper from '@/components/SearchBannerWrapper';
import TopratedMoviesWrapper from '@/components/TopratedMoviesWrapper';
export default async  function Home() {

  return (
    <main className= "">
    <CarouselBannerWrapper />
    <div className='py-2 '>
    <h1 className='text-2xl text-white font-bold py-3'>Latest Releases</h1>
    <SearchBannerWrapper/>
    </div>
    <div className='py-2 '>
    <h1 className='text-2xl text-white font-bold py-3'>Top Rated IMDB</h1>
    <TopratedMoviesWrapper/>
    </div>
    <div className='m-auto p-12 text-4xl text-gray-400 font-bold'>
      <p>Can't Find your Pick. You can Search your Favorites</p>
    </div>
    </main>
  )
}
