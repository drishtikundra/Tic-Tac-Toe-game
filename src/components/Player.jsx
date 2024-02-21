import {useState} from 'react';

export default function Player({initialPlayerName, symbol,isActive}) {
    const [playerName,setplayerName]=useState(initialPlayerName)
    const [isEditing,setIsEditing]=useState(false);

    function handleEditClick(){
        // setIsEditing(!isEditing); =>not a good practice cz react schedules the execution
        setIsEditing((editing)=>!editing); //use a function to update the value of a state based on its previous value instead, to update the state cz with react you always have a guarantee of working with latest available state
    }

    function handleChange(event){
        // console.log(event);
        setplayerName(event.target.value);
    }

    let editablePlayerName=<span className="player-name">{playerName}</span>;
    // let btnCaption='Edit';
    if(isEditing){
        editablePlayerName=(
        <input type="text" required value={playerName} onChange={handleChange}/>
        );
        // btnCaption='Save';
    }

    return (
            <li className={isActive ? 'active' :undefined}>
            <span className="player">
           {editablePlayerName}
           <span className="player-symbol">{symbol}</span>
           </span>
           {/* <button onClick={handleEditClick}>{btnCaption}</button> */}
           <button onClick={handleEditClick}>{isEditing?'Save':'Edit'}</button>
          </li>
    );
}