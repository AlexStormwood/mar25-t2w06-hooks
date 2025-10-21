// Even with globals set to true, we can import the things from vitest
// it can help with the red squigglies in the code linting!
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import App from "../src/App.jsx";
import { PokeApiContextProvider } from "../src/contexts/PokeApiContextProvider.jsx";
import { PokeApiContext } from "../src/contexts/PokeApiContext.jsx";

describe("App renders static content", () => {
	test("App renders 'Vite + React' text", async () => {
		
		// render the component that we want to test 
		render(
			<PokeApiContext.Provider value={[
				{pokemonName: "pikachu", pokemonImage:"url to figure out later"}, 
				() => {console.log("mocked setPokemonData function")}, 
				() => {console.log("mocked getRandomPokemon")}
			]}>
				<App />
			</PokeApiContext.Provider>
			// <PokeApiContextProvider>
			// 	<App />
			// </PokeApiContextProvider>
		);

		// search the component for specific data 
		// synchronously get content on the page and move on in the test
		const appContentElementGET = screen.getByText("Vite + React");
		// wait for the desired content to appear on the page and then move on in the test
		const appContentElementFIND = await screen.findByText("Vite + React");

		// console.log(appContentElementGET);
		// console.log(appContentElementFIND);

		// check if the found data matches expected test result data
		expect(appContentElementGET).toBeInTheDocument();
		expect(appContentElementFIND).toBeInTheDocument();
		
	});
});