import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetComponent } from './forget/forget.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UnlockComponent } from './unlock/unlock.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
    },
    {
    path:'forget',component:ForgetComponent
      },
      {
    path:'login',component:LoginComponent
    }, 
    {
      path:'register',component:RegisterComponent
    }, 
    {
      path:'unlock',component:UnlockComponent
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
