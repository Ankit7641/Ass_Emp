import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  
  {
    path: 'home',
    component: HomeComponent/* ,
    canActivate: [AuthGuard] */
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'employe',
    loadChildren: () => import('./employe/employe.module').then(m => m.EmployeModule)
  },
  { path: '**', redirectTo: '' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
