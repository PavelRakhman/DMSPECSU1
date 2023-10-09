import React, {useState} from 'react'
import {Gameboard} from './components/gameboard'
import {ResetBtn} from './components/resetBtn'
import {ScoreBoard} from './components/scoreboard'
function App() {

const WinningCombinations = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2.5,8],
  [0,4,8],
  [2,4,3]  
]


// declaration of useState hooks
const [board, setBoard] =useState(Array(9).fill(null))
const [XTurn, setXTurn] = useState(true)
const [scores, setScores] = useState({xScore:0, oScore:0})
const [gameOver, setGameOver] = useState(false)




const clickHandler=(squareIndex) =>{
const updatedBoard = board.map((value, idx)=>{
  if(idx===squareIndex)
  {
    return (XTurn===true? "X" : "o")
  }
  else
  {
    return value
  }
})

const winner = findWinner(updatedBoard)
if(winner)
{
  if(winner ==="o"){let {oScore}=scores;
   oScore+=1;
    setScores({...scores, oScore})}
  else
  {let {xScore}=scores;
   xScore+=1;
    setScores({...scores, xScore})}
}

setBoard(updatedBoard) 
setXTurn(!XTurn)
}

const findWinner = (board)=>
{
for (let i=0; i< WinningCombinations.length;i++)
{
 const [x,y,z] =WinningCombinations[i] 
 if(board[x] && board[x]===board[y]&&board[y]===board[z])
 {
  setGameOver(true)
  console.log(board[x])
  return board[x]
 }
}  
}

const resetBoard =()=>{
setGameOver(false)
setBoard(Array(9).fill(null))  
}

return (
  <div className="App">
  <ScoreBoard scores={scores} XTurn={XTurn}/>
  <Gameboard board = {board} onClick={gameOver ? resetBoard : clickHandler}/>
   <ResetBtn resetBoard={resetBoard}/>
  </div>
)

}

export default App;

