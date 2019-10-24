import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  title: string;
  tagline: string;

  constructor() { }

  ngOnInit() {
    this.title = "Our Tutors";
    this.tagline = "We have more than 100 tutors from various disciplines ready to match with you.";
  }

}
