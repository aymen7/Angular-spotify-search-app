import { Image } from './image.model';
import { Artist } from './Artist.model';

export class Album {
    constructor(
        album_type: string,
        id: string,
        name: string,
        release_date: string,
        total_tracks: number,
        external_urls_spotify: string,
        images: Image[],
        artists: Artist[]
    ) {}
}
