import { Component, OnInit } from '@angular/core';
import { Boock } from '../../models/boock';
import { BoockService } from 'src/app/services/boock.service';
import { BibleService } from 'src/app/services/bible.service';
import { Versicle } from 'src/app/models/versicle';
import { Dictionary, groupBy } from 'lodash';
@Component({
  selector: 'app-biblia',
  templateUrl: './biblia.component.html',
  styleUrls: ['./biblia.component.css'],
})
export class BibliaComponent implements OnInit {
  public boocks: Boock[] = [];
  boock?: Boock;
  versicles?: Dictionary<Versicle[]>;
  public chapters: number[] = [];
  chapterNumber?: number;
  public cardSeeChapter: HTMLElement | null;
  public content: HTMLElement | null;
  public seeInfoCapitulo: HTMLElement | null;/**/
  constructor(
    private boockService: BoockService,
    private blibleService: BibleService) {
    // empty    
    this.content = document.getElementById('content');
    this.seeInfoCapitulo = document.getElementById('headerChapter');
    this.cardSeeChapter = document.getElementById('cardSeeChapter');
  }

  public ngOnInit(): void {

    this.boockService.getBoocks().subscribe((res) => {
      this.boocks = res;
    });

    this.seeChapter();
  }
  public seeChapter(): void {
    if (this.content && this.seeInfoCapitulo) {
      this.content.appendChild(this.seeInfoCapitulo);
    }
  }

  public getboocks(): void {
    this.boockService.getBoocks().subscribe((res) => {
      console.log('res:', res)
      this.boocks = res;
    });
  }

  public getChapters(): void {
    if (this.chapters.length) {
      this.chapters = [];
    }
    this.blibleService
      .getAllVersiclesOfBoock('nvi', this.boock?.abbrev ?? '').subscribe((res) => {
        this.versicles = groupBy((res as Versicle[]).map(d => d), 'chapterNumber');
        this.chapters = Object.keys(this.versicles).map(i => +i);
        console.log(this.chapters)
      })
  }

  public view(): void {
    this.cardSeeChapter = document.getElementById('cardSeeChapter');
    if (this.cardSeeChapter) {
      this.cardSeeChapter.style.display =
        this.cardSeeChapter.style.display === 'none' ? 'flex' : 'none';
    }

  }
}
