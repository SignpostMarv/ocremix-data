import { Game } from '../module';

import { org as nintendo } from '../orgs/2';
import { system as wii } from '../systems/wii';

export const game: Game = {
	name: {
		en: 'The Legend of Zelda: Skyward Sword',
		ja: 'ゼルダの伝説 スカイウォードソード',
	},
	id: 725,
	developer: nintendo,
	publisher: nintendo,
	systems: [
		wii,
	],
};
