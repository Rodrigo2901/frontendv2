import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PostNetQuote';
  options = [
    { path: '/home', title: 'Home'}
  ]
}
