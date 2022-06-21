import { Component, Input, OnInit } from '@angular/core';
import { Mobile } from 'src/app/myClasses/karakowClass';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() student!: Mobile;
  constructor() { }

  ngOnInit(): void {
  }

}
