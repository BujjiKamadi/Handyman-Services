import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private route : ActivatedRoute, private router :Router) { }

  ngOnInit() {
  }
  showServices(){
    //console.log("working");
    this.router.navigate(['services'],{relativeTo : this.route});
  }
  showServiceDetails(id){
    console.log("details block");
    this.router.navigate(['plumbing', id],{relativeTo : this.route});
  }
  showProfile(){
    this.router.navigate(['profile'],{relativeTo : this.route});
  }
}
