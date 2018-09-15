import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  // hold the value for the id passed from the search-box coomponent through routing params
  album_id_route: string;
  album: Object;
  /*
    * inject the constructor with ActivatedRoute instance.
    * subscribe to that instance.params (Observable)
    * extract the value of the params['id'] and store it to out class instance of album_id
  */
  constructor(private _route: ActivatedRoute, private _spotify_service: SpotifyService) {
    this._route.params.subscribe(
      params => {
        this.album_id_route = params['id'];
      });
      this.album = new Object();
    }
   get_album_detail(id: string) {
    this._spotify_service.getAlbum(id).subscribe(
      data => {
      this.album = data;
      }
    );
   }
  ngOnInit() {
    this.get_album_detail(this.album_id_route);
  }

}
