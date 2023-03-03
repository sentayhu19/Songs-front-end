import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Nav from './Components/Nav';
import ManageSong from './Components/ManageSong';
import SongList from './Components/SongList';
import AddSongForm from './Components/AddSongForm';

function App() {
  return (
    <div className="App">

      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<SongList />} />
          <Route path="/managesong" element={<ManageSong />} />
          <Route path="/addnewsong" element={<AddSongForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
