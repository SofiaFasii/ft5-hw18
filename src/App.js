import { useState } from 'react';
import Player from './components/Player';
import './App.css';
import { PlayerContext } from './Context/playerContext';
import { usePlayerReducer } from './hooks/usePlayerReducer';

function App() {
  const {state, dispatch} = usePlayerReducer();
  return (
    <div >
      <PlayerContext.Provider value={{state, dispatch}}>
        <Player/>
      </PlayerContext.Provider>
    </div>
  );
}

export default App;
