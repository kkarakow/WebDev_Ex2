import { Component, OnInit, Input } from '@angular/core';
import { dogClub } from '../karakowInterface';
import { dogBreeds } from '../karakowInterface';


@Component({
  selector: 'app-karakow03tab',
  templateUrl: './karakow03tab.component.html',
  styleUrls: ['./karakow03tab.component.css']
})
export class Karakow03tabComponent implements OnInit {

  @Input() tab03Club!: dogClub;
  @Input() tab03Breed!: dogBreeds[];  

  constructor() { }

  ngOnInit(): void {
  }

}
