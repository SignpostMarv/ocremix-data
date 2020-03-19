import { Game } from '../module';

import { org as sega } from '../orgs/1';
import { org as sonicteam } from '../orgs/3028';

import { system as megadrive } from '../systems/gen';

export const game: Game = {
	name: {
		en: 'Sonic the hedgehog',
		ja: 'ソニック・ザ・ヘッジホッグ',
	},
	id: 22,
	developer: sonicteam,
	publisher: sega,
	systems: [
		megadrive,
	],
};
