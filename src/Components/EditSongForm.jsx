import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editSongSuccess } from '../redux/song/songSlice';
import styled from '@emotion/styled';
const EditSongForm = ({ song }) => {
  const dispatch = useDispatch();
  const [editedSong, setEditedSong] = useState(song);

  const handleChange = (event) => {
    setEditedSong({ ...editedSong, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({type: "songs/editSong", payload: editedSong});
  };
  const handleDelete = (event) => {
    console.log("handleDelete", event.target.id);
    dispatch({type: "songs/deleteSong", payload: event.target.id});
    }
    const Button = styled.button`
  background-color: #f44336;
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
  return (
    <form onSubmit={handleSubmit}>
    <Button title='Delete' id={editedSong.id} onClick={handleDelete}>Delete</Button>
      <input type="text" name="title" value={editedSong.title} onChange={handleChange} />
      <input type="text" name="artist" value={editedSong.artist} onChange={handleChange} />
      <input type="text" name="genre" value={editedSong.genre} onChange={handleChange} />
      <button className='bg-green-500 text-white p-2 rounded-lg' type="submit">Save</button>
    </form>
  );
};

export default EditSongForm;
