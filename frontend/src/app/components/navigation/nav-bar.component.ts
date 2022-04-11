import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBar implements OnInit{

  mySessionStorage;

  constructor (private loginService:LoginService) {
    this.mySessionStorage=sessionStorage;
  }

  ngOnInit(): void {
    this.mySessionStorage=sessionStorage;
  }

  onClick() {
    if (this.loginService.checkLogin()) {
      this.loginService.logout();
    }
  }

}
