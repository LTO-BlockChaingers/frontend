import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStore } from '../../auth.store';
import { MatSnackBar } from '@angular/material';

console.log('Login just has been loaded');

@Component({
  selector: 'lc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emails: string[] = [];

  constructor(private auth: AuthStore, private router: Router, private snackbar: MatSnackBar) {
    this.emails = auth.getRegisteredEmails();
  }

  ngOnInit() {}

  async login(credentials: { email: string; password: string }) {
    try {
      await this.auth.login(credentials.email, credentials.password);
      this.notify('LOGGED IN');
      this.router.navigate(['./']);
    } catch (err) {
      this.notify('INVALID EMAIL/PASSWORD');
    }
  }

  private notify(message: string) {
    this.snackbar.open(message, 'DISMISS', {
      duration: 1500
    });
  }
}
