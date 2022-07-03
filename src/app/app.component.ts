import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tbn-web';

  public fontSizeP: number = 0;
  public paragraph?: NodeListOf<HTMLParagraphElement>; // HTMLCollectionOf<HTMLParagraphElement>;
  public reason?: string;
  public matIconMenu: 'keyboard_return' | 'keyboard_tab' = 'keyboard_return';
  constructor() {
    // empty
  }

  public ngOnInit(): void {
    this.fontSizeP = 50;
    this.paragraph = document.querySelectorAll('p');

    this.settingFont('=');
  }


  public settingFont = (tipo: '+' | '=' | '-'): void => {
    this.fontSizeP =
      tipo !== '='
        ? tipo === '+'
          ? this.fontSizeP + 1
          : this.fontSizeP - 1
        : this.fontSizeP;
    this.paragraph?.forEach((p) => (p.style.fontSize = `${this.fontSizeP}px`));
  };
}
