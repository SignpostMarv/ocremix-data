import { Game } from '../module';

import { org as nintendo } from '../orgs/2';
import { system as gamecube } from '../systems/gcn';

export const game: Game = {
	name: {
		en: 'The Legend of Zelda: The Wind Waker',
		ja: 'ゼルダの伝説 風のタクト',
	},
	id: 377,
	developer: nintendo,
	publisher: nintendo,
	systems: [
		gamecube,
	],
};
