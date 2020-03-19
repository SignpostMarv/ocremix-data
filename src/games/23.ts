import { Game } from '../module';

import { org as sega } from '../orgs/1';
import { org as sonicteam } from '../orgs/3028';

import { system as megadrive } from '../systems/gen';

export const game: Game = {
	name: {
		en: 'Sonic the Hedgehog 2',
		ja: 'ソニック・ザ・ヘッジホッグ2',
	},
	id: 23,
	publisher: sega,
	developer: sonicteam,
	systems: [
		megadrive,
	],
};
