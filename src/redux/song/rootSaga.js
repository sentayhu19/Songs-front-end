import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { setSongs, setStatus, setError, getAllSongsSuccess, getTotalCountsSuccess } from './songSlice';

const url = 'http://localhost:3000/v1';
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
    console.log("This is get all SAGA data: ", data);
    yield put(getAllSongsSuccess(data));
  } catch (error) {
    yield put(setError(error.message));
  }
}

function* getTotalCounts() {
  try {
    const { data } = yield call(axios.get, `${url}/gestatus`);
    console.log("This is get total counts SAGA data: ", data);
    yield put(getTotalCountsSuccess(data));
  } catch (error) {
    yield put(setError(error.message));
  }
}

function* rootSaga() {
  yield takeEvery('songs/addNewSong', addNewSong);
  yield takeEvery('songs/editSong', editSong);
  yield takeEvery('songs/deleteSong', deleteSong);
  yield takeEvery('songs/getAllSongs', getAllSongs);
  yield takeEvery('songs/getTotalCounts', getTotalCounts);
}

export default rootSaga;
