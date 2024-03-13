import React, { useState, useEffect } from "react";
import "./App.css";
import "./image";
import "./RenderPokemon.css";
import detailsContext from "./DetailsContext";

function RenderPokemonGenOne() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokemonList, setPokemonList] = useState({});
  const [details, setDetails] = useState({});
  const value = [details, setDetails];

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setPokemonList(data.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Pokemon are traveling to your screen</div>;
  } else {
    return (
      <>
        <p class="header" style={{ fontSize: 30 }}>
          Pokedex Generation 1
        </p>
        <div class="grid-container">
          {pokemonList.map((pokemon, index) => (
            <div key={index}>
              <div
                style={{ fontSize: 20, color: "black", alignItems: "center" }}
              >
                {pokemon.name}
              </div>
              <div>
                <img
                  style={{
                    width: "7em",
                    backgroundColor: "white",
                    padding: 0,
                    borderRadius: 10,
                    marginBlock: 10,
                  }}
                  className="static"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    index + 1
                  }.png`}
                  alt={pokemon.name}
                />
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default RenderPokemonGenOne;
