import {useState} from 'react';
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from './components/Log';

function App() {
  const [gameTurns, setgameTurns]=useState([]);
  const [activePlayer, setActivePlayer]=useState('X');
  
  function handleSelectSquare(rowIndex,colIndex){
    setActivePlayer((currActivePlayer) => currActivePlayer==='X'?'O':'X');
    setgameTurns(prevTurns=>{
      const updatedTurns=[{square:{row:rowIndex,col:colIndex},player:activePlayer},...prevTurns];
    })
  }


  return (
    <main>
      <div id="game-container"> 
        <ol id="players" className='highlight-player'>
          <Player initialPlayerName="player1" symbol="x" isActive={activePlayer==='X'}/>
          <Player initialPlayerName="player2" symbol="O" isActive={activePlayer==='O'}/>
          
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
      <Log/>
    </main>
  )
}

export default App
