import { Injectable } from '@angular/core';
import { Role } from '../models/auth.model';

@Injectable({
    providedIn: 'root'
})
export class JwtConnectionService {

    public setRoles(roles: []) {
        localStorage.setItem('roles', JSON.stringify(roles));
    }

    public getRoles():[] {
        const role:[]=JSON.parse(localStorage.getItem('roles')|| '{}');
        return role;
    }

    public setToken(jwtToken: string) {
        localStorage.setItem('jwtToken', jwtToken);
    }

    public getToken() {
        return localStorage.getItem('jwtToken');
    }

    public clear() {
        localStorage.clear();
    }

    public isLoggedIn() {
        return this.getRoles() && this.getToken();
    }
}