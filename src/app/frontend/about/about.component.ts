import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private router:ActivatedRoute,private titleService:Title) { }

  ngOnInit() {
this.titleService.setTitle(this.router.snapshot.data["title"])
  }

}
