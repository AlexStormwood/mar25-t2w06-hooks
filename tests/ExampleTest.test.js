// Even with globals set to true, we can import the things from vitest
// it can help with the red squigglies in the code linting!
// import { describe, test, expect } from "vitest";

describe("Sample tests", () => {
	test("Example test of basic logic", () => {
		let result = 1 + 1;
		expect(result).toBe(2);
	});
});