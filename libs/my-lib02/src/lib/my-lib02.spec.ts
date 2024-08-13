import { myLib02 } from './my-lib02.js';

describe('myLib02', () => {
	it('should work', () => {
		expect(myLib02()).toMatch(/^my-lib02/);
	});
});
