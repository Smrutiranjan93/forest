import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';
import { JwtConnectionService } from './service/jwt-connection.service';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(
        private authService:AuthService,
        private jwtConnectionService: JwtConnectionService,
        private router:Router){}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
            if (this.jwtConnectionService.getToken() !== null) {
                const role = route.data['roles'] as Array<string>;
        
                if (role) {
                    const match = this.authService.roleMatch(role);
        
                    if (match) {
                        return true;
                    } 
                    else {
                        this.router.navigate(['/updating']);
                        return false;
                    }
                }
            }        
            this.router.navigate(['/login']);
            return false;
        }

}