import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Userservices {
  constructor(private http:HttpClient){}

  getUsers():Observable<HttpResponse<any>>{
    let url = "http://localhost:3000/users";
    return this.http.get<HttpResponse<any>>(url,{observe:'response'})
  }

  wrongApi():Observable<HttpResponse<any>>{
    let url = "http://localhost:3000/userswrong";
    return this.http.get<HttpResponse<any>>(url,{observe:'response'})
  }
}
