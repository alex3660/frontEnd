import { AalumnoIndividualCursoComponent } from './components/admin/aalumno-individual-curso/aalumno-individual-curso.component';
import { EditTallerComponent } from './components/profesor/edit-taller/edit-taller.component';
import { EditEvaluacionComponent } from './components/profesor/edit-evaluacion/edit-evaluacion.component';
import { ModaLCursoprofesorComponent } from './components/admin/moda-l-cursoprofesor/moda-l-cursoprofesor.component';
import { MensajeForoComponent } from './components/profesor/mensaje-foro/mensaje-foro.component';
import { RepositorioComponent } from './components/profesor/repositorio/repositorio.component';
import { IForoComponent } from './components/profesor/i-foro/i-foro.component';
import { IEvaluacionesComponent } from './components/profesor/i-evaluaciones/i-evaluaciones.component';
import { ITareaComponent } from './components/profesor/i-tarea/i-tarea.component';
import { EditarPComponent } from './components/admin/editar-p/editar-p.component';
import { EditarMComponent } from './components/admin/editar-m/editar-m.component';
import { EditarCComponent } from './components/admin/editar-c/editar-c.component';
import { EditarAComponent } from './components/admin/editar-a/editar-a.component';
import { ModalCursoComponent } from './components/admin/modal-curso/modal-curso.component';
import { ProfesorNavegacionComponent } from './components/profesor/profesor-navegacion/profesor-navegacion.component';
import { AgregaAlumnoCursoComponent } from './components/admin/agrega-alumno-curso/agrega-alumno-curso.component';
import { AuthGuard1 } from './guards/auth.guard';
import { ICursoComponent } from './components/admin/i-curso/i-curso.component';
import { IProfesorComponent } from './components/admin/i-profesor/i-profesor.component';
import { IAlumnoComponent } from './components/admin/i-alumno/i-alumno.component';
import { AppComponent } from './app.component';
import { MateriaIdComponent } from './components/admin/materia-id/materia-id.component';
import { TalleresComponent } from './components/profesor/talleres/talleres.component';
import { ForoComponent } from './components/profesor/foro/foro.component';
import { EvaluacionesComponent } from './components/profesor/evaluaciones/evaluaciones.component';
import { ProfesorInicioComponent } from './components/profesor/profesor-inicio/profesor-inicio.component';
import { IngresarProfesorComponent } from './components/admin/ingresar-profesor/ingresar-profesor.component';
import { IngresarMateriaComponent } from './components/admin/ingresar-materia/ingresar-materia.component';
import { CrearCursoComponent } from './components/admin/crear-curso/crear-curso.component';
import { IngresarAlumnoComponent } from './components/admin/ingresar-alumno/ingresar-alumno.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminInicioComponent } from './components/admin/admin-inicio/admin-inicio.component';
import { TareasComponent } from './components/profesor/tareas/tareas.component';
import { AdminNavegarComponent } from './components/admin/admin-inicio/admin-navegar/admin-navegar.component';
import { IMateriaComponent } from './components/admin/i-materia/i-materia.component';
import { ITalleresComponent } from './components/profesor/i-talleres/i-talleres.component';
import { ProfesorGuard } from './guards/profesor.guard';
import { EditTareaComponent } from './components/profesor/edit-tarea/edit-tarea.component';



const routes: Routes = [
  
  {path: '', component: LoginComponent},
  {path: 'admin/inicio', component: AdminInicioComponent, canActivate: [AuthGuard1]},
  {path: 'admin/alumno', component: IngresarAlumnoComponent, canActivate: [AuthGuard1]},
  {path: 'admin/alumno/ingresar', component: IAlumnoComponent, canActivate: [AuthGuard1]},
  {path: 'admin/alumno/editar', component: EditarAComponent, canActivate: [AuthGuard1]},
  {path: 'admin/curso', component: CrearCursoComponent, canActivate: [AuthGuard1]},
  {path: 'admin/curso/ingresar', component: ICursoComponent, canActivate: [AuthGuard1]},
  {path: 'admin/curso/agregaca', component: AgregaAlumnoCursoComponent, canActivate: [AuthGuard1]},
  {path: 'admin/curso/agregaia', component: AalumnoIndividualCursoComponent, canActivate: [AuthGuard1]},
  {path: 'admin/curso/editar', component: EditarCComponent, canActivate: [AuthGuard1]},
  {path: 'admin/curso/lista', component: ModaLCursoprofesorComponent, canActivate: [AuthGuard1]},
  {path: 'admin/materia', component: IngresarMateriaComponent, canActivate: [AuthGuard1]},
  {path: 'admin/materia/ingresar', component: IMateriaComponent, canActivate: [AuthGuard1]},
  {path: 'admin/materia/editar', component: EditarMComponent, canActivate: [AuthGuard1]},
  {path: 'admin/profesor', component: IngresarProfesorComponent, canActivate: [AuthGuard1]},
  {path: 'admin/profesor/ingresar', component: IProfesorComponent, canActivate: [AuthGuard1]},
  {path: 'admin/profesor/editar', component: EditarPComponent, canActivate: [AuthGuard1]},
  {path: 'profesor/inicio', component: ProfesorInicioComponent, canActivate: [ProfesorGuard]},
  {path: 'profesor/curso', component: ProfesorNavegacionComponent, canActivate: [ProfesorGuard]},
  {path: 'profesor/curso/menu', component: ModalCursoComponent, canActivate: [ProfesorGuard]},
  {path: 'profesor/evaluaciones', component: EvaluacionesComponent, canActivate: [ProfesorGuard]},
  {path: 'profesor/evaluaciones/ingresar', component: IEvaluacionesComponent, canActivate: [ProfesorGuard]},
  {path: 'profesor/foro', component: ForoComponent, canActivate: [ProfesorGuard]},
  {path: 'profesor/foro/ingresar', component: IForoComponent, canActivate: [ProfesorGuard]},
  {path: 'profesor/foro/comentario', component: MensajeForoComponent, canActivate: [ProfesorGuard]},
  {path: 'profesor/talleres', component: TalleresComponent, canActivate: [ProfesorGuard]},
  {path: 'profesor/talleres/ingresar', component: ITalleresComponent, canActivate: [ProfesorGuard]},
  {path: 'profesor/tareas', component: TareasComponent, canActivate: [ProfesorGuard]},
  {path: 'profesor/tareas/ingresar', component: ITareaComponent, canActivate: [ProfesorGuard]},
  {path: 'profesor/repositorio', component: RepositorioComponent, canActivate: [ProfesorGuard]},
  {path: 'profesor/editar/tarea', component: EditTareaComponent, canActivate: [ProfesorGuard]},
  {path: 'profesor/editar/evaluacion', component: EditEvaluacionComponent, canActivate: [ProfesorGuard]},
  {path: 'profesor/editar/taller', component: EditTallerComponent, canActivate: [ProfesorGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
