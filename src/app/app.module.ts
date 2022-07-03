import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';;
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { PagesModule } from './pages/pages.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { MatSliderComponent } from './mat-slider/mat-slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './angular.material.module';
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    MatSliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    //NgbModule,
    FormsModule,
    //TooltipModule.forRoot(),
    HttpClientModule,
    AngularMaterialModule,
    PagesModule,
  ], exports: [
    BrowserModule,
    MatFormFieldModule,
    BrowserModule,
    BrowserAnimationsModule,
    //NgbModule,
    FormsModule,
    // TooltipModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
