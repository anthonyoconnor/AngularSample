import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { actionServiceProvider } from './login/login.service';
import { NotFoundComponent } from './not-found.component';
import { ConfigService } from './config.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth-guard-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ConfigService, actionServiceProvider, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
