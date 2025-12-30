import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Userservice {
  constructor(private http:HttpClient){}

  apiUrl = "http://localhost:3000/users";

  loadUsers():Observable<any>{
    return this.http.get(this.apiUrl,{observe:'response'});
  }

  wrongCall():Observable<any>{
    let api = "http://localhost:3000/wrongusers";
    return this.http.get(api,{observe:'response'});
  }
}
