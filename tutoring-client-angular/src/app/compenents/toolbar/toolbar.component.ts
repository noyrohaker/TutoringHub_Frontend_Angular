import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  title = 'Tutoring Hub';
  constructor(public AuthService: AuthService) { }

  ngOnInit(): void {
  }

  isUserLoggedIn () {
    return this.AuthService.isLoggedIn === true;
  }

}
