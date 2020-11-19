import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  errmsg:boolean= false;

  constructor(public authService: AuthService,
  public router:Router ) { }

  ngOnInit(): void {
  }


  signup() {
    this.authService.signup(this.email, this.password).then(value => {
      console.log('Success!', value);
      this.errmsg=false
      this.router.navigate(['home'])
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
}
