import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllSongsSuccess } from "../redux/song/songSlice";
import EditSongForm from "./EditSongForm";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { Box } from "rebass/styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRecordVinyl } from "@fortawesome/free-solid-svg-icons";
import { faGuitar } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faMicrophoneAlt } from "@fortawesome/free-solid-svg-icons";
import { MoonLoader} from "react-spinners";

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
  background-color: #4caf50;
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
    dispatch({ type: "songs/getAllSongs" });
    dispatch({ type: "songs/getTotalCounts" });
  }, [dispatch]);

  //search by genre
  return (
    <div
      className={
        "bg-[url(https://cdn.pixabay.com/photo/2016/04/30/14/58/music-1363069_960_720.jpg)]  md:h-screen sm:h-auto bg-no-repeat w-[100%] bg-cover p-20"
      }
    >
      <div className="md:mt-20 sm:mt-36">
        <div className=" flex md:flex-row sm:flex-col items-center min-w-[230px] w-[40%] m-auto bg-green-500 text-white gap-[30%] border">
          {Object.keys(stats).length > 0 ? (
            <>
              <div className="flex flex-col gap-3 p-3">
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faRecordVinyl} size="2x" />
                  <h3>{stats.totalCounts[0].totalAlbums} Albums</h3>
                </div>
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faGuitar} size="2x" />
                  <h3>{stats.totalCounts[0].totalGenres} Genres</h3>
                </div>
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faMusic} size="2x" />
                  <h3>{stats.totalCounts[0].totalSongs} Songs</h3>
                </div>
                <div className="flex gap-2 items-center">
                  <FontAwesomeIcon icon={faMicrophoneAlt} size="2x" />
                  <h3>{stats.totalCounts[0].totalArtists} Artists</h3>
                </div>
              </div>
              <div className="border-l pl-2">
                <h3 className="w-full">
                  {" "}
                  {stats.countByAlbum[0].count} Albums by Name{" "}
                  {stats.countByAlbum[0]._id}
                </h3>
                <h3 className="w-full">
                  {" "}
                  {stats.countByArtist[0].count} Songs by Artist{" "}
                  {stats.countByArtist[0]._id}
                </h3>
                <h3 className="w-full">
                  {" "}
                  {stats.countByGenre[0].count} Songs by Genre{" "}
                  {stats.countByGenre[0]._id}
                </h3>
              </div>
            </>
          ) : (
            <MoonLoader title="Loadig stats..." className="m-auto" color="#fff" />
          )}
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
            <tbody className="text-white ">
              {songs.songs
                ? songs.songs.map((song) => (
                    <tr
                      className="hover:bg-slate-400 even:bg-gray-300 even:text-black"
                      key={song.id}
                    >
                      <Td>{song.title}</Td>
                      <Td>{song.artist}</Td>
                      <Td>{song.album}</Td>
                      <Td>{song.genre}</Td>
                    </tr>
                  ))
                : ""
                }
            </tbody>
          </Table>
          { songs.songs ? '':<MoonLoader title="Loading songs..." className="w-full m-auto" color="#36d7b7" />}
        </Box>
      </div>
    </div>
  );
};

export default SongList;
