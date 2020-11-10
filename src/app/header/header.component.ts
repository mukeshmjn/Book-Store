import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'; 
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(public authService: AuthService,
   private router:Router,
   private _snackBar: MatSnackBar,) { }

  ngOnInit(): void {
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/home');
   console.log("logout successful")
  }

  openSnackBar() {
    debugger
    console.log('snackbar hai g')
    debugger
    this._snackBar.open('logout successful', 'Thanks', {
      duration: 500,
     
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
