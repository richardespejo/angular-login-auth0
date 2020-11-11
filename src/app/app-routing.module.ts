import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbackComponent } from './components/callback/callback.component';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidoComponent } from './components/protegido/protegido.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { path: '' , pathMatch:'full' , redirectTo: 'home' },
  { path: 'home' , component: HomeComponent },
  { path: 'precios' , component: PreciosComponent },
  { path: 'protegido' , component: ProtegidoComponent , canActivate: [AuthGuard] },
  { path: 'callback' , component: CallbackComponent  },
  { path: '**' , pathMatch:'full', redirectTo:'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
