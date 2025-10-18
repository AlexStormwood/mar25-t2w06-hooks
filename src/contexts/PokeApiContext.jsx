import { createContext, useContext } from "react";


export const defaultPokeApiContextData = {
	pokemonName:"",
	pokemonImage:""
};

// contextVariable = createContext(defaultData);
export const PokeApiContext = createContext(defaultPokeApiContextData);


// Custom hook!
export function usePokeApiContext(){
	return useContext(PokeApiContext);
}