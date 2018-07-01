import { Component } from '@angular/core';
import { AnimalsService } from '../animals.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent {
  cats = [];
  dog;

  constructor(public animalsService: AnimalsService, translate: TranslateService) {
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
}
