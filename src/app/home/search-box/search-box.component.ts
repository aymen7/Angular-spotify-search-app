import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../../app/spotify.service';
import { Album } from '../../../app/album.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  albums: Album[];
  // my searchForm
  searchForm: FormGroup;
  // pagination
  p: number;
  constructor(private _spotify: SpotifyService, private _fb: FormBuilder) {
    // init the searchForm using formBuilder.group()
    this.searchForm = _fb.group({
      'searchInput': ['', Validators.compose([Validators.required])]
    });
    // init p to start from 1
    // if you want to start from 2 make this.p = 2
    this.p = 1;
   }
  // use fetchingSearchData() to call the SpotifyService search()
  fetchingSearchData(search_query: string) {
    this._spotify.search(search_query, 'album').subscribe(
      data => {
        this.albums = data.albums.items;
        console.log(data.albums.items);
      }
    );

  }
  submitSearchForm(form: any) {
    if (this.searchForm.valid) {
      this.fetchingSearchData(form.searchInput);
    }
  }
  ngOnInit() {
    // display eminem's album onInit
    this.fetchingSearchData('eminem');
  }

}
