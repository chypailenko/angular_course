import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {AuthService} from "../auth.service";

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSign(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signUser(email, password);
  }
}
