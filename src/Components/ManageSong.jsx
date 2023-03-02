import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EditSongForm from './EditSongForm';

import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { Box } from 'rebass/styled-components';


const Table = styled.table`
  border-collapse: collapse;
  width: 60%;
    margin: 0 auto;
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



const ManageSong = () => {
  const dispatch = useDispatch();
  const { songs } = useSelector((state) => state.songs);

  useEffect(() => {
    console.log("init useEFFECt getALL Songs")
    dispatch({type: "songs/getAllSongs"}); 
  }, [dispatch]);

  return (
    <Box>
      <Table>
        <thead>
          <tr>
            <Th>Actions</Th>
            <Th>Title</Th>
            <Th>Artist</Th>
            <Th>Gener </Th>
          </tr>
        </thead>
        <tbody>
          {songs.songs ? songs.songs.map((song) => (
            <tr key={song.id}>
              <Td>
                <EditSongForm song={song} />
              </Td>
            </tr>
          )): ''}
        </tbody>
      </Table>
    </Box>
  );
};

export default ManageSong;
