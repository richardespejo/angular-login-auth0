import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProtegidoComponent } from './components/protegido/protegido.component';
import { PreciosComponent } from './components/precios/precios.component';

import { AuthModule } from '@auth0/auth0-angular';
import { CallbackComponent } from './components/callback/callback.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProtegidoComponent,
    PreciosComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-h31h4iaf.eu.auth0.com',
      clientId: 'kMBCIM2UEBGsPCnYbAkK414xjF8vGQAG'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
