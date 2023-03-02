import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { setSongs, setStatus, setError } from './songSlice';

const url = 'http://localhost:3000';
function* addNewSong(action) {
  try {
    const { data } = yield call(axios.post, `${url}/addnewsong`, action.payload);
    yield put(setStatus(data.message));
  } catch (error) {
    yield put(setError(error.message));
  }
}

function* editSong(action) {
  try {
    const { data } = yield call(axios.put, `${url}/editsong`, action.payload);
    yield put(setStatus(data.message));
  } catch (error) {
    yield put(setError(error.message));
  }
}

function* deleteSong(action) {
  try {
    const { data } = yield call(axios.delete, `${url}/deletesong`, {
      data: action.payload,
    });
    yield put(setStatus(data.message));
  } catch (error) {
    yield put(setError(error.message));
  }
}

function* getAllSongs() {
  try {
    const { data } = yield call(axios.get, `${url}/getsongs`);
    yield put(setSongs(data));
  } catch (error) {
    yield put(setError(error.message));
  }
}

function* getTotalCounts() {
  try {
    const { data } = yield call(axios.get, `${url}/gestatus`);
    yield put(setStatus(data.message));
  } catch (error) {
    yield put(setError(error.message));
  }
}

function* rootSaga() {
  yield takeLatest('songs/addNewSong', addNewSong);
  yield takeLatest('songs/editSong', editSong);
  yield takeLatest('songs/deleteSong', deleteSong);
  yield takeLatest('songs/getAllSongs', getAllSongs);
  yield takeLatest('songs/getTotalCounts', getTotalCounts);
}

export default rootSaga;
