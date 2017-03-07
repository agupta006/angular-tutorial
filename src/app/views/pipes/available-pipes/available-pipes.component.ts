import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-available-pipes',
  templateUrl: './available-pipes.component.html',
  styleUrls: ['./available-pipes.component.scss']
})
export class AvailablePipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
   
  }
    name = "birthday";
    birthday = new Date(1993, 1, 6); // mm starts with 0

    toggle_flag = true;
    toggle (){
      this.toggle_flag = !this.toggle_flag;
    }

    get format(){return this.toggle_flag ? 'shortDate' : 'fullDate';  }

}
