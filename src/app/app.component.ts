import { Component } from '@angular/core';
// import {Alert} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'my-app',
  template: `
    <div class="blog-masthead">
      <div class="container">
        <nav class="nav">
          <a class="nav-link active" routerLink="/">Home</a>
          <a class="nav-link" routerLink="/about">About</a>
        </nav>
      </div>
    </div>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent  { 

}
