import { Component, OnInit } from '@angular/core';
import { RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginEnable : boolean=false;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  handleClick($event){
    console.log("working");
    //this.router.navigate(['login']);
    this.loginEnable = true;
  }
}
