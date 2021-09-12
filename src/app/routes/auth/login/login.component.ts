import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(public authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    this.authservice.login().subscribe(e => {
      if (e)
        this.router.navigate([this.authservice.redirectUrl ? this.authservice.redirectUrl : '/route/heroes'], {
          preserveFragment: true,
          queryParamsHandling: "preserve"
        })
    })
  }
  loginOut() {
    this.authservice.logout()

  }
}
