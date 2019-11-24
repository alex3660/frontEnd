import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componets/navegacion/navegacion.component';
import { AdminMateriasComponent } from './componets/admin/admin-materias/admin-materias.component';
import { LoginComponent } from './componets/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    AdminMateriasComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
