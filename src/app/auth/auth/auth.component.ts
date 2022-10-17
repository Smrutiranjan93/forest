import { Component, OnInit } from '@angular/core';
import { JwtConnectionService } from 'src/app/service/jwt-connection.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
    
    // authRequest: any = {
    //     "userName":"javatechie",
    //     "password":"password"
    // };
    // response:any;
    
    constructor() { }
 
    ngOnInit(): void {
        // this.getAccessToken(this.authRequest);
    }
  
    // public getAccessToken(authRequest: any){
    //     let resp=this.service.generateToken(authRequest);
    //     resp.subscribe(data=>this.accessApi(data));
    // }
  
  
    // public accessApi(token: string){
    //     let resp=this.service.welcome(token);
    //     resp.subscribe(data=>this.response=data);
    // }
    
}
