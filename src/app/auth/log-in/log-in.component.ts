import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { JwtConnectionService } from 'src/app/service/jwt-connection.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;
    error: string;
    // authRequest: AuthRequest;
    constructor(
        private formBuilder: FormBuilder, 
        private authService: AuthService,
        private jwtConnectionService: JwtConnectionService,
        private router: Router) { }
    
    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({  
            username:['', [Validators.required]],
            password:['', [Validators.required]]
        })
    }

    get f(){  
        return this.loginForm.controls;  
    } 

    login() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        // debugger
        console.log("response");
        this.authService.login(this.loginForm.value).subscribe((response: any) => {
            // this.jwtConnectionService.setRoles(response.user.role);
            this.jwtConnectionService.setToken(response.access_token);
            console.log(this.jwtConnectionService.getToken());
            console.log(response);
            // this.authService.getUserDetails().subscribe((response: any) => {
                this.router.navigate(['/userProfile'])
            // })
            
            // const role = response.user.role[0].roleName;
            // if (role === 'Admin') {
            //     this.router.navigate(['/admin']);
            // }
            // else {
            //     this.router.navigate(['/user']);
            // }
        },
        (error) => {
            console.log(error.error);
            this.error=error.error;
        });        
    }
}
