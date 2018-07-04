import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { map } from 'rxjs/operators';

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

  constructor(translate: TranslateService, public db: AngularFirestore, public afAuth: AngularFireAuth) {
    translate.setDefaultLang('en');
    translate.use('en');
    this.itemsCollection = db.collection('items');
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  addItem(label) {
    this.itemsCollection.add({ label: label });
  }

  updateItem(item) {
    this.db.doc<any>(`items/${item.id}`).update({label: item.label });
  }

  removeItem(item) {
    this.db.doc<any>(`items/${item.id}`).delete();
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  testViewChild() {
    this.refImg.nativeElement.classList.add('border-effect');
    setTimeout(() => {
      this.refImg.nativeElement.classList.remove('border-effect');
    }, 1000);
  }
}
