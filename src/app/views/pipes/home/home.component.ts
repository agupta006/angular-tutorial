import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 title = 'Pipes';
  submenu = [{
    name: 'Custom Pipes',
    path: 'custom'
  }, {
    name: 'Already available pipe',
    path: 'available'
  }];
  constructor() { }

  ngOnInit() {
  }

}
