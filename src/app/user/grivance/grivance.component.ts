import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-grivance',
  templateUrl: './grivance.component.html',
  styleUrls: ['./grivance.component.scss']
})
export class GrivanceComponent implements OnInit {
  grievanceForm: FormGroup;
  submitted: boolean;
  constructor(
    private formBuilder: FormBuilder
  ) { }
  ngOnInit(): void {
    this.grievanceForm = this.formBuilder.group({
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
      email: ['', [
        Validators.required,
        Validators.pattern(/^([0-9a-z]([-.\w]*[0-9a-z])*@([0-9a-z][-\w]*[0-9a-z]\.)+[a-z]{2,3})$/),
      ]],
      mobile:['', [
        Validators.required,
         Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
        ]],
        ward: ['', (Validators.required)],
        lane: ['', (Validators.required)],
        dept: ['', (Validators.required)],
        category: ['', (Validators.required)],
  });
}
  get f(){  
    return this.grievanceForm.controls;  
  } 
   
  register(){
    this.submitted = true;
        if (this.grievanceForm.invalid) {
            return;
        } 
  }
  numericOnly(event: { key: string; }) {
        let patt = /^([0-9])$/;
        let result = patt.test(event.key);
        return result;
    }
}