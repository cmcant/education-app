import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Education-app';
  lgn = 0;


  public login(){
    this.lgn = 1;
   }

   }
