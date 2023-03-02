import React, { useEffect } from 'react';
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
    const { status } = useSelector((state) => state.songs);
console.log("stats", status)
  useEffect(() => {
    dispatch({type: "songs/getAllSongs"}); 
    dispatch({type: "songs/getTotalCounts"});
  }, [dispatch]);


  return (
    <div className={'bg-[url(https://cdn.pixabay.com/photo/2016/04/30/14/58/music-1363069_960_720.jpg)]  h-screen bg-no-repeat w-[100%] bg-cover p-20'}>
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
