import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllSongsSuccess } from '../redux/song/songSlice';
import EditSongForm from './EditSongForm';


const SongList = () => {
    const dispatch = useDispatch();
    const { songs } = useSelector((state) => state.songs);
   useEffect(() => {
    console.log("init useEFFECt getALL Songs")
    dispatch({type: "songs/getAllSongs"}); 
    }, [dispatch]);
console.log("SONGS LIST", songs)
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {songs.songs ? songs.songs.map((song) => (
            <tr key={song.id}>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.genre}</td>
              <td>
                <EditSongForm song={song} />
                <button>Delete</button>
              </td>
            </tr>
          )): ''}
        </tbody>
      </table>
    </div>
  );
};

export default SongList;
