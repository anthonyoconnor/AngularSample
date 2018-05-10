import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth-guard-service';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        component: NotFoundComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
