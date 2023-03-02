import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editSongSuccess } from '../redux/song/songSlice';
import styled from '@emotion/styled';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const EditSongForm = ({ song }) => {
  const dispatch = useDispatch();
  const [editedSong, setEditedSong] = useState(song);

  const handleChange = (event) => {
    setEditedSong({ ...editedSong, [event.target.name]: event.target.value });
  };
  const Td = styled.td`
  text-align: left;
  padding: 8px;
`;
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
   <>
        <Td>
    <Button className='rounded-lg' title='Delete' id={editedSong.id} onClick={handleDelete}>
        <FontAwesomeIcon icon={faTrash} />
    </Button>
    </Td>
    <Td>
    <div className='flex items-center gap-2'>
    <FontAwesomeIcon icon={faEdit} />
      <input type="text" name="title" value={editedSong.title} onChange={handleChange} />
      </div>
      </Td>
      <Td>
      <div className='flex items-center gap-2'>
      <FontAwesomeIcon icon={faEdit} />
      <input type="text" name="artist" value={editedSong.artist} onChange={handleChange} />
        </div>
        </Td>
        <Td>
        <div className='flex items-center gap-2'>
      <FontAwesomeIcon icon={faEdit} />
      <input type="text" name="genre" value={editedSong.genre} onChange={handleChange} />
        </div>
        </Td>
        <Td>
        <div className='flex items-center gap-2'>
        <FontAwesomeIcon icon={faEdit} />
      <input type="text" name="album" value={editedSong.album} onChange={handleChange} />
        </div>
        </Td>
        <Td>
      <button onClick={handleSubmit} className='bg-green-500 text-white p-2 rounded-lg' type="submit">Save</button>
      </Td>
      </>
    
  );
};

export default EditSongForm;
