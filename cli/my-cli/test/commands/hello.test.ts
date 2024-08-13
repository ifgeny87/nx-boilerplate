import { runCommand } from '@oclif/test';
import { expect } from 'chai';

const loadOpts = {
	root: 'src/commands',
};

describe('hello', () => {
	it('runs hello', async () => {
		const { stdout, stderr, error } = await runCommand('hello Kitty', loadOpts);
		expect(error).to.undefined;
		expect(stderr).to.empty;
		expect(stdout).to.match(/^hello Kitty\n/);
	})
})
