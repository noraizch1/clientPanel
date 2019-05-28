import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from  './components/dashboard/dashboard.component';
import { RegisterComponent } from  './components/register/register.component';
import { LoginComponent } from  './components/login/login.component';
import { AddClientComponent } from  './components/add-client/add-client.component';
import { EditClientComponent } from  './components/edit-client/edit-client.component';
import { SettingsComponent } from  './components/settings/settings.component';
import { NotFoundComponent } from  './components/not-found/not-found.component';
import {ClientDetailsComponent}  from  './components/client-details/client-details.component';
import { AuthGuard} from './guards/auth.guard';
const routes: Routes = [
{path: '', component:DashboardComponent , canActivate: [AuthGuard]},
{path: 'login', component:LoginComponent},
{path: 'register', component: RegisterComponent},
{path: 'client/add', component: AddClientComponent, canActivate: [AuthGuard]},
{path: 'client/edit/:id', component: EditClientComponent, canActivate: [AuthGuard]},
{path: 'client/:id', component: ClientDetailsComponent, canActivate: [AuthGuard]},
{path: 'settings', component: SettingsComponent},
{path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
