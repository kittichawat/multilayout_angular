import { Title } from '@angular/platform-browser';
import { ContactComponent } from './frontend/contact/contact.component';
import { SettingComponent } from './backend/setting/setting.component';
import { ProfileComponent } from './backend/profile/profile.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { BackendLayoutComponent } from './_layout/backend-layout/backend-layout.component';
import { ServiceComponent } from './frontend/service/service.component';
import { AboutComponent } from './frontend/about/about.component';
import { HomeComponent } from './frontend/home/home.component';
import { FrontendLayoutComponent } from './_layout/frontend-layout/frontend-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const brand:string="IT Genius"

const routes: Routes = [
  //FrontEnd Routing
  { 
    path:'', component:FrontendLayoutComponent ,
    children:[
      { path:'',component:HomeComponent,pathMatch:'full'},
      { path:'about',component:AboutComponent,data:{title:'About'+brand}},
      { path:'service',component:ServiceComponent,data:{title:'Service'+brand}},
      { path:'contact',component:ContactComponent,data:{title:'Contact'+brand}},
    ]
  },
  //BackEnd Routing
  {
    path:'backend',
    component:BackendLayoutComponent,
    children:[
      { path:'dashboard',component:DashboardComponent},
      { path:'profile',component:ProfileComponent},
      { path:'setting',component:SettingComponent}
    ]
  },
  //Not found Url
  { path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
