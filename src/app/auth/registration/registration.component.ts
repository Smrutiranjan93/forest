import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { MustMatch } from 'src/app/CustomValidators';
import { UserRegistration } from 'src/app/models/auth.model';
import { AlertService } from 'src/app/service/alert.service';
import { AuthService } from 'src/app/service/auth.service';
​
@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
    registerForm: FormGroup;
    submitted: boolean;
    loading: boolean;
    error: boolean;
    hide: true;
    registrationSuccess = false;
    userRegistration : UserRegistration;
    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
    ) { }
  ​
    ngOnInit(): void {
        this.registerForm = this.formBuilder.group({
            firstName: ['', [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(20),
                Validators.pattern(/^[A-Za-z\s]+$/),
            ]],
            lastName: ['', [
                Validators.required,
                Validators.pattern(/^[A-Za-z\s]+$/),
                Validators.maxLength(20),
            ]],
            gender: ['', (Validators.required)],
            mobileNo:['', [
                Validators.required,
                Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
            ]],
            emailId: ['', [
                Validators.required,
            //Validators.pattern(/^([0-9a-z]([-.\w][0-9a-z])@([0-9a-z][-\w]*[0-9a-z]\.)+[a-z]{5,25})$/),
                Validators.pattern(/^([0-9a-z]([-.\w]*[0-9a-z])*@([0-9a-z][-\w]*[0-9a-z]\.)+[a-z]{2,3})$/),
            ]],
            address: ['', (Validators.required)],
            password: new FormControl('', [
                Validators.required,
               //Validators.pattern(/^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{6,20}$/),
               Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')
              
            ]),
            confirmPassword: new FormControl('', [Validators.required]),              
            username: new FormControl(''),
            role: new FormControl('')
        },
        {
            validator: MustMatch('password', 'confirmPassword'),
        }) 
    }
    get f(){  
        return this.registerForm.controls;  
    } 
    
    register(){
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        } 
        this.loading = true;
        localStorage.setItem('myData', this.registerForm.value.mobileNo);    
        this.registerForm.value.username=this.registerForm.value.mobileNo;
        this.registerForm.value.role='CITIZEN';
        this.authService.userRegister(this.registerForm.value).subscribe((data: any) => {
            // this.alertService.success('Registration successful', true);
            console.log(data)
                    // if(this.registrationSuccess){

            this.router.navigate(['/sendOtp'])
                //  this.router.navigate(['/signIn'])
                    // }
        },	    
        error => {
            // this.alertService.error(error);
            this.loading = false;
            this.error = error.error;
        });
            // (error) => {
            //     this.loading = false;
            //     this.error = true;                
            // }   
        
    }
    numericOnly(event: { key: string; }) {
        let patt = /^([0-9])$/;
        let result = patt.test(event.key);
        return result;
    }
​
}