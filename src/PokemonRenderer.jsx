import { useContext, useEffect } from "react"
import { PokeApiContext } from "./contexts/PokeApiContext"


export function PokemonRenderer(){

	// const pokeApiContextData = useContext(PokeApiContext);
	const [{pokemonName, pokemonImage}, setPokemonData] = useContext(PokeApiContext);

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