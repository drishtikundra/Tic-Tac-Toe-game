// import {useState} from 'react';

const inititalGameBoard=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

export default function GameBoard({onSelectSquare}) {
    const [gameBoard, setGameBoard]=useState(inititalGameBoard);

    // function handleSelectSquare(rowIndex,colIndex){
    //     setGameBoard((prevGameBoard)=>{
    //         const updatedBoard=[...prevGameBoard.map(innerArray=>[...innerArray])];
    //         updatedBoard[rowIndex][colIndex]=activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     onSelectSquare();
    // }
  return <ol id="game-board">
    {gameBoard.map((row,rowIndex)=><li key={rowIndex}>
        <ol>
            {row.map((playerSymbol,colIndex)=>(
                <li key={colIndex}>
                    <button onClick={()=>handleSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button>
                </li>
            ))}
        </ol>
    </li>)}

  </ol>
}


// return( <ol id="game-board">
//     {inititalGameBoard.map((row,rowIndex)=>(<li key={rowIndex}>
//         <ol>
//             {row.map((playerSymbol,colIndex)=>(
//                 <li key={colIndex}>
//                     <button>
//                         {playerSymbol}
//                     </button>
//                 </li>
//             ))}
//         </ol>
//     </li>))}

// </ol>
// )