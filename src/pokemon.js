import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const [sprite, setSprite] = useStateState("");
const [pokedata, setPokedata] = useState ({});
// class pokemon extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             pokemon: {
//                 name: "",
//                 ability: "",
//             }
//         }
//     }
// }

const Pokemon = ({ value }) => {
    const[pokeData, setPokeData] = useState ({})
    fetch(value.url)
    .then(res => res.json())
    .then(data => setPokeData(data.abilities))

}
}, [])


  return <h1>value.ability</h1>;
  
)
}

export default Pokemon;

// {pokelist.map (pokemon => <pokemon value={pokemon}/>)}
