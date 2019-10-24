import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  title: string;

  constructor(private app: AppComponent) { }

  ngOnInit() {
    this.title = this.app.title;
  }

}
