import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { PasswordChecker } from './custom-validators/password-checker';
import { AngularFirestore, docChanges } from "@angular/fire/firestore";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  inputCountryCode: string;
  errmsg:boolean= false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  show_password: Boolean = false;
  visible:Boolean=true;
  registerForm: FormGroup;
  submitted = false;
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";



  constructor(private firestore: AngularFirestore,private router: Router, private authService: AuthService, private _snackBar: MatSnackBar, private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formbuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      inputCountryCode: [null, [Validators.required, Validators.pattern("[0-9 ]{12}")]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", Validators.required],
    }, {
      validators: PasswordChecker("password", "confirmPassword"),
    });
  }

  get h() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
  // console.table(this.registerForm)
    // console.table(this.registerForm.value);
    this.email = this.registerForm.value.email;
    this.password = this.registerForm.value.password;
    this.firstName = this.registerForm.value.firstName;
    this.lastName = this.registerForm.value.lastName;
    this.inputCountryCode = this.registerForm.value.inputCountryCode;
    // debugger

    this.signup();

    // alert("Success Signup\n" + JSON.stringify(this.registerForm.value));
  }
  
  signup() {
    this.authService.signup(this.email, this.password).then(value => {
      console.log('Success!', value);
      debugger
      var suid = value.user.uid;
      this.firestore.collection('users').doc(suid).set({
      // abc:'Mukesh'
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.registerForm.value.email,
      inputCountryCode: this.inputCountryCode

     
     })
     .then(res => {
         console.log(res);
         localStorage.setItem('email',this.registerForm.value.email);
         localStorage.setItem('firstName', this.firstName);
         localStorage.setItem('lastName', this.lastName );
         localStorage.setItem('inputCountryCode', this.inputCountryCode);
         
         
      //  debugger
     })
     .catch(e => {
         console.log(e);
     })
      this.errmsg=false
      this.router.navigate(['home'])
      // console.log(value.user.uid);
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

 // signup() {
  //   this.authService.signup(this.email, this.password).then(value =>   {
  //     console.log('Success!', value);
  //     this.errmsg=false
  //     this.router.navigate(['home'])
  //     console.log('snackbar hai g')
  //     debugger
  //     this._snackBar.open('Sign Up Successful', 'Welcome', {
  //       duration: 500,

  //       horizontalPosition: this.horizontalPosition,
  //       verticalPosition: this.verticalPosition,
  //     });
  //   })
  //   .catch(err => {
  //     console.log('Something went wrong:',err.message);
  //     this.errmsg=true


  //   });
  //   this.email = this.password = '';
  // }
}
