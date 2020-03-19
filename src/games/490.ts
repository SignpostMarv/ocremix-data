import { Game } from '../module';

import { org as nintendo } from '../orgs/2';
import { system as n64 } from '../systems/n64';

export const game: Game = {
	name: {
		en: 'The Legend of Zelda: Majora\'s Mask',
		ja: 'ゼルダの伝説 ムジュラの仮面',
	},
	id: 490,
	developer: nintendo,
	publisher: nintendo,
	systems: [
		n64,
	],
};
