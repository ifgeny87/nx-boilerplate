import { myLib01 } from 'my-lib01';

export function myLib02(): string {
	return `my-lib02 + ${myLib01()}`;
}
