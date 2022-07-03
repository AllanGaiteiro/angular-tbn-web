import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mat-slider',
  templateUrl: './mat-slider.component.html',
  styleUrls: ['./mat-slider.component.css']
})
export class MatSliderComponent implements OnInit {
  @Input() size?: number | string;
  @Output() sizeChange: EventEmitter<number> = new EventEmitter<number>();

  sliderValue?: number = 50;
  constructor() {
    //
  }

  ngOnInit(): void {
    console.log('teste ',this.sliderValue)
  }


  valueLabel(value: number): number {

    return value ?? 0;
  }
  setSize(event: any): void {
    console.log(event.value)
    if (event?.value) {
      this.sizeChange?.emit(event.value);
    }
  }

}
