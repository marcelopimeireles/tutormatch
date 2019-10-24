import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TutorsListComponent } from './tutors-list.component';
import { FilterSortComponent } from './filter-sort/filter-sort.component';
import { TutorCardComponent } from './tutor-card/tutor-card.component';
import { ByCityPipe } from './tutor/by-city.pipe';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    TutorsListComponent,
    FilterSortComponent,
    TutorCardComponent,
    ByCityPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    OrderModule,
  ],
  exports: [
    TutorsListComponent,
    FilterSortComponent,
    TutorCardComponent,
  ]
})
export class TutorsListModule { }
