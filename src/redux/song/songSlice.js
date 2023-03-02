import { createSlice } from '@reduxjs/toolkit';

// Redux slice
const songsSlice = createSlice({
  name: 'songs',
  initialState: {
    songs: [],
    status: {
      totalSongs: 0,
      totalArtists: 0,
      totalGenres: 0,
    },
  },
  reducers: {
    addNewSongSuccess: (state, action) => {
      state.songs.push(action.payload);
    },
    getAllSongsSuccess: (state, action) => {
      console.log("getAllSongsSuccess: ", action.payload)
      state.songs = action.payload;
    },
    editSongSuccess: (state, action) => {
      const index = state.songs.findIndex((song) => song.id === action.payload.id);
      if (index !== -1) {
        state.songs[index] = action.payload;
      }
    },
    deleteSongSuccess: (state, action) => {
      state.songs = state.songs.filter((song) => song.id !== action.payload);
    },
    getTotalCountsSuccess: (state, action) => {
      state.status = action.payload;
    },
    setSongs: (state, action) => {
      console.log("setSongs: ", action.payload)
      state.songs = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Redux actions
export const {
  addNewSongSuccess,
  getAllSongsSuccess,
  editSongSuccess,
  deleteSongSuccess,
  getTotalCountsSuccess,
  setSongs,
  setStatus,
  setError,
} = songsSlice.actions;

export default songsSlice.reducer;