import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../auth/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public AuthService: AuthService) {}

  ngOnInit(): void {
  }
}

