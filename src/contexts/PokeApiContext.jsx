import { createContext } from "react";


export const defaultPokeApiContextData = {
	pokemonName:"",
	pokemonImage:""
};

// contextVariable = createContext(defaultData);
export const PokeApiContext = createContext(defaultPokeApiContextData);