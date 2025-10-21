// Even with globals set to true, we can import the things from vitest
// it can help with the red squigglies in the code linting!
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import App from "../src/App.jsx";

describe("App renders static content", () => {
	test("App renders 'Vite + React' text", () => {
		
		// render the component that we want to test 
		render(<App />);

		// search the component for specific data 
		const appContentElementGET = screen.getByText("Vite + React");
		const appContentElementFIND = screen.findByText("Vite + React");

		console.log(appContentElementGET);
		console.log(appContentElementFIND);

		// check if the found data matches expected test result data
		expect(appContentElementGET).toBeInTheDocument();
		expect(appContentElementFIND).toBeInTheDocument();
		
	});
});