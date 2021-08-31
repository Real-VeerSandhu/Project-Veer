import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentModule } from './components/component.module';
import { AngularFireModule } from '@angular/fire';
import { firebaseConfig } from 'src/core/config';
import { FirestoreService } from 'src/services/firestore.service';
import { AngularFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentModule,
    AngularFireModule.initializeApp(firebaseConfig),

  ],
  providers: [FirestoreService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }