import { System } from '../module';

import { org as sega } from '../orgs/1';

export const system: System = {
	name: {
		en: 'Mega Drive', // technically correct
		'en-US': 'Genesis', // technically correct
		ja: 'メガドライブ',
	},
	id: 'gen',
	manufacturer: sega,
};
