import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  content: HTMLElement | null;
  headerChapter: HTMLElement | null;
  sidebar: HTMLElement | null;
  headerContent: HTMLElement | null;
  public reason: string = '';
  public matIconMenu: 'keyboard_return' | 'keyboard_tab' = 'keyboard_return';
  public headerButton: 'visibility' | 'visibility_off' = 'visibility';
  public expandedMenu = false;
  public shouldRun = true;
  public panelOpenState = false;
  constructor() {
    this.sidebar = document.getElementById('sidebar');
    this.headerChapter = document.getElementById('headerChapter');
    this.content = document.getElementById('content');
    this.headerContent = document.getElementById('headerContent');
  }
  ngOnInit(): void {
    //
  }
  visibilityHeader(): void {
    const headerChapter = document.getElementById('headerChapter');
    if (headerChapter) {
      headerChapter.style.display =
        headerChapter.style.display !== 'none' ? 'none' : 'flex';
      this.headerButton =
        this.headerButton === 'visibility_off' ? 'visibility' : 'visibility_off';
    }

  }

  public moveContent(): void {

    if (!!this.content && !!this.sidebar && !!this.headerContent) {
      if (this.content.style.width === '100%') {
        if (!!this.headerChapter) {
          this.headerChapter.style.width = '80%';
          this.headerChapter.style.left = '20%';
        }
        this.content.style.width = '80%';
        this.content.style.marginLeft = '20%';
        this.sidebar.style.left = '0px';
        this.headerContent.style.left = '20%';
        this.matIconMenu = 'keyboard_return';
      } else {
        if (!!this.headerChapter) {
          this.headerChapter.style.width = '100%';
          this.headerChapter.style.left = '0%';
        }
        this.content.style.width = '100%';
        this.content.style.marginLeft = '0%';
        this.sidebar.style.left = '-20%';
        this.headerContent.style.left = '0%';
        this.matIconMenu = 'keyboard_tab';
      }
    }
  }

}
