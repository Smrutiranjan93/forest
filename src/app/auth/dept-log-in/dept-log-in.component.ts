import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtConnectionService } from 'src/app/service/jwt-connection.service';

@Component({
  selector: 'app-dept-log-in',
  templateUrl: './dept-log-in.component.html',
  styleUrls: ['./dept-log-in.component.scss']
})
export class DeptLogInComponent implements OnInit {
    
    loginForm: FormGroup;
    submitted = false;
    constructor(private formBuilder: FormBuilder) {
    }
    ngOnInit(): void {
      this.loginForm = this.formBuilder.group({  
        userName:['', [Validators.required]],
        password:['', [Validators.required]]
      })
    }
    get f(){  
      return this.loginForm.controls;  
    }
    submit(){
        this.submitted = true;
        if (this.loginForm.invalid) {
        return;
        }
    }
    // authRequest: any = {
    //     "userName":"javatechie",
    //     "password":"password"
    // };
    // response:any;
    
    // constructor(private service:JwtConnectionService) { }

    // ngOnInit(): void {
    //     this.getAccessToken(this.authRequest);
    // }
  
    // public getAccessToken(authRequest: any){
    //     let resp=this.service.generateToken(authRequest);
    //     resp.subscribe(data=>this.accessApi(data));
    // }
  
  
    // public accessApi(token: string){
    //     let resp=this.service.welcome(token);
    //     resp.subscribe(data=>this.response=data);
    // }
    
}
