import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../../album.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() album: Album;
  constructor() { }

  ngOnInit() {
  }

}
