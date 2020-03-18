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
	id: string;
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
}

export interface BrokenTrack extends Track {
	fixAvailable: boolean;
}

export type Credit = NamedCredit|CreditWithUrl|CreditWithId|GroupCredit|string;

export interface NamedCredit {
	name: string | {[locale: string]: string};
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
