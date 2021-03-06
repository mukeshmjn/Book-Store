import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AngularFirestore, docChanges } from "@angular/fire/firestore";
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
  user:any

  constructor(private firestore: AngularFirestore,public authService: AuthService,
  public router:Router,
  private _snackBar: MatSnackBar ) { }

  ngOnInit(): void {
  }


  signup() {
    this.authService.signup(this.email, this.password).then(value => {
      console.log('Success!', value);
      console.log(value)
      this.errmsg=false
      this.router.navigate(['home'])
      console.log('snackbar hai g')
    
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
         var luid = value.user.uid;
         localStorage.setItem('fid',luid);
         debugger
        this.firestore.collection('users').doc(luid).get().subscribe(snapshot=>{
        
        this.user = snapshot.data();
        console.log('user: ',this.user)
        localStorage.setItem('email',this.user.email);
        localStorage.setItem('firstName', this.user.firstName);
        localStorage.setItem('lastName', this.user.lastName );
        localStorage.setItem('pno', this.user.pno);
        
        })
         
        
      
         this.errmsg=false
         this.router.navigate(['home'])
         console.log('snackbar hai g')
         
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
