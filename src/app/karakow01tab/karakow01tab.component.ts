import { Component, OnInit, Input } from '@angular/core';
import { Mobile } from '../myClasses/karakowClass';

@Component({
  selector: 'app-karakow01tab',
  templateUrl: './karakow01tab.component.html',
  styleUrls: ['./karakow01tab.component.css']
})
export class Karakow01tabComponent implements OnInit {

  @Input() tab01info!: Mobile;

  constructor() { }

  ngOnInit(): void {
  }

}
