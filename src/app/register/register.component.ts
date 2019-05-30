import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router} from '@angular/router';

// export class HandyManClass {
//   public hID: Int32Array;
//   public hName: String;
//   public hServiceID: any;
//   public hServiceName: any;
//   public hRole: any;
//   public hWages: any;
//   public hPhone: any;
//   public hUserName: any;
//   public hPwd: any;
// }

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  handymanRegisterForm: FormGroup;
 // handymanObject : HandyManClass;
  handyManObjects:any
  constructor(private fb: FormBuilder, private httpService: HttpClient, private router: Router) { }

  ngOnInit() {
    this.handymanRegisterForm = this.fb.group({
      sName: [''],
      contactNo: [''],
      uName: [''],
      pwd: ['']

    });
  }
  onSubmit(): void {
    console.log(this.handymanRegisterForm);
    this.httpService.post('http://172.17.14.106:9982/handyman/addHandyManObject', {
      hName: this.handymanRegisterForm.get('sName').value,
      hServiceID: null,
      hServiceName: null,
      hRole: null,
      hWages: null,
      hPhone: this.handymanRegisterForm.get('contactNo').value,
      hUserName: this.handymanRegisterForm.get('uName').value,
      hPwd: this.handymanRegisterForm.get('pwd').value
    }, {responseType: 'text'}).subscribe(
      data => {
        //this.handymanObject = data as any;
        console.log(data);
        if(data == 'handyman object Added Successfully'){
          this.router.navigate(['login']);
        }
        else{
          console.log("registration failure");
        }
      },
      (err: HttpErrorResponse) => {
        console.log (err);
      }
    );
  }
}
