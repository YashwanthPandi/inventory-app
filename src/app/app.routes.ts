import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemsComponent } from './items/items.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { authGuard } from './guards/auth.guard';


export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { 
    path: 'dashboard', 
    component: DashboardComponent, 
    canActivate: [authGuard],
    children: [
    //   { path: '', redirectTo: 'items', pathMatch: 'full' },
      { path: 'items', component: ItemsComponent },
      { path: 'categories', component: CategoriesComponent }
    ]
  },

  { path: '**', redirectTo: 'login' }

];
