import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  images: any[];
  handymanLoginForm : FormGroup;
  customerLoginForm : FormGroup;
  handymanArray: string [];
  i:number;
  handymanArrayLen : number;
  errMsg : boolean=false;
  constructor(private fb : FormBuilder, private httpService: HttpClient, private router: Router) { }

  ngOnInit() {
    this.images = [];
    this.images.push({source:'assets/images/gallery1.jpg', alt:'Description for Image 1', title:'Title 1',});
    this.images.push({source:'assets/images/sub2.jpg', alt:'Description for Image 2', title:'Title 2'});
    this.images.push({source:'assets/images/sub3.jpg', alt:'Description for Image 3', title:'Title 3'});
    this.images.push({source:'assets/images/sub1.jpg', alt:'Description for Image 4', title:'Title 4'});

    this.handymanLoginForm = this.fb.group({
      HandymanUserName : [''],
      HandymanPwd : ['']
    });

    this.customerLoginForm = this.fb.group({
      CustUserName : [''],
      CustPwd : ['']
    });
  }
  //checking login credentials
  onHandymanLogin() : void {
    console.log("working");
    console.log(this.handymanLoginForm.value);

    this.httpService.get('http://172.17.14.106:9982//handyman//getHandyManObjects').subscribe(
      data => {
        console.log(data);
        this.handymanArray = data as string [];
        this.handymanArrayLen = this.handymanArray.length;
        console.log(this.handymanArrayLen);
      },
      (err : HttpErrorResponse) => {
        console.log(err.message);
        console.log(err);
      }
    );

    for(this.i =0;this.i<=this.handymanArrayLen-1;this.i++) {
      //console.log(this.handymanArray[this.i]['hUserName']);
      //console.log(this.handymanArray[this.i]['hPwd']);
      //console.log(this.handymanArray[0]['hUserName']);
     // console.log(this.handymanArray[0]['hPwd']);
      if(this.handymanLoginForm.get('HandymanUserName').value==this.handymanArray[this.i]['hUserName'] && this.handymanLoginForm.get('HandymanPwd').value==this.handymanArray[this.i]['hPwd']){
        this.router.navigate(['login/sidebar/services']);
      }
      else{
        console.log("failuer");
        this.errMsg=true;
      }
    }
  }

  //checking login credentials
  onSubmit() : void {
    console.log("working");
    console.log(this.customerLoginForm);
    this.httpService.get("http://172.17.14.106:9982//handyman//getHandyManObjects").subscribe(
      data => {
        console.log(data);
      },
      (err : HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}
