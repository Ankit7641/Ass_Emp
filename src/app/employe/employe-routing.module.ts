import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeComponent } from './employe.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { ListContainerComponent } from './list-container/list-container.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeComponent,
    children:[
      {
        path:'',
        component: ListContainerComponent
      },
      {
        path:'add',
        component: FormContainerComponent
      },
      {
        path:'Edit/:id',
        component:FormContainerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeRoutingModule { }
