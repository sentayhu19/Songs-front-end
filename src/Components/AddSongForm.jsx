import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { addNewSongSuccess } from '../redux/song/songSlice';

const AddSongForm = () => {
  const dispatch = useDispatch();
  const [song, setSong] = useState({
    title: '',
    artist: '',
    genre: '',
    album: '',
  });
  const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  text-align: center;
  cursor: pointer;
`;

  const handleChange = (event) => {
    setSong({ ...song, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({type: "songs/addNewSong", payload: song});
  };

  return (
    <div className='flex items-center justify-center w-[60%] m-auto border rounded-lg'>
    <form className='flex p-20 flex-col gap-4' onSubmit={handleSubmit}>
        <div className='flex gap-4 items-center'>
        <label>Title</label>
      <input className='border' required type="text" name="title" value={song.title} onChange={handleChange} />
      </div>
      <div className='flex gap-4 items-center'>
      <label>Artist</label>
      <input className='border' required type="text" name="artist" value={song.artist} onChange={handleChange} />
      </div>
      <div className='flex gap-4 items-center'>
        <label>Genre</label>
      <input className='border' required type="text" name="genre" value={song.genre} onChange={handleChange} />
      </div>
      <div className='flex gap-4 items-center'>
        <label>Album</label>
        <input className='border' type="text" name="album" value={song.album} onChange={handleChange} />
      </div>
      <button className='border hover:bg-green-500 hover:text-white p-2 rounded-lg' type="submit">Add New Song</button>
    </form>
    </div>
  );
};

export default AddSongForm;
