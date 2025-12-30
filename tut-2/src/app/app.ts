import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Userservices } from './Service/userservices';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-2';

  constructor(private us: Userservices) { }

  loadData() {
    this.us.getUsers().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log("Error occurs", err);
      }
    })
  }

  wrong() {
    this.us.wrongApi().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err:HttpErrorResponse) => {
        console.log("Error occurs", err.message);
      }
    })
  }
}
