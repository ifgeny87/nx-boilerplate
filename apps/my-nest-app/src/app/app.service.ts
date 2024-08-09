import { Injectable } from '@nestjs/common';
import { myLib01 } from 'my-lib01';
import { myLib02 } from 'my-lib02';

@Injectable()
export class AppService
{
	getData(): object {
		return {
			message: 'Hello API',
			lib01: myLib01(),
			lib02: myLib02(),
		};
	}
}
