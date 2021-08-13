import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeRoutingModule } from './employe-routing.module';
import { EmployeComponent } from './employe.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { FormPresentationComponent } from './form-container/form-presentation/form-presentation.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { ListPresentationComponent } from './list-container/list-presentation/list-presentation.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    EmployeComponent,
    FormContainerComponent,
    FormPresentationComponent,
    ListContainerComponent,
    ListPresentationComponent
  ],
  imports: [
    CommonModule,
    EmployeRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class EmployeModule { }
