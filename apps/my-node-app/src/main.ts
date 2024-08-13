import { myLib01 } from 'my-lib01';
import { myLib02 } from 'my-lib02';

export function print(): string[] {
	return [
		'Hello World',
		myLib01(),
		myLib02(),
	];
}

console.log(print());
