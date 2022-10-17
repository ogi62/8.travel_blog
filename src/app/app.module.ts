import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/shell/footer/footer.component';
import { HeaderComponent } from './shared/shell/header/header.component';
import { LoginComponent } from './shared/shell/login/login.component';
import { SignUpComponent } from './shared/shell/sign-up/sign-up.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment.prod';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { HttpClientModule } from '@angular/common/http';
import { AllBlogsModule } from './feature/all-blogs/all-blogs.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    AngularFirestoreModule,
    ReactiveFormsModule,
    HttpClientModule,
    AllBlogsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
