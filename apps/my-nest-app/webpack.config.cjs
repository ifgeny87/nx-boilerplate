const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join } = require('path');

module.exports = {
	output: {
		path: join(__dirname, `../../dist/apps/my-nest-app`),
		filename: 'main.cjs',
	},
	plugins: [
		new NxAppWebpackPlugin({
			tsConfig: './tsconfig.app.json',
			main: './src/main.ts',
			assets: ['./src/assets'],
			compiler: 'tsc',
			generatePackageJson: true,
			optimization: true,
			outputHashing: 'none',
			sourceMap: true,
			target: 'node',
		}),
	],
	resolve: {
		extensionAlias: {
			'.js': ['.ts', '.js'],
		},
	},
};
