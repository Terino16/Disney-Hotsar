import React from 'react'
import Televisionshows from '@/components/Televisionshows'
import { getPopularTv } from '@/lib/fetchresults'

const page = async () => {
  const results=await getPopularTv();
  return (
    <div className='min-h-screen p-12'>
      <h1 className='text-5xl text-gray-300 font-bold py-4'>Top Rated Television Shows</h1>
      <Televisionshows tvshows={results}/>
    </div>
  )
}

export default page