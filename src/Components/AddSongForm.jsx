import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { addNewSongSuccess } from '../redux/song/songSlice';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    <div className={'bg-[url(https://cdn.pixabay.com/photo/2016/04/30/14/58/music-1363069_960_720.jpg)]  h-screen bg-no-repeat w-[100%] bg-cover md:p-20 sm:p-5'}>
    <div className='flex items-center justify-center md:w-[60%] sm:w-[95%] m-auto border rounded-lg bg-slate-200 h-auto sm:flex-col md:flex-row '>
        <img src="https://cdn.pixabay.com/photo/2020/04/15/14/45/microphone-5046876_1280.jpg" alt="addis record" className='md:w-[50%] sm:w-full p-5  h-auto'/>
    <form className='flex w-[50%] h-auto p-20 flex-col gap-4' onSubmit={handleSubmit}>
        <div className='flex gap-4 items-center justify-center'>
        <label>Title</label> 
      <input className='border' required type="text" name="title" value={song.title} onChange={handleChange} />
      </div>
      <div className='flex gap-4 items-center justify-center'>
      <label>Artist</label>
      <input className='border' required type="text" name="artist" value={song.artist} onChange={handleChange} />
      </div>
      <div className='flex gap-4 items-center justify-center'>
        <label>Genre</label>
      <input className='border' required type="text" name="genre" value={song.genre} onChange={handleChange} />
      </div>
      <div className='flex gap-4 items-center justify-center'>
        <label>Album</label>
        <input className='border' type="text" name="album" value={song.album} onChange={handleChange} />
      </div>
      <button className='border bg-white hover:bg-green-500 hover:text-white  p-2 rounded-lg' type="submit">Add New Song</button>
    </form>
    </div>
    </div>
  );
};

export default AddSongForm;
