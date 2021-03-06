import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'auth';

import { PlaceholderComponent } from '@app/core/components/placeholder/placeholder.component';
import { LoginComponent } from '@app/core/components/login/login.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sales/accounts',
    component: PlaceholderComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'sales/leads',
    component: PlaceholderComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'sales/opportunities',
    component: PlaceholderComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'sales/contacts'
  }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

// import { MyDashboardComponent } from '@app/shared/components/samples/my-dashboard/my-dashboard.component';
// import { MyTableComponent } from '@app/shared/components/samples/my-table/my-table.component';

// import { AccountsComponent } from 'sales';

/*

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

*/

/*

const routes: Routes = [

  {
    path: 'sales/accounts',
    component: PlaceholderComponent
  },
  {
    path: 'sales/leads',
    component: PlaceholderComponent
  },
  {
    path: 'sales/opportunities',
    component: PlaceholderComponent
  },

  {
    path: '',
    redirectTo: 'sales/dashboards',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PlaceholderComponent
  }

];

*/
