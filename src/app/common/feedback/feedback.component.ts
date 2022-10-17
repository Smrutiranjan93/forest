import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { JwtConnectionService } from 'src/app/service/jwt-connection.service';
import { feedback } from 'src/app/models/feedback.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  feedbackForm: FormGroup;
  rating3: number;
  public form: FormGroup;
  rating5: number;
  rating4: number;
  rating2: number;
  rating1:number;
  submitted: boolean;
  loading: boolean;
  error: any;
  ratingform: FormGroup;

  constructor(private fb: FormBuilder, private formBuilder: FormBuilder, 
    private authService: AuthService,
    private jwtConnectionService: JwtConnectionService,
    private router: Router){
    this.ratingform = this.fb.group({
      rating1: ['', Validators.required],
      rating2: ['',Validators.required],
      rating3:['', Validators.required],
      rating4:['', Validators.required],
      rating5:['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.feedbackForm = this.formBuilder.group({  
      name:['', [Validators.required]],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      mobile:['', [
      Validators.required, Validators.pattern("[0-9]{10}") ,]],
      sggestion:['', [Validators.required]],
      rating1:['', [Validators.required]],
      rating2:['', [Validators.required]],
      rating3:['', [Validators.required]],
      rating4:['', [Validators.required]],
      rating5:['', [Validators.required]],
      capatch:['', [Validators.required]],

  })
  }
  get f(){  
    return this.feedbackForm.controls;  
    
} 

feedback() {
    this.submitted = true;
    if (this.feedbackForm.invalid) {
      return;
  }
  this.loading = true;
  localStorage.setItem('data', this.feedbackForm.value.name)
  this.feedbackForm.value.name= "";
  this.feedbackForm.value.email= "";
  this.feedbackForm.value.mobileNo = "";
  this.feedbackForm.value.rating1=  "";
  this.feedbackForm.value.rating2= "";
  this.feedbackForm.value.rating3="";
  this.feedbackForm.value.rating4="";
  this.feedbackForm.value.rating5=""

  this.authService.feedback(this.feedbackForm.value).subscribe((response:any)=>{
    
    console.log(response);
    this.router.navigate(['/feedback'])

  }, error=>{
    this.loading = false;
    this.error = error.error;
  }
  )
}

}