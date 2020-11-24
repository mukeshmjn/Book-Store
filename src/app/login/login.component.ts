import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  errmsg:boolean= false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  show_password: Boolean = false;
  visible:Boolean=true;

  constructor(public authService: AuthService,
  public router:Router,
  private _snackBar: MatSnackBar ) { }

  ngOnInit(): void {
  }


  signup() {
    this.authService.signup(this.email, this.password).then(value => {
      console.log('Success!', value);
      this.errmsg=false
      this.router.navigate(['home'])
      console.log('snackbar hai g')
      debugger
      this._snackBar.open('Sign Up Successful', 'Welcome', {
        duration: 500,
       
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    })
    .catch(err => {
      console.log('Something went wrong:',err.message);
      this.errmsg=true
      

    });
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password) .then(value => {
       console.log('Nice, it worked!');
         console.log(value)
         this.errmsg=false
         this.router.navigate(['home'])
         console.log('snackbar hai g')
         debugger
         this._snackBar.open('Login Successful', 'Welcome', {
           duration: 500,
          
           horizontalPosition: this.horizontalPosition,
           verticalPosition: this.verticalPosition,
         });
       })
       .catch(err => {
         console.log('Something went wrong:',err.message);
         this.errmsg=true
       });
    this.email = this.password = '';  
    
  }

  logout() {
    this.authService.logout();
  }

  showPassword() {
    console.log(this.show_password)
    
    this.show_password = !this.show_password;
    this.visible= !this.visible;
  }
}
