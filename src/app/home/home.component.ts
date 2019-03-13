import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style: boolean = false;
  users: Object;

  // dependency injection (dataservice) in constructor 
  constructor(private data: DataService) { }

  // is angular lifecyle cook. Will get executed whenever this file loads up (initiates)
  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data
      console.log(this.users);
      
    })
  }

  firstClick(){
    console.log("click");
    this.h1Style = true;
    // useful for a nightmode button for example
    this.data.firstClickData();
    
  }

}
