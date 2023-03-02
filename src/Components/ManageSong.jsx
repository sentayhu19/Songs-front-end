import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EditSongForm from './EditSongForm';

import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import { Box } from 'rebass/styled-components';


const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
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

const ManageSong = () => {
  const dispatch = useDispatch();
  const { songs } = useSelector((state) => state.songs);

  useEffect(() => {
    console.log("init useEFFECt getALL Songs")
    dispatch({type: "songs/getAllSongs"}); 
  }, [dispatch]);

  console.log("SONGS LIST", songs);

  return (
    <Box>
      <Table>
        <thead>
          <tr>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {songs.songs ? songs.songs.map((song) => (
            <tr key={song.id}>
              <Td>
                <EditSongForm song={song} />
                <Button>Delete</Button>
              </Td>
            </tr>
          )): ''}
        </tbody>
      </Table>
    </Box>
  );
};

export default ManageSong;
