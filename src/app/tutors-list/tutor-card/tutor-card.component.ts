import { Component, OnInit, Input } from '@angular/core';
import { Tutor } from '../tutor/tutor.model';

@Component({
  selector: 'app-tutor-card',
  templateUrl: './tutor-card.component.html',
  styleUrls: ['./tutor-card.component.scss']
})
export class TutorCardComponent implements OnInit {
  @Input() tutor: Tutor;
  @Input() selectedCity: string;
  @Input() selectedSorting: string;

  defaults: any;
  imgPath: string;

  constructor() { }

  ngOnInit() {
    this.imgPath = '../../assets/images/';

    this.defaults = {
      lblCity: 'City',
      lblStudents: 'Students so far',
      imgTutor: this.imgPath + 'user-photo.svg',
      imgStudent: this.imgPath + 'student-photo.svg'
    }
    
    if (Object.keys(this.tutor).length == 0) {
      this.tutor = {
        id: '0',
        name: 'Jonh Issac',
        city: 'London',
        students: []
      }
    }
  }

}
