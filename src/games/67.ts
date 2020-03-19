import { Game } from '../module';

import { org as nintendo } from '../orgs/2';
import { system as n64 } from '../systems/n64';

export const game: Game = {
	name: {
		en: 'The Legend of Zelda: Ocarina of Time',
		ja: 'ゼルダの伝説 時のオカリナ',
	},
	id: 67,
	developer: nintendo,
	publisher: nintendo,
	systems: [
		n64,
	],
};
