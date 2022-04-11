import {Component, OnInit} from '@angular/core';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit{

  private currentUserName;

  constructor(private loginService: LoginService, private router: Router){
    this.currentUserName = sessionStorage.getItem("currentUserName");
  }

  ngOnInit(): void {
    this.currentUserName = sessionStorage.getItem("currentUserName");
  }
}
