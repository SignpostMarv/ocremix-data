export interface SrcsetSource {
	subpath: string;
	width: number;
}

export interface ImageSource extends SrcsetSource {
	height: number;
	srcset: Array<SrcsetSource>;
}

export interface Disc {
	name: string;
	index: number;
	tracks: Array<Track>;
	art: Array<ImageSource>;
	background?: ImageSource;
}

export interface Album {
	id: number;
	// I would spell this catalogue, but it's catalog on ocremix.org, so 🤷‍♂️
	catalogNumber: string;
	path: string;
	name: string;
	discs: Array<Disc>;
	credits: {
		directors: Credit[];
		arrangers: Credit[];
		composers: Credit[];
		performers: Credit[];
		artwork: Credit[];
	};
	games: Game[];
}

export interface AlbumWithArt extends Album {
	art: {
		covers: Array<ImageSource>;
		background: ImageSource;
	};
}

export interface Track {
	name: string;
	subpath: string;
	index: number;
	credits: Credit[];
	background?: ImageSource;
	games?: Game[];
}

export interface BrokenTrack extends Track {
	fixAvailable: boolean;
}

export type Credit = NamedCredit|CreditWithUrl|CreditWithId|GroupCredit|string;

export type Localable = string | string | {[locale: string]: string};

export interface NamedCredit {
	name: Localable;
}

export interface CreditWithUrl extends NamedCredit {
	url: string;
}

export interface CreditWithId extends NamedCredit {
	id: number;
}

export interface GroupCredit extends NamedCredit {
	members: Credit[];
}

export interface GroupCreditWithId extends GroupCredit, CreditWithId {}

// this would be spelled organisation, but it's organization on ocremix.org
export interface Organization {
	name: Localable;
	id: number;
}

export interface System {
	name: Localable;
	id: string;
	manufacturer: Organization;
}

export interface Game {
	name: Localable;
	id: number;
	publisher: Organization;
	developer: Organization;
	systems: System[];
}
