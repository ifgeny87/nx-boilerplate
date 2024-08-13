import { print } from './main.js';

describe('my-node-app', () => {
	it('should print', () => {
		expect(print().join('\n')).toMatch(/^Hello World/);
	});
});
