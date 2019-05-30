import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { ServicesComponent } from './services/services.component';
import { HandymanProfileComponent } from './handyman-profile/handyman-profile.component';
import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import {CardModule} from 'primeng/card';
import {TabViewModule} from 'primeng/tabview';
import {GalleriaModule} from 'primeng/galleria';
import {InputTextModule} from 'primeng/inputtext';
import { ProfileComponent } from './profile/profile.component';
import { RequestsComponent } from './requests/requests.component';
import { RegisterComponent } from './register/register.component';

import { HttpClientModule } from '@angular/common/http';
import { PlumbingComponent } from './plumbing/plumbing.component';
import {FieldsetModule} from 'primeng/fieldset';
import { FormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import {PasswordModule} from 'primeng/password';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    HandymanProfileComponent,
    SidebarComponent,
    HomeComponent,
    FormComponent,
    LoginComponent,
    HeaderComponent,
    ProfileComponent,
    RequestsComponent,
    RegisterComponent,
    PlumbingComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    AppRoutingModule,
    CardModule,
    TabViewModule,
    GalleriaModule,InputTextModule,
    HttpClientModule,FieldsetModule,FormsModule,CalendarModule,PasswordModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
