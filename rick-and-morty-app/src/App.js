import React from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import EpisodeList from './components/EpisodeList';
import CharacterList from './components/CharacterList';


function App() {
  return (
      <div className="App">
        <Navbar/>
        <Search/>
        <EpisodeList/>
        <CharacterList/>
      </div>
  );
}

export default App;
