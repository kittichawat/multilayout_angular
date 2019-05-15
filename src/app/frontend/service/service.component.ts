import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  //รับค่าจาก http result
  resultData:Object

  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getData().subscribe(result=>{
      this.resultData = result['result'];
      console.log(this.resultData)
    })
  }

}
