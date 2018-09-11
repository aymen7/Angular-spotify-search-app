import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  // hold the value for the id passed from the search-box coomponent through routing params
  album_id: string;
  /*
    * inject the constructor with ActivatedRoute instance.
    * subscribe to that instance.params (Observable) 
    * extract the value of the params['id'] and store it to out class instance of album_id
  */
  constructor(private _route: ActivatedRoute) {
    this._route.params.subscribe(
      params => {
        this.album_id = params['id'];
      });

   }

  ngOnInit() {
  }

}
