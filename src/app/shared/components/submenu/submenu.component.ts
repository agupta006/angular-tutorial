import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {

  @Input() submenu: Array<string>;
  constructor() { }

  ngOnInit() {
  }

}
