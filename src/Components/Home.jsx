import React from 'react'
import SongList from './SongList'
const Home = () => {
  return (
    <div>
      <h1 className='m-10 text-3xl  border-2 w-[10%]'><span className='text-green-500'>Addis</span> Music</h1>
      <SongList/>
    </div>
  )
}

export default Home