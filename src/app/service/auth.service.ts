import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRegistration } from '../models/auth.model';
import { feedback } from '../models/feedback.model';
import { JwtConnectionService } from './jwt-connection.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
 
    
     // PATH_OF_API = 'http://localhost:8080/api';
    // PATH_OF_API =  ' http://117.211.75.160:8026/mscl/api';
    // PATH_OF_API = '/mscl/api';
    PATH_OF_API='http://ec2-3-108-51-219.ap-south-1.compute.amazonaws.com:8080/mscl/api';

    requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
    constructor(
        private httpClient: HttpClient,
        private jwtConnectionService: JwtConnectionService
    ) {}

    public login(loginData: any) {
        return this.httpClient.post(this.PATH_OF_API + '/login', loginData, {
            headers: this.requestHeader,
        });        
    }

    userRegister(userRegistration: UserRegistration) {
        return this.httpClient.post(this.PATH_OF_API + '/userRegistration', userRegistration, {
            headers: this.requestHeader,
        });
    }

    getUserDetails(): Observable<UserRegistration> {
		return this.httpClient.get<UserRegistration>(this.PATH_OF_API + '/getUser');
	}
    getAqi(station: string) {
        return this.httpClient.get(this.PATH_OF_API + '/getSensorData'+ '?station=' + station);
    }

 feedback(feedback:feedback){
        return this.httpClient.post(this.PATH_OF_API + '/sendFeedback' , feedback, {
            headers: this.requestHeader
        });
    }
    // saveUserRegistration(userRegistration: UserRegistration): Observable<UserRegistration> {
	// 	const formData = new FormData();
    //     formData.append('uid', userRegistration.uid.toString());
	// 	formData.append('firstName', userRegistration.firstName);
	// 	formData.append('lastName', userRegistration.lastName);
	// 	formData.append('email',userRegistration.email);
    //     formData.append('gender', userRegistration.gender);
    //     formData.append('mobile', userRegistration.mobile.toString());
	// 	// formData.append('userName', userRegistration.userName);		
	// 	formData.append('address', userRegistration.address);
	// 	return this.httpClient.post<UserRegistration>(this.PATH_OF_API + '/userRegistration', formData);
	// }


    // public forAdmin() {
    //     return this.httpclient.get(this.PATH_OF_API + '/forAdmin', {
    //     responseType: 'text',
    //     });
    // }

    public roleMatch(allowedRoles:string[])  : any{
        let isMatch = false;
        const userRoles: any = this.jwtConnectionService.getRoles();

        if (userRoles != null && userRoles) {
            for (let i = 0; i < userRoles.length; i++) {
                for (let j = 0; j < allowedRoles.length; j++) {
                    if (userRoles[i].roleName === allowedRoles[j]) {
                        isMatch = true;
                        return isMatch;
                    } 
                    else {
                        return isMatch;
                    }
                }
            }
        }
    }
}