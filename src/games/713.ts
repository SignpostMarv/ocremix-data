import { Game } from '../module';

import { org as sega } from '../orgs/1';

import { system as sms } from '../systems/sms';

export const game: Game = {
	name: {
		en: 'Sonic the hedgehog',
		ja: 'ソニック・ザ・ヘッジホッグ',
	},
	id: 713,
	developer: sega,
	publisher: sega,
	systems: [
		sms,
	],
};
