import { useState } from 'react';

export default function Player({name, symbol, isActive}) {

    const [ updatedName, updateName ] = useState(name);
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing );
    }

    function handleUpdatingName(event) {
        updateName(event.target.value);
    }

    let playerName = <span className="player-name">{updatedName}</span>;
    let buttonName = 'EDIT'
    if (isEditing) {
        playerName = <input type='text' required value={updatedName} onChange={handleUpdatingName}/>
        buttonName = 'SAVE'
    }
    else {
        buttonName = 'EDIT'
    }

    return (
        <>
            <li className={isActive ? 'active' : undefined} >
                <span className='player'>
                    {playerName}
                    <span className="player-symbol">{symbol}</span>
                </span>

                <button onClick={handleEditClick}>{buttonName}</button>
            </li>
        </>
    )
}