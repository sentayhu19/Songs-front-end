import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import EditSongForm from "./EditSongForm";

import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { Box } from "rebass/styled-components";

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
    dispatch({ type: "songs/getAllSongs" });
  }, [dispatch]);

  return (
    <div
      className={
        "bg-[url(https://cdn.pixabay.com/photo/2016/04/30/14/58/music-1363069_960_720.jpg)]  h-screen bg-no-repeat w-[100%] bg-cover p-20"
      }
    >
        <div className="mt-20">
      <Box>
        <Table>
          <thead>
            <tr>
              <Th>Delete Actions</Th>
              <Th>Title</Th>
              <Th>Artist</Th>
              <Th>Genre</Th>
              <Th>Album</Th>
              <Th>SAVE</Th>
            </tr>
          </thead>

          <tbody>
            {songs.songs
              ? songs.songs.map((song) => (
                  <tr key={song.id}>
                      <EditSongForm song={song} />
                  </tr>
                ))
              : ""}
          </tbody>
        </Table>
      </Box>
      </div>
    </div>
  );
};

export default ManageSong;
