import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { element } from 'protractor';

@Component({
  selector: "app-plumbing",
  templateUrl: "./plumbing.component.html",
  styleUrls: ["./plumbing.component.css"]
})
export class PlumbingComponent implements OnInit {
  serviceID: number;
  i: number;
  handymanArrayLen : number;
  handyManObjects: string[];
  handymanFilteredList : string[]=[];
  constructor(private httpService: HttpClient, private route: ActivatedRoute) {
    this.serviceID = route.snapshot.params["id"];
  }


  ngOnInit() {
    this.httpService
      .get("http://172.17.14.106:9982/handyman/getHandyManObjects")
      .subscribe(
        data => {
          this.handyManObjects = data as string[]; // FILL THE ARRAY WITH DATA.
          this.handymanArrayLen = this.handyManObjects.length;
          //console.log(this.handyManObjects);
          //console.log(this.serviceID);
          //this.handyManObjects = this.handyManObjects.filter(this.getValidService);
          for(this.i =0 ; this.i < this.handymanArrayLen-1; this.i++){
            if(this.handyManObjects[this.i]['hServiceID'] == this.serviceID){
              console.log("if block");
              this.handymanFilteredList.push(this.handyManObjects[this.i]);
              //console.log(this.handymanFilteredList);
            }
            else{
              console.log("else block");
            }
          }
        },
        (err: HttpErrorResponse) => {
          console.log(err);
        }
      );
  }
  // getValidService(element ,index,array){
  //   console.log(this.serviceID);
  //   console.log(element['hServiceID'] == this.serviceID);
  // }
}
