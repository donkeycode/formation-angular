import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  numberOfDog = 0;

  constructor(private http: HttpClient, ) { }

  getRandomDog() {
    this.numberOfDog++;
    return this.http.get('https://dog.ceo/api/breeds/image/random');
  }

  getCats() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            url: 'https://www.chewy.com/petcentral/wp-content/uploads/2018/05/abyssinian-cat-card.jpg',
            name: 'chat mignon'
          },
          {
            url: 'https://www.argospetinsurance.co.uk/assets/uploads/2017/12/cat-pet-animal-domestic-104827.jpeg',
            name: 'chat encore mignon'
          },
          {
            url: 'https://www.bluecross.org.uk/sites/default/files/assets/images/124044lpr.jpg',
            name: 'chat toujours mignon'
          },
        ]);
      }, 2000);
    });
  }
}
