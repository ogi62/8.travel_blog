import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  registerUser() {
    console.log("register user");
  };

  loginUser() {
    console.log("Log in user");
  };

  logoutUser() {
    console.log("Logout user");
  };
  
}
