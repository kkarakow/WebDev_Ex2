import { Component, Input } from '@angular/core';
import { Mobile } from './myClasses/karakowClass';
import { dogClub } from './karakowInterface';
import { dogBreeds } from './karakowInterface';
import finalExamData from '../assets/data/FinalExam.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'karakow64233';

  dataDogClub: dogClub = finalExamData.DogClub;
  dataDogBreeds: dogBreeds[] = finalExamData.dogBreeds;

  student: Mobile= {studentNumber64233: 991627844, 
                    program64233 : "Computer Programming",
                    LOGkarakow : "karakow",
                    FIRSTkarakow : "Katarzyna",
                    LASTkarakow : "Karakow"}

  @Input() dClub!: dogClub[];
  @Input() dBreed!: dogBreeds[];                  
}
