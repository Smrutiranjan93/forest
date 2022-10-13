import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { JwtConnectionService } from 'src/app/service/jwt-connection.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    translateservice: any;
  Marqueedata: any;
  Marquee: any;
 // getMarquee:Marquee[];
    constructor(
      // private authService: AuthService,
      private router: Router,
      public jwtConnectionService: JwtConnectionService ,private authService: AuthService, private httpClient:HttpClientModule) { }

link:string='';
out:any;
  ngOnInit(): void {
    
  } 
    public isLoggedIn() {
        return this.jwtConnectionService.isLoggedIn();
    }

    public logout() {
        this.jwtConnectionService.clear();
        console.log(this.jwtConnectionService.getToken())
        this.router.navigate(['/']);
    }
    showSubmenu:boolean=false;
}
