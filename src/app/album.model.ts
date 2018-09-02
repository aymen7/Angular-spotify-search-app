import { Image } from './image.model';

export class Album{
    constructor(
        album_type: string,
        id: string,
        name: string,
        release_date: string,
        total_tracks: number,
        external_urls: string[],
        images: Image[]
    ) {}
}