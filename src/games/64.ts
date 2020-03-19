import { Game } from '../module';

import { org as nintendo } from '../orgs/2';
import { system as nes } from '../systems/nes';

export const game: Game = {
	name: {
		en: 'The Legend of Zelda',
		ja: 'THE HYRULE FANTASY ゼルダの伝説',
	},
	id: 64,
	developer: nintendo,
	publisher: nintendo,
	systems: [
		nes,
	],
};
