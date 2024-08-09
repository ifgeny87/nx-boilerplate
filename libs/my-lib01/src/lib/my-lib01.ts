import moment from 'moment';

export function myLib01(): string {
	const now = moment();
	return `my-lib01 (${now.toISOString()})`;
}
