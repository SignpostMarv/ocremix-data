import { Game } from '../module';

import { org as sega } from '../orgs/1';

import { system as segacd } from '../systems/scd';

export const game: Game = {
	name: {
		en: 'Sonic CD',
		ja: 'ソニック・ザ・ヘッジホッグCD',
	},
	id: 146,
	developer: sega,
	publisher: sega,
	systems: [
		segacd,
	],
};
