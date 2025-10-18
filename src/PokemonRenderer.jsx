import { useEffect } from "react"
import { usePokeApiContext } from "./contexts/PokeApiContext"


export function PokemonRenderer(){

	// const pokeApiContextData = useContext(PokeApiContext);
	// const [{pokemonName, pokemonImage}, setPokemonData] = useContext(PokeApiContext);
	// Use a custom hook to reduce how much we have to type and import!
	const [{pokemonName, pokemonImage}] = usePokeApiContext();

	useEffect(() => {
		console.log(pokemonName,  pokemonImage);
	// definitely a componentDidMount, ignore the exhaustive-deps warning!
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <section className="pokemonRenderer">
		<h1>{pokemonName}</h1>
		<img src={pokemonImage} alt={`Sprite of Pokemon named ${pokemonName}.`} />
	</section>
}