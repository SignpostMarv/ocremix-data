import { Game } from '../module';

import { org as sega } from '../orgs/1';

import { system as megadrive } from '../systems/gen';

export const game: Game = {
	name: {
		en: 'Sonic the Hedgehog 3',
		ja: 'ソニック・ザ・ヘッジホッグ3',
	},
	id: 24,
	developer: sega,
	publisher: sega,
	systems: [
		megadrive,
	],
};
