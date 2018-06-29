import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cats = [
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
  ];

  imageClicked(event) {
    console.log(event);
  }
}
