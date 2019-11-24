import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminMateriasComponent } from './componets/admin/admin-materias/admin-materias.component';


const routes: Routes = [
  {path: 'admin/materia', component: AdminMateriasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
