import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

    hidden = true;
    advanceFlag: boolean = true;
    public isCollapsed = true;
    enableOtp() {
      if (this.otpForm.valid) {
          this.advanceFlag = false;
      }
    }
    otpForm: FormGroup;
    submitted = false;
    error: string;
    loading = false;
    get mobile() {
        return this.otpForm.get('mobile');
    }
    no : string | null;
	show = false;
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.otpForm = this.formBuilder.group({
            mobile: new FormControl('', [
                Validators.required,
                Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
            ]),
        });
        this.no=localStorage.getItem('myData');
		console.log(this.no)
    }

    get f() {
        return this.otpForm.controls;
    }

    otpVerify() {
        this.submitted = true;
        if (this.otpForm.invalid) {
        return;
        }
        console.log(this.otpForm.value);  
    }

    numericOnly(event: { key: string; }) {
        let patt = /^([0-9])$/;
        let result = patt.test(event.key);
        return result;
    }

}
