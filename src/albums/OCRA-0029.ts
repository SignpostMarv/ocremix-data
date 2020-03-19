import { AlbumWithArt } from '../module';

import { artist as rekcahdam } from '../artists/12719';

import { artist as biggiantcircles } from '../artists/4635';
import { artist as c418 } from '../artists/10576';
import { artist as disasterpeace } from '../artists/10682';
import { artist as dong } from '../artists/8817';
import { artist as hyperducksoundworks } from '../artists/11143';
import { artist as jeffball } from '../artists/10683';
import { artist as joshwhelchel } from '../artists/5406';
import { artist as joshuamorse } from '../artists/4553';
import { artist as laurashigihara } from '../artists/9528';
import { artist as magnuspalsson } from '../artists/9899';
import { artist as matheusmanente } from '../artists/16533';
import { artist as mattiashaggstromgerdt } from '../artists/4751';
/* already imported
import { artist as rekcahdam } from '../artists/12719';
*/

import { artist as akitonakatsuka } from '../artists/219';
import { artist as asukahayazaki } from '../artists/509';
import { artist as hajimewakai } from '../artists/493';
import { artist as kazumitotaka } from '../artists/110';
import { artist as kentanagata } from '../artists/60';
import { artist as kojikondo } from '../artists/2';
import { artist as kozueishikawa } from '../artists/408';
import { artist as kyopi } from '../artists/9272';
import { artist as mahitoyokota } from '../artists/1311';
import { artist as minakoadachi } from '../artists/594';
import { artist as minakohamano } from '../artists/83';
import { artist as puresoundinc } from '../artists/435';
import { artist as shihofujii } from '../artists/5635';
import { artist as takeshihama } from '../artists/5233';
import { artist as toruminegishi } from '../artists/542';

import { artist as lisacoffman } from '../artists/15574';
import { artist as paulveer } from '../artists/15573';

const cover1 = {
	subpath: '/Artwork/Front (Legend) [Lisa Coffman].png',
	width: 700,
	height: 700,
	srcset: [],
};
const cover2 = {
	subpath: '/Artwork/Front (Triforce OCR Logo Edit) [Paul Veer, Liontamer].png',
	width: 700,
	height: 700,
	srcset: [],
};
const background = {
	subpath: '/Artwork/Front (Triforce) 500 [Paul Veer].png',
	width: 500,
	height: 500,
	srcset: [
		{
			subpath: '/Artwork/Front (Triforce) 700 [Paul Veer].png',
			width: 700,
		},
		{
			subpath: '/Artwork/Front (Triforce) 1000 [Paul Veer].png',
			width: 1000,
		},
	],
};

