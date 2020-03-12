export interface SrcsetSource {
	subpath: string;
	width: number;
}

export interface ImageSource extends SrcsetSource {
	height: number;
	srcset: Array<SrcsetSource>;
}

export interface Discs {[name: string]: Array<Track>}

export interface Album {
	id: string;
	path: string;
	name: string;
	discs: Discs;
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
}

export interface BrokenTrack extends Track {
	fixAvailable: boolean;
}
