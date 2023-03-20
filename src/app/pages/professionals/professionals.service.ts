import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfessionalsService {

  constructor(private http:HttpClient) { }

  getUserData(){
    return this.http.get<[]>("./assets/userdata.json");
  }
}
