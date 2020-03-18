import { AlbumWithArt, ImageSource } from '../module';

import { artist as wiesty } from '../artists/8640.js';

import { artist as drumultima } from '../artists/4724.js';
import { artist as fratto } from '../artists/14336.js';
import { artist as jonnyallen } from '../artists/15296.js';
import { artist as nostalvania } from '../artists/13849.js';
import { artist as samsuggs } from '../artists/15295.js';
import { artist as triplepointtrio } from '../artists/15233.js';
/* already imported
import { artist as wiesty } from '../artists/8640.js';
*/

import { artist as nobuouematsu } from '../artists/3.js';
import { artist as norikomatsueda } from '../artists/135.js';
import { artist as yasunorimitsuda } from '../artists/4.js';

import { artist as andyp } from '../artists/14466.js';
import { artist as anthonylofton } from '../artists/4769.js';
import { artist as audiofidelity } from '../artists/5198.js';
import { artist as bowlerhat } from '../artists/15234.js';
import { artist as theocjazzcollective } from '../artists/14337.js';
import { artist as uvsirj } from '../artists/10893.js';
import { artist as xprtnovice } from '../artists/12064.js';

import { artist as oceansandrew } from '../artists/4729.js';

const front: ImageSource = {
	subpath: '/Artwork/Front [OA].png',
	width: 1024,
	height: 1024,
	srcset: [
		{
			subpath: '/Artwork/Front embed.png',
			width: 700,
		},
	],
};

const back: ImageSource = {
	subpath: '/Artwork/Back [OA, Max Nolan].png',
	width: 1024,
	height: 1024,
	srcset: [
	],
};

const background: ImageSource = {
	subpath: '/Artwork/The OC Jazz Collective w-names [RurouniZel].png',
	width: 4608,
	height: 3456,
	srcset: [
	],
};

const trackBackgrounds: {[key: string]: ImageSource} = {
	track1: {
		subpath: '/Artwork/65,000,000 B.C. [Max Nolan].jpg',
		width: 4800,
		height: 2700,
		srcset: [
		],
	},
	track3: {
		subpath: '/Artwork/12,000 B.C. [Schwarzer Alptraum].png',
		width: 1920,
		height: 1080,
		srcset: [
		],
	},
	track4: {
		subpath: '/Artwork/600 A.D. [Schwarzer Alptraum].png',
		width: 1920,
		height: 1080,
		srcset: [
		],
	},
	track5: {
		subpath: '/Artwork/1000 A.D. [Glauber Lopes].jpg',
		width: 3920,
		height: 2203,
		srcset: [
		],
	},
	track6: {
		subpath: '/Artwork/1999 A.D. [RurouniZel].png',
		width: 2400,
		height: 1350,
		srcset: [
		],
	},
	track7: {
		subpath: '/Artwork/2300 A.D. [Glauber Lopes].jpg',
		width: 6920,
		height: 3889,
		srcset: [
		],
	},
	track8: {
		subpath: '/Artwork/End of Time [RurouniZel].png',
		width: 2400,
		height: 1350,
		srcset: [
		],
	},
};

export const OCRA0060: AlbumWithArt = {
	id: 'OCRA0060',
	path: '/Albums/Chronology - A Jazz Tribute to Chrono Trigger',
	name: 'Chronology - A Jazz Tribute to Chrono Trigger',
	art: {
		covers: [
			front,
			back,
		],
		background,
	},
	discs: [
		{
			name: '',
			index: 1,
			tracks: [
				{
					subpath: '/MP3/01 Wiesty, The OC Jazz Collective - Way Before the Day Before Yesterday (65,000,000 B.C.).mp3',
					name: 'Way Before the Day Before Yesterday (65,000,000 B.C.)',
					index: 1,
					credits: [
						wiesty,
						theocjazzcollective,
					],
					background: trackBackgrounds.track1,
				},
				{
					subpath: '/MP3/02 Triplepoint Trio - Triggernometry.mp3',
					name: 'Triggernometry',
					index: 2,
					credits: [
						triplepointtrio,
					],
				},
				{
					subpath: '/MP3/03 Nostalvania, The OC Jazz Collective - Time\'s Seal (12,000 B.C.).mp3',
					name: 'Time\'s Seal (12,000 B.C.)',
					index: 3,
					credits: [
						nostalvania,
						theocjazzcollective,
					],
					background: trackBackgrounds.track3,
				},
				{
					subpath: '/MP3/04 Wiesty, The OC Jazz Collective - Neuga, Ziena, Zieber, Zom… (600 A.D.).mp3',
					name: 'Neuga, Ziena, Zieber, Zom… (600 A.D.)',
					index: 4,
					credits: [
						wiesty,
						theocjazzcollective,
					],
					background: trackBackgrounds.track4,
				},
				{
					subpath: '/MP3/05 Wiesty, The OC Jazz Collective - Dream of Green (1000 A.D.).mp3',
					name: 'Dream of Green (1000 A.D.)',
					index: 5,
					credits: [
						wiesty,
						theocjazzcollective,
					],
					background: trackBackgrounds.track5,
				},
				{
					subpath: '/MP3/06 Nostalvania, The OC Jazz Collective - Fight or Flight (1999 A.D.).mp3',
					name: 'Fight or Flight (1999 A.D.)',
					index: 6,
					credits: [
						nostalvania,
						theocjazzcollective,
					],
					background: trackBackgrounds.track6,
				},
				{
					subpath: '/MP3/07 Wiesty, The OC Jazz Collective - When Hell Freezes Over (2300 A.D.).mp3',
					name: 'When Hell Freezes Over (2300 A.D.)',
					index: 7,
					credits: [
						wiesty,
						theocjazzcollective,
					],
					background: trackBackgrounds.track7,
				},
				{
					subpath: '/MP3/08 Fratto, Wiesty, The OC Jazz Collective - Driftwood (End of Time).mp3',
					name: 'Driftwood (End of Time)',
					index: 8,
					credits: [
						fratto,
						wiesty,
						theocjazzcollective,
					],
					background: trackBackgrounds.track8,
				},
			],
			art: [
				front,
				background,
			],
		},
	],
	credits: {
		directors: [
			wiesty,
		],
		arrangers: [
			drumultima,
			fratto,
			jonnyallen,
			nostalvania,
			samsuggs,
			triplepointtrio,
		],
		composers: [
			nobuouematsu,
			norikomatsueda,
			yasunorimitsuda,
		],
		performers: [
			andyp,
			anthonylofton,
			audiofidelity,
			bowlerhat,
			theocjazzcollective,
			uvsirj,
			xprtnovice,
		],
		artwork: [
			'RurouniZel',
			'Max Nolan',
			oceansandrew,
			'Glauber Lopes',
			'Schwarzer Alptraum',
		],
	},
};

export default OCRA0060;
