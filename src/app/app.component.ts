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
  }
}
