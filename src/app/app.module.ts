import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CatComponent } from './cat/cat.component';
import { ColorDirective } from './color.directive';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NbDogPipe } from './nb-dog.pipe';

import { RouterModule, Routes } from '@angular/router';
import { AnimalsComponent } from './animals/animals.component';
import { MoreAnimalsComponent } from './more-animals/more-animals.component';
import { RaceGuard } from './race.guard';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {
    path: '', component: AnimalsComponent,
    children: [
      {
        path: 'animals/:race',
        canActivate: [RaceGuard],
        component: MoreAnimalsComponent
      }
    ]
  }, {
    path: 'turtle', loadChildren: './lazy/lazy.module#LazyModule'
  }
];

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    ColorDirective,
    NbDogPipe,
    AnimalsComponent,
    MoreAnimalsComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(
      appRoutes,
    ),
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
