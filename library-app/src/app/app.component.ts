import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library-app';
  currentComponent = 'list'; // Valor predeterminado

  showComponent(component: string) {
    this.currentComponent = component;
  }
}
