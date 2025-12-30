import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Userservice } from './Services/userservice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-1';

  constructor(private us:Userservice){}

  getData(){
    this.us.loadUsers().subscribe({
      next:(res)=>{
        console.log(res);
      }
    })
  }

  wrongApiCall(){
    this.us.wrongCall().subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err)=>{
        console.log("errro shat : ",err)
      }
    })
  }
}
