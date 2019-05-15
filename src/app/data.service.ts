import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  filepath:string = "/assets/db/data.json"
  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get(this.filepath)
  }
}
