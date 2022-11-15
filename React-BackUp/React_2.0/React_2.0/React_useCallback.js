/*  React useCallback

  --> useCallback is a hook that use to help with our app's performance.

  --> Specifically, it prevents funtions from being recreated every time our component re-renders, which can hurt the performance of our app.

  --> PlayerList example from earlier and add the ability to add players to our array. when we pass down a function to remove them (handleRemovePlayer) via props, the function will be recreated every time.

  --> The way to fix this is to wrap our callback function in useCallback and to include its one argument player in the dependencies array.

*/

import React, { useCallback, useState } from "react";

function Callback() {
    const [player, setPlayer] = useState("");
    const [players, setPlayers] = useState(["Virat", "Rohit", "Dhoni"]);

    function handleChangeInput(event) {
        setPlayer(event.target.value);
    }

    function handleAddPlayer() {
        setPlayers(players.concat(player));
    }

    const handleRemovePlayer = useCallback(player => {
        setPlayers(players.filter((p) => p !== player));
    }, [])

    return (
        <>
        <input onChange={handleChangeInput} />
        <button onClick={handleAddPlayer}>Add Player</button>
        <UsingFetch players={players} handleRemovePlayer={handleRemovePlayer} />
        </>
    );
}

function UsingFetch({ players, handleRemovePlayer }) {
    return (
        <ul>
            {
                players.map((player) => (
                    <li key={player} onClick={() => handleRemovePlayer(player)} >
                        {player}
                    </li>
                ))
            }
        </ul>
    )
}

export default Callback;