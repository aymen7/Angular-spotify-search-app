import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../../album.model';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss']
})
export class Card2Component implements OnInit {
@Input() album_back: Album;
  constructor() { }

  ngOnInit() {
  }

}
