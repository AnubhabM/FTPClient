import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitAppComponent } from './init-app/init-app.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'login' , component: InitAppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    InitAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes , {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
