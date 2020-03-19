import { Game } from '../module';

import { org as nintendo } from '../orgs/2';
import { system as snes } from '../systems/snes';

export const game: Game = {
	name: {
		en: 'The Legend of Zelda: A Link to the Past',
		ja: 'ゼルダの伝説 神々のトライフォース',
	},
	id: 66,
	developer: nintendo,
	publisher: nintendo,
	systems: [
		snes,
	],
};
