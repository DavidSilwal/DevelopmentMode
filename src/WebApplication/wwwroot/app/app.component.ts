import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
   
    selector: 'my-app',
    //templateUrl: 'app.component.html'
    template: `
    <h1>{{title}}</h1>
    `
  
})
   

export class AppComponent {
    title = 'user status'; }