import { Game } from '../module';

import { org as nintendo } from '../orgs/2';
import { system as gbc } from '../systems/gbc';

export const game: Game = {
	name: {
		en: 'The Legend of Zelda: Oracle of Seasons',
		ja: 'ゼルダの伝説 ふしぎの木の実 大地の章',
	},
	id: 726,
	developer: nintendo,
	publisher: nintendo,
	systems: [
		gbc,
	],
};
