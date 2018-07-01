import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('refImg') refImg;
  title = 'app';

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  testViewChild() {
    this.refImg.nativeElement.classList.add('border-effect');
    setTimeout(() => {
      this.refImg.nativeElement.classList.remove('border-effect');
    }, 1000);
  }
}
