import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import {MatCard} from '@angular/material/card';
import {MatDialog} from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router) { }
  username: string;
  password: string;
  ngOnInit() {

  }
  login(): void {
    if (this.username === 'admin' && this.password === 'root') {
     this.router.navigate(['dashboard']);
    } else {
      alert('Invalid Stuff');
    }
  }
}

