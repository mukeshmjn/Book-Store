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
  // @Output() public sidenavToggle = new EventEmitter();

  constructor(public authService: AuthService,
   private router:Router,
   private _snackBar: MatSnackBar,) { }

  ngOnInit(): void {
  }
  logout() {
    this.authService.logout();
    localStorage.removeItem('email');
     localStorage.removeItem('firstName');
      localStorage.removeItem('lastName' );
       localStorage.removeItem('inputCountryCode');
    this.router.navigateByUrl('/home');
   console.log("logout successful")
  }
  // public onToggleSidenav = () => {
  //   this.sidenavToggle.emit();
  // }

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
