import { Component, OnInit, Output, Input } from '@angular/core';

import { TutorService } from './tutor/tutor.service';
import { Tutor } from './tutor/tutor.model';
import * as _ from 'lodash';


@Component({
  selector: 'app-tutors-list',
  templateUrl: './tutors-list.component.html',
  styleUrls: ['./tutors-list.component.scss']
})
export class TutorsListComponent implements OnInit {
  criterias: any;
  btnLabel: string;
  sortOrder: string;
  fullList: boolean;
  @Output() allTutors: Tutor[] = [];
  @Output() tutors: Tutor[] = [];
  @Output() selectedCity: string;
  @Output() selectedSorting: string;


  constructor(private tutorService: TutorService) { }

  ngOnInit() {
    this.fullList = false;
    this.criterias = {
      filters: ['Liverpool','London','Manchester'],
      sorts: ['Name','City'],
    };
    this.btnLabel = "See all Tutors";
    this.getAllTutors();
  }

  getAllTutors() {
    this.tutorService.getTutors().subscribe(data => {
      this.allTutors = _.orderBy(data.map(
        e => {
          return {
            id: e.payload.doc.id,
            ... e.payload.doc.data()
          } as Tutor;
        }
      ), [this.sortOrder, 'asc']);
      this.tutors = (this.allTutors.length > 4) ? _.dropRight(this.allTutors, this.allTutors.length - 4) : this.allTutors;
    });
  }

  updateCity(value) {
    this.reSorting(this.selectedSorting);
    this.selectedCity = value;
  }

  updateSorting(value) {
    this.selectedSorting = value;
    this.reSorting(value)
  }

  reSorting(value) {
    this.sortOrder = value.toLowerCase();
    var tutorsOrdered = _.orderBy(this.allTutors, [this.sortOrder, 'asc']);
    this.allTutors = tutorsOrdered;
    this.tutors = _.dropRight(this.allTutors, this.allTutors.length - 4);
  }

  moreTutors() {
    this.fullList = !this.fullList;
  }

}
