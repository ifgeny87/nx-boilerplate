import { Args, Command } from '@oclif/core'
import { myLib01 } from 'my-lib01';
import { myLib02 } from 'my-lib02';

export default class Hello extends Command
{
	static args = {
		person: Args.string({ description: 'Person to say hello to', required: true }),
	}

	static description = 'Say hello'

	async run(): Promise<void> {
		const { args } = await this.parse(Hello)
		this.log('Lib01 says:', myLib01());
		this.log('Lib02 says:', myLib02());
		this.log(`hello ${args.person}`);
	}
}
