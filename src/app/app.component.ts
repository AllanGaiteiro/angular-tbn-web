import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tbn-web';
  public reason: string = '';
  public matIconMenu: 'keyboard_return' | 'keyboard_tab' = 'keyboard_return';
  constructor() {
    // empty
  }

  public ngOnInit(): void {
  }

}
