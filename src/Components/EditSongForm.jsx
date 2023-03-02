import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editSongSuccess } from '../redux/song/songSlice';

const EditSongForm = ({ song }) => {
  const dispatch = useDispatch();
  const [editedSong, setEditedSong] = useState(song);

  const handleChange = (event) => {
    setEditedSong({ ...editedSong, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(editSongSuccess(editedSong));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={editedSong.title} onChange={handleChange} />
      <input type="text" name="artist" value={editedSong.artist} onChange={handleChange} />
      <input type="text" name="genre" value={editedSong.genre} onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditSongForm;
