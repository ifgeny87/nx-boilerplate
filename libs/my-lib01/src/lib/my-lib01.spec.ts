import { myLib01 } from './my-lib01.js';

describe('myLib01', () => {
	it('should work', () => {
		expect(myLib01()).toMatch(/^my-lib01/);
	});
});
