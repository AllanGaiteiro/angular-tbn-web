import { Component } from '@angular/core';

interface Item {
  name: string,
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'tbn-web';
}
