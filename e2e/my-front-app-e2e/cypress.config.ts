import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		...nxE2EPreset(__filename, {
			cypressDir: 'src',
			bundler: 'vite',
			webServerCommands: {
				default: 'nx run my-front-app:serve',
				production: 'nx run my-front-app:preview',
			},
			ciWebServerCommand: 'nx run my-front-app:serve-static',
		}),
		baseUrl: 'http://localhost:4200',
	},
});
