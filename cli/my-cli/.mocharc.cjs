process.env.NODE_ENV = 'test';
process.env.TS_NODE_PROJECT = './tsconfig.spec.json';

module.exports = {
	loader: 'ts-node/esm',
	timeout: 15_000,
	slow: 5_000,
	reporter: 'list',
	colors: true,
	'fail-zero': true,
	'full-trace': true,
	'inline-diffs': true,
	spec: [
		'test/**/*.test.{ts,js}',
	],
}
