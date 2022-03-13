import { Component, OnInit } from '@angular/core';
import { BoockService } from 'src/services/boock.service';
import { VersicleService } from 'src/services/versicle.service';

interface Item {
  name: string,
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'tbn-web';
  constructor(
    private bs: BoockService,
    private vs: VersicleService
  ) {

  }

  ngOnInit() {
    this.bs.getAll().subscribe(res => {
      console.log('boocks', res)
    })
    this.vs.get('nvi', '1co-10:11').subscribe(res => {
      console.log('versicle', res)
    })
    this.vs.getAll('nvi', {/*boockAbbrev: 'gn',chapterNumber:1*/verse:'coisas aconteceram'}).subscribe(res => {
      console.log('versicles', res)
    })
  }
}
// gn
      //numberVersicle: number; // exemple 1 '1co-10:11'
