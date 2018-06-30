import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { AnimalsService } from './animals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('refImg') refImg;
  title = 'app';
  cats = [];
  dog;

  constructor(public animalsService: AnimalsService) {
    this.getANewDog();

    this.animalsService.getCats()
    .then((cats: any) => {
      this.cats = cats;
    });
  }

  getANewDog() {
    this.animalsService.getRandomDog()
    .subscribe((response) => {
      this.dog = response['message'];
    });
  }

  imageClicked(event) {
    console.log(event);
  }

  testViewChild() {
    this.refImg.nativeElement.classList.add('border-effect');
    setTimeout(() => {
      this.refImg.nativeElement.classList.remove('border-effect');
    }, 1000);
  }
}
