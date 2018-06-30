import { Pipe, PipeTransform } from '@angular/core';
import { AnimalsService } from './animals.service';

@Pipe({
  name: 'nbDog',
  pure: false
})
export class NbDogPipe implements PipeTransform {
  constructor(private animalsService: AnimalsService) {
  }

  transform(value: any, args?: any): any {
    return value + ' n°' + this.animalsService.numberOfDog;
  }
}
