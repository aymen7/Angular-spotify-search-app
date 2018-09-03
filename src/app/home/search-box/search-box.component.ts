import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../../app/spotify.service';
import { Album } from '../../../app/album.model';
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  albums: Album[];
  constructor(private _spotify: SpotifyService) {
    this.fetchingSearchData();
   }
  fetchingSearchData() {
    this._spotify.search('eminem', 'album', 3).subscribe(
      data => {
        this.albums = data.albums.items;
        console.log(data.albums.items);
      }
    );

  }
  ngOnInit() {
  }

}
