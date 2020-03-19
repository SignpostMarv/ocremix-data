import { Game } from '../module';

import { org as nintendo } from '../orgs/2';
import { system as nes } from '../systems/nes';

export const game: Game = {
	name: {
		en: 'Zelda II: The Adventure of Link',
		ja: 'リンクの冒険',
	},
	id: 65,
	developer: nintendo,
	publisher: nintendo,
	systems: [
		nes,
	],
};
