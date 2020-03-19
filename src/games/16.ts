import { Game } from '../module';

import { org as square } from '../orgs/123';
import { system as snes } from '../systems/snes';

export const game: Game = {
	name: {
		en: 'Chrono Trigger',
		ja: 'クロノ・トリガー',
	},
	id: 16,
	publisher: square,
	developer: square,
	systems: [
		snes,
	],
};
