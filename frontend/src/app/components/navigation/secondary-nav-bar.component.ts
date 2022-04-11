import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'secondary-nav-bar',
  templateUrl: './secondary-nav-bar.component.html'
})
export class SecondNavBar implements OnInit{


  constructor (private loginService:LoginService) {

  }

  ngOnInit(): void {

  }

  onClick() {
    if (this.loginService.checkLogin()) {
      this.loginService.logout();
    }
  }

}
