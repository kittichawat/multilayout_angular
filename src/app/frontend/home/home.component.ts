import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private titleService:Title,private auth:AuthService) { }

  ngOnInit() {
    this.titleService.setTitle("Home");
  }

  checkLogin()
  {
    this.auth.login("admin","admin")
  }

}
