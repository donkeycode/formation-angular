import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cats = [
    'https://www.chewy.com/petcentral/wp-content/uploads/2018/05/abyssinian-cat-card.jpg',
    'https://www.argospetinsurance.co.uk/assets/uploads/2017/12/cat-pet-animal-domestic-104827.jpeg',
    'https://www.bluecross.org.uk/sites/default/files/assets/images/124044lpr.jpg'
  ];

  imageClicked(event) {
    console.log(event);
  }
}
