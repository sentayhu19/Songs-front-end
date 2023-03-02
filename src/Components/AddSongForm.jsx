import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewSong } from '../redux/songsSlice';

const AddSongForm = () => {
  const dispatch = useDispatch();
  const [song, setSong] = useState({
    title: '',
    artist: '',
    genre: '',
  });

  const handleChange = (event) => {
    setSong({ ...song, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addNewSong(song));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={song.title} onChange={handleChange} />
      <input type="text" name="artist" value={song.artist} onChange={handleChange} />
      <input type="text" name="genre" value={song.genre} onChange={handleChange} />
      <button type="submit">Add Song</button>
    </form>
  );
};

export default AddSongForm;