export const OCRA0029: AlbumWithArt = {
	id: 33,
	catalogNumber: 'OCRA-0029',
	path: '/Albums/25YEARLEGEND - A Legend of Zelda Indie Game Composer Tribute',
	name: '25YEARLEGEND - A Legend of Zelda Indie Game Composer Tribute',
	art: {
		covers: [
			cover1,
			cover2,
		],
		background,
	},
	discs: [
		{
			name: '',
			index: 1,
			tracks: [
				{
					subpath: '/MP3/01 Disasterpeace - Chamber of the Goddess [A Link to the Past].mp3',
					name: 'Chamber of the Goddess [A Link to the Past]',
					index: 1,
					credits: [
						disasterpeace,
					],
				},
				{
					subpath: '/MP3/02 Rekcahdam - Gimme My Sword! [Link\'s Awakening - A Link to the Past].mp3',
					name: 'Gimme My Sword! [Link\'s Awakening - A Link to the Past]',
					index: 2,
					credits: [
						rekcahdam,
					],
				},
				{
					subpath: '/MP3/03 Laura Shigihara - Fushigina Forest [A Link to the Past].mp3',
					name: 'Fushigina Forest [A Link to the Past]',
					index: 3,
					credits: [
						laurashigihara,
					],
				},
				{
					subpath: '/MP3/04 Joshua Morse - Link\'s Epoch [A Link to the Past].mp3',
					name: 'Link\'s Epoch [A Link to the Past]',
					index: 4,
					credits: [
						joshuamorse,
					],
				},
				{
					subpath: '/MP3/05 Jeff Ball - Labyrinth of Dance Floors [A Link to the Past].mp3',
					name: 'Labyrinth of Dance Floors [A Link to the Past]',
					index: 5,
					credits: [
						jeffball,
					],
				},
				{
					subpath: '/MP3/06 HyperDuck SoundWorks - Hoy, Small Fry! [Wind Waker - Ocarina of Time].mp3',
					name: 'Hoy, Small Fry! [Wind Waker - Ocarina of Time]',
					index: 6,
					credits: [
						hyperducksoundworks,
					],
				},
				{
					subpath: '/MP3/07 Air & Sea - To Everything There Is a Temple of Seasons [Oracle of Seasons].mp3',
					name: 'To Everything There Is a Temple of Seasons [Oracle of Seasons]',
					index: 7,
					credits: [
						{
							name: 'Air & Sea',
							url: 'https://cherof.com/',
						},
					],
				},
				{
					subpath: '/MP3/08 C418 - Skyward [Skyward Sword].mp3',
					name: 'Skyward [Skyward Sword]',
					index: 8,
					credits: [
						c418,
					],
				},
				{
					subpath: '/MP3/09 Big Giant Circles feat. Jeff Ball - Thunderstruck [Ocarina of Time - Legend of Zelda].mp3',
					name: 'Thunderstruck [Ocarina of Time - Legend of Zelda]',
					index: 9,
					credits: [
						biggiantcircles,
						jeffball,
					],
				},
				{
					subpath: '/MP3/10 Josh Whelchel - Zelda\'s First Trip to the \'Village\' [OOT - LTTP - LOZ].mp3',
					name: 'Zelda\'s First Trip to the \'Village\' [OOT - LTTP - LOZ]',
					index: 10,
					credits: [
						joshwhelchel,
					],
				},
				{
					subpath: '/MP3/11 MisfitChris - Village from Your Past [Ocarina of Time].mp3',
					name: 'Village from Your Past [Ocarina of Time]',
					index: 11,
					credits: [
						{
							name: 'MisfitChris',
							url: 'https://soundcloud.com/misfitchris',
						},
					],
				},
				{
					subpath: '/MP3/12 Mattias Haggstrom Gerdt - Hey, Listen [Ocarina of Time - Legend of Zelda].mp3',
					name: 'Hey, Listen [Ocarina of Time - Legend of Zelda]',
					index: 12,
					credits: [
						mattiashaggstromgerdt,
					],
				},
				{
					subpath: '/MP3/13 Kozilek - Last Dance of the Giants [Majora\'s Mask].mp3',
					name: 'Last Dance of the Giants [Majora\'s Mask]',
					index: 13,
					credits: [
						{
							name: 'Kozilek',
							url: 'https://twitter.com/kozilekmusic',
						},
					],
				},
				{
					subpath: '/MP3/14 Gryzor87 - Ilia\'s Adagio Meets Dark March [Twilight Princess - A Link to the Past].mp3',
					name: 'Ilia\'s Adagio Meets Dark March [Twilight Princess - A Link to the Past]',
					index: 14,
					credits: [
						{
							name: 'Gryzor87',
							url: 'https://www.youtube.com/user/gryzor87',
						},
					],
				},
				{
					subpath: '/MP3/15 Dong - Ballad of the Wind Fish (Kaze no Sakana Mix) [Link\'s Awakening].mp3',
					name: 'Ballad of the Wind Fish (Kaze no Sakana Mix) [Link\'s Awakening]',
					index: 15,
					credits: [
						dong,
					],
				},
				{
					subpath: '/MP3/16 CTPLR - Lon Lon Ranch (CTPLR Mix) [Ocarina of Time].mp3',
					name: 'Lon Lon Ranch (CTPLR Mix) [Ocarina of Time]',
					index: 16,
					credits: [
						{
							name: 'CTPLR',
							url: 'https://www.youtube.com/user/treycwong',
						},
					],
				},
				{
					subpath: '/MP3/17 SoulEye - Link\'s Final Battle [Link\'s Adventure].mp3',
					name: 'Link\'s Final Battle [Link\'s Adventure]',
					index: 17,
					credits: [
						{
							name: 'SoulEye',
							url: 'https://twitter.com/MPSouleye',
						},
					],
				},
				{
					subpath: '/MP3/18 Matheus Manente - Zelda\'s Graceful Nightmare [OOT - MM - WW].mp3',
					name: 'Zelda\'s Graceful Nightmare [OOT - MM - WW]',
					index: 18,
					credits: [
						matheusmanente,
					],
				},
			],
			art: [
				cover1,
				cover2,
				background,
			],
		},
	],
	credits: {
		directors: [
			rekcahdam,
		],
		arrangers: [
			biggiantcircles,
			c418,
			disasterpeace,
			dong,
			hyperducksoundworks,
			jeffball,
			joshwhelchel,
			joshuamorse,
			laurashigihara,
			magnuspalsson,
			matheusmanente,
			mattiashaggstromgerdt,
			rekcahdam,
		],
		composers: [
			akitonakatsuka,
			asukahayazaki,
			hajimewakai,
			kazumitotaka,
			kentanagata,
			kojikondo,
			kozueishikawa,
			kyopi,
			mahitoyokota,
			minakoadachi,
			minakohamano,
			puresoundinc,
			shihofujii,
			takeshihama,
			toruminegishi,
		],
		performers: [],
		artwork: [
			lisacoffman,
			paulveer,
		],
	},
};

export default OCRA0029;
