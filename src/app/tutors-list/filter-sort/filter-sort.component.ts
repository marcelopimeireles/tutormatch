import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-sort',
  templateUrl: './filter-sort.component.html',
  styleUrls: ['./filter-sort.component.scss']
})
export class FilterSortComponent implements OnInit {
  @Input() criterias: any;
  @Output() changeCity = new EventEmitter();
  @Output() changeSorting = new EventEmitter();
  lblFilter: string;
  lblSort: string;
  selectedFilter: string;
  selectedSort: string;

  constructor() { }

  ngOnInit() {
    this.lblFilter = 'Filter by:';
    this.lblSort = 'Sort by:';
    this.selectedFilter = '';
    this.selectedSort = this.criterias.sorts[0];
    this.getSelectedSorting(this.selectedSort);
  }

  getSelectedCity(filter) {
    if (this.selectedFilter === filter) {
      this.selectedFilter = '';
    } else {
      this.selectedFilter = filter;
    }
    this.changeCity.emit(this.selectedFilter)
  }

  getSelectedSorting(sort) {
    if (this.selectedSort !== sort) {
      this.selectedSort = sort;
    }
    this.changeSorting.emit(this.selectedSort);
  }
}
