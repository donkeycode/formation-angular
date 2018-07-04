import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('refImg') refImg;
  title = 'app';
  items: Observable<any[]>;
  private itemsCollection: AngularFirestoreCollection<any>;
  private itemDoc: AngularFirestoreDocument<any>;

  constructor(translate: TranslateService, db: AngularFirestore, public afAuth: AngularFireAuth) {
    translate.setDefaultLang('en');
    translate.use('en');
    this.itemsCollection = db.collection('items');
    this.items = this.itemsCollection.valueChanges();

    this.itemDoc = db.doc<any>('items/CkT8EQUO9uRX0d3waix5');
  }

  testViewChild() {
    this.refImg.nativeElement.classList.add('border-effect');
    setTimeout(() => {
      this.refImg.nativeElement.classList.remove('border-effect');
    }, 1000);
  }

  addItem() {
    this.itemsCollection.add({
      label: 'label par defaut'
    });
  }

  updateItem(label) {
    this.itemDoc.update({ label: label });
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
