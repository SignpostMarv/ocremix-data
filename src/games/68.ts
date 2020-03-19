import { Game } from '../module';

import { org as nintendo } from '../orgs/2';
import { system as gameboy } from '../systems/gb';

export const game: Game = {
	name: {
		en: 'The Legend of Zelda: Link\'s Awakening',
		ja: 'ゼルダの伝説 夢をみる島',
	},
	id: 68,
	developer: nintendo,
	publisher: nintendo,
	systems: [
		gameboy,
	],
};
