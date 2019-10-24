import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  tagline: string;
  description: string;
  btnLabel: string;

  constructor() {
  }

  ngOnInit() {
    this.tagline = "The place where Tutors and Students meet";
    this.description = "Find out who can help you take your education to the next level.";
    this.btnLabel = "Get started now";
  }

}
