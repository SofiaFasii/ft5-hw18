import { useState } from 'react';
import Player from './components/Player';
import './App.css';
import { PlayerContext } from './Context/playerContext';

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const value ={
    isPlaying,
    setIsPlaying,
  }
  return (
    <div >
      <PlayerContext.Provider value={value}>
        <Player/>
      </PlayerContext.Provider>
    </div>
  );
}

export default App;
