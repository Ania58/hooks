import './App.css';
import useFetchCharacters from './hooks/useFetchCharacters.js';

function App() {
  const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/1';
  const rickAndMortyUrl = 'https://rickandmortyapi.com/api/character/1';

  const { character: pokemon, loading: loadingPokemon, error: errorPokemon } = useFetchCharacters(pokemonUrl);
  const { character: rickAndMorty, loading: loadingRick, error: errorRick } = useFetchCharacters(rickAndMortyUrl);

  return (
    <div>
      <h1>Character Data</h1>

      <h2>Pokémon Character</h2>
      {loadingPokemon ? (
        <p>Loading Pokémon data...</p>
      ) : errorPokemon ? (
        <p>{errorPokemon}</p>
      ) : (
        pokemon && (
          <>
            <p>{pokemon.name}</p>
            <img src={pokemon.image} alt={pokemon.name} />
          </>
        )
      )}

      <h2>Rick and Morty Character</h2>
      {loadingRick ? (
        <p>Loading Rick and Morty data...</p>
      ) : errorRick ? (
        <p>{errorRick}</p>
      ) : (
        rickAndMorty && (
          <>
            <p>{rickAndMorty.name}</p>
            <img src={rickAndMorty.image} alt={rickAndMorty.name} />
          </>
        )
      )}
    </div>
  );
}

export default App;
