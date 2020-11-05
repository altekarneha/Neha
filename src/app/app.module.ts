import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {AssignmentService} from './assignment.service';
import {HttpClientModule} from '@angular/common/http'

import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import {DataTablesModule} from 'angular-datatables';
import {AngularWebStorageModule } from 'angular-web-storage';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule,HttpClientModule,DataTablesModule,AngularWebStorageModule,Ng2SearchPipeModule, ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here
    }),
  ],
  providers: [AssignmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
