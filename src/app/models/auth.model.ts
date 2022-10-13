export interface Role {
	id: number;
	role: string;
}

// export class AuthUser {
// 	constructor(
// 		private access_token: string,
// 		public token_type: string,
// 		private _tokenExpirationDate: Date,
// 		public role: string[]
// 	) {}

// 	get token() {
// 		if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
// 			return null;
// 		}
// 		return this.access_token;
// 	}
// 	get expiresIn() {
// 		return this._tokenExpirationDate;
// 	}
// }

// export enum ROLE {
// 	CANDIDATE = 'ROLE_CITIZEN',
// 	EMPLOYER = 'ROLE_DEPT',
// 	// ADMIN = "ROLE_ADMIN"
// }

export interface UserRegistration {
	role: Role;
	uid: number;
	firstName: string;
	lastName: string;
	gender: string;
	mobileNo: string;
	emailId: string;
	username: string;
	address: string;
	isActive: string; 
}

export interface Complaint {
	complaintId: number;
	ward: string;
	street: string;
	complainCategory: string;
	complainDescription: string;
	proofImage: null;
	status: null;
	role: Role;
}

export interface Event {
	eventId: number;
	eventDate: Date;
	eventDescription: string;
}
