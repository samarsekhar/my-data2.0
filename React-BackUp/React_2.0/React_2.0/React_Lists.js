/*  React Lists
  
  --> Lists of React components can be output using the '.map()' function.

  .map() allows us to loop over arrays of data and output JSX.

  Here outputting a list of soccer players using the SoccerPlayer Component.

*/
import React from "react";

function SoccerPlayers() {
    const players = ['Virat', 'Rohit', 'Dhoni'];

    return (
        <div>
            {
                players.map((playerName) => (
                    <SoccerPlayer key={playerName} name={playerName} />
                ))
            }
        </div>
    )
}

export default SoccerPlayers;

/*  
 Whenever you are looping over an array of data, you must include the key prop on the element or component over which you are looping.

 Additionally, this key prop must be given a unique value, not just an element index.

*/