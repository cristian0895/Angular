import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { Page404Component } from './errors/page404/page404.component';
import { LogoComponent } from './componentes/logo/logo.component';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ListaProductosComponent } from './componentes/admin/lista-productos/lista-productos.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'',
    component: LogoComponent
  },
  {
    path:'detalle-producto',
    component: DetalleProductoComponent
  },
  {
    path:'',
    component: FooterComponent
  },
  {
    path:'admin',
    component: ListaProductosComponent
  },
  {
    path:'',
    component: NavbarComponent
  },
  {
    path:'users/login',
    component: LoginComponent
  },
  {
    path:'',
    component: RegisterComponent
  },
  {
    path:'**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
