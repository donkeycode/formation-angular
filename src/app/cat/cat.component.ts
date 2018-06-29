import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  @Input() url: string;
  @Output() clicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  imageClicked() {
    this.clicked.emit(this.url);
  }
}
