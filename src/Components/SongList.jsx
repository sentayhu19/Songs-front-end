import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllSongsSuccess } from '../redux/song/songSlice';
import EditSongForm from './EditSongForm';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { Box } from 'rebass/styled-components';


const Table = styled.table`
  border-collapse: collapse;
  width: 70%;
  margin: 0 auto;
  margin-top: 50px;
`;

const Th = styled.th`
  background-color: #f2f2f2;
  text-align: left;
  padding: 8px;
`;

const Td = styled.td`
  text-align: left;
  padding: 8px;
`;

const Button = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
`;

const SongList = (bg) => {
  const dispatch = useDispatch();
  const { songs } = useSelector((state) => state.songs);
    const { stats } = useSelector((state) => state.songs);

  useEffect(() => {
    dispatch({type: "songs/getAllSongs"}); 
    dispatch({type: "songs/getTotalCounts"});
  }, [dispatch]);

//search by genre
console.log("stats", stats)
  return (
    <div className={'bg-[url(https://cdn.pixabay.com/photo/2016/04/30/14/58/music-1363069_960_720.jpg)]  h-screen bg-no-repeat w-[100%] bg-cover p-20'}>
         <h2 className='text-2xl'>Statistics</h2>
        <div className=' flex items-center w-[50%] m-auto  gap-[50%] border'>
           
            {Object.keys(stats).length > 0 ? 
            <>
                <div>
                    <h3>{stats.totalCounts[0].totalAlbums} Albums</h3>
                    <h3>{stats.totalCounts[0].totalGenres} Genres</h3>
                    <h3>{stats.totalCounts[0].totalSongs} Songs</h3>
                    <h3>{stats.totalCounts[0].totalArtists} Artists</h3>
                </div>
                 <div className='border-l'>
                <h3> {stats.countByAlbum[0].count} Albums by Name {stats.countByAlbum[0]._id}</h3>
                <h3> {stats.countByArtist[0].count} Albums by Name {stats.countByArtist[0]._id}</h3>
                <h3> {stats.countByGenre[0].count} Albums by Name {stats.countByGenre[0]._id}</h3>
             </div>
             </>
            : ''}
           

        </div>
    <Box>
      <Table>
        <thead>
          <tr>
            <Th>Title</Th>
            <Th>Artist</Th>
            <Th>Album</Th>
            <Th>Genre</Th>
          </tr>
        </thead>
        <tbody className='text-white '>
          {songs.songs ? songs.songs.map((song) => (
            <tr className='hover:bg-slate-400 even:bg-gray-300 even:text-black' key={song.id}>
              <Td>{song.title}</Td>
              <Td>{song.artist}</Td>
             <Td>{song.album}</Td>
              <Td>{song.genre}</Td>
            </tr>
          )): ''}
        </tbody>
      </Table>
    </Box>
    </div>
  );
};

export default SongList;
