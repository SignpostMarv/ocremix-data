import { AlbumWithArt } from '../module';

import { artist as halc } from '../artists/4793';

import { artist as benbriggs } from '../artists/4651';
import { artist as brandonstrader } from '../artists/5409';
import { artist as drumultima } from '../artists/4724';
import { artist as gamebox } from '../artists/4687';
/* already imported
import { artist as halc } from '../artists/4793';
*/
import { artist as harmony } from '../artists/4661';
import { artist as jewbei } from '../artists/4798';
import { artist as josethebronxrican } from '../artists/4598';
import { artist as joshuamorse } from '../artists/4553';
import { artist as miearth } from '../artists/9962';
import { artist as oceansandrew } from '../artists/4729';
import { artist as protodome } from '../artists/5178';
import { artist as rexy } from '../artists/4655';
import { artist as scaredsim } from '../artists/4765';
import { artist as willrock } from '../artists/5043';

import { artist as armandoperaza } from '../artists/13422';
import { artist as bobbyvega } from '../artists/13423';
import { artist as davidyoung } from '../artists/3638';
import { artist as markcrew } from '../artists/13421';
import { artist as masafumiogata } from '../artists/300';
import { artist as masatonakamura } from '../artists/26';
import { artist as naofumihataya } from '../artists/161';
import { artist as pastiche } from '../artists/301';
import { artist as spencernnilsen } from '../artists/170';
import { artist as yukifumimakino } from '../artists/1177';
import { artist as yuzokoshiro } from '../artists/1';

import { artist as dish } from '../artists/15577';
/* already imported
import { artist as protodome } from '../artists/5178';
*/

const cover = {
	subpath: '/Artwork/Front embed.png',
	width: 700,
	height: 700,
	srcset: [
		{
			subpath: '/Artwork/Front [Denny \'dish\' Iskandar, ProtoDome].png',
			width: 2000,
		},
	],
};

export const OCRA0025: AlbumWithArt = {
	id: 29,
	catalogNumber: 'OCRA-0025',
	path: '/Albums/Sonic the Hedgehog - The Sound of Speed',
	name: 'Sonic the Hedgehog - The Sound of Speed',
	art: {
		covers: [
			cover,
			{
				subpath: '/Artwork/Back [ProtoDome].png',
				width: 2000,
				height: 2000,
				srcset: [],
			},
		],
		background: {
			subpath: '/Artwork/Website [OA].jpg',
			width: 1690,
			height: 1142,
			srcset: [],
		},
	},
	discs: [
		{
			name: '',
			index: 1,
			tracks: [
				{
					subpath: '/MP3/01 A, B, C, Start!.mp3',
					name: 'A, B, C, Start!',
					index: 1,
					credits: [
						halc,
						oceansandrew,
					],
				},
				{
					subpath: '/MP3/02 The Sound of Speed.mp3',
					name: 'The Sound of Speed',
					index: 2,
					credits: [
						oceansandrew,
						scaredsim,
					],
				},
				{
					subpath: '/MP3/03 Shifting Islands.mp3',
					name: 'Shifting Islands',
					index: 3,
					credits: [
						halc,
						miearth,
						protodome,
					],
				},
				{
					subpath: '/MP3/04 Subsonic Sparkle.mp3',
					name: 'Subsonic Sparkle',
					index: 4,
					credits: [
						gamebox,
					],
				},
				{
					subpath: '/MP3/05 Spring Junkie.mp3',
					name: 'Spring Junkie',
					index: 5,
					credits: [
						halc,
					],
				},
				{
					subpath: '/MP3/06 Bubble Junkie.mp3',
					name: 'Bubble Junkie',
					index: 6,
					credits: [
						benbriggs,
					],
				},
				{
					subpath: '/MP3/07 Fifty Rings to Ride.mp3',
					name: 'Fifty Rings to Ride',
					index: 7,
					credits: [
						joshuamorse,
					],
				},
				{
					subpath: '/MP3/08 Under Construction.mp3',
					name: 'Under Construction',
					index: 8,
					credits: [
						drumultima,
						harmony,
					],
				},
				{
					subpath: '/MP3/09 Hogtied.mp3',
					name: 'Hogtied',
					index: 9,
					credits: [
						brandonstrader,
						rexy,
					],
				},
				{
					subpath: '/MP3/10 Caos.mp3',
					name: 'Caos',
					index: 10,
					credits: [
						josethebronxrican,
					],
				},
				{
					subpath: '/MP3/11 Clockwork Criminal.mp3',
					name: 'Clockwork Criminal',
					index: 11,
					credits: [
						willrock,
					],
				},
				{
					subpath: '/MP3/12 Final Progression.mp3',
					name: 'Final Progression',
					index: 12,
					credits: [
						jewbei,
					],
				},
				{
					subpath: '/MP3/13 A Hog in His Prime.mp3',
					name: 'A Hog in His Prime',
					index: 13,
					credits: [
						brandonstrader,
						halc,
						willrock,
					],
				},
			],
			art: [
				cover,
				{
					subpath: '/Artwork/Logo [ProtoDome].jpg',
					width: 2258,
					height: 962,
					srcset: [
					],
				},
				{
					subpath: '/Artwork/Sonic [Denny \'dish\' Iskandar].png',
					width: 3002,
					height: 1628,
					srcset: [
					],
				},
			],
		},
	],
	credits: {
		directors: [
			halc,
		],
		arrangers: [
			benbriggs,
			brandonstrader,
			drumultima,
			gamebox,
			halc,
			harmony,
			jewbei,
			josethebronxrican,
			joshuamorse,
			miearth,
			oceansandrew,
			protodome,
			rexy,
			scaredsim,
			willrock,
		],
		composers: [
			armandoperaza,
			bobbyvega,
			davidyoung,
			markcrew,
			masafumiogata,
			masatonakamura,
			naofumihataya,
			pastiche,
			spencernnilsen,
			yukifumimakino,
			yuzokoshiro,
		],
		performers: [],
		artwork: [
			dish,
			protodome,
			oceansandrew, // background image?
		],
	},
};

export default OCRA0025;
