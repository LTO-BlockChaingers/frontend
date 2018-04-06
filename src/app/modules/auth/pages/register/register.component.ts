import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStore } from '../../auth.store';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'lc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private auth: AuthStore, private router: Router, private snackbar: MatSnackBar) {}

  ngOnInit() {}

  async register(data: { email: string; name: string; password: string }) {
    try {
      await this.auth.register(data.name, data.email, data.password);
    } catch (err) {
      this.snackbar.open('REGISTRACTION ERROR', 'DISMISS', {
        duration: 1500
      });
    }
    this.snackbar.open('REGISTERED', 'DISMISS', {
      duration: 1500
    });
    this.router.navigate(['/']);
  }
}
