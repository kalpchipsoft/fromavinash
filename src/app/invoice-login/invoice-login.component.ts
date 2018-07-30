import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetInvoceDataService } from '../get-invoce-data.service';

@Component({
  selector: 'app-invoice-login',
  templateUrl: './invoice-login.component.html',
  styleUrls: ['./invoice-login.component.css']
})
export class InvoiceLoginComponent implements OnInit {
  form;
  constructor(
    private myRoute: Router,
    private auth: GetInvoceDataService) {
    this.form ({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  ngOnInit() {
  }
  login() {
    if (this.form.valid) {
      this.auth.sendToken(this.form.value.email)
      this.myRoute.navigate(["home"]);
    }
  }

}
