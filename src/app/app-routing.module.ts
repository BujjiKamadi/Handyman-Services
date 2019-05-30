import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { HandymanProfileComponent } from './handyman-profile/handyman-profile.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { PlumbingComponent } from './plumbing/plumbing.component';
const appRoutes: Routes =[
  { path : 'home', component : HomeComponent},
  {
      path : 'login/sidebar',
      component : SidebarComponent,
      children: [
        { path: 'services', component: ServicesComponent },
        { path: 'profile', component: ProfileComponent },
        { path: 'plumbing/:id', component: PlumbingComponent,data: [{isProd: true}] }
      ]
  },
  { path : 'profile', component : HandymanProfileComponent},
  { path : 'login', component : LoginComponent},
  { path : 'register', component : RegisterComponent},
  { path : '', redirectTo: '/home', pathMatch : 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports : [ RouterModule]
})
export class AppRoutingModule { }
