import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './componentes/logo/logo.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';
import { ListaProductosComponent } from './componentes/admin/lista-productos/lista-productos.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { Page404Component } from './errors/page404/page404.component';
//Servicio de autenticacion
import {AuthService} from './services/auth.service';
//variables de entorno
import {environment} from '../environments/environment';
//firebase
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { NuevoProductoComponent } from './componentes/admin/nuevo-producto/nuevo-producto.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    DetalleProductoComponent,
    ListaProductosComponent,
    LoginComponent,
    RegisterComponent,
    Page404Component,
    NuevoProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp
    (environment.firebase),
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [ApiService,AuthService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
