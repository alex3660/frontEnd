
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresarAlumnoComponent } from './components/admin/ingresar-alumno/ingresar-alumno.component';
import { IngresarMateriaComponent } from './components/admin/ingresar-materia/ingresar-materia.component';
import { IngresarProfesorComponent } from './components/admin/ingresar-profesor/ingresar-profesor.component';
import { CrearCursoComponent } from './components/admin/crear-curso/crear-curso.component';
import { AdminInicioComponent } from './components/admin/admin-inicio/admin-inicio.component';
import { AdminNavegacionComponent } from './components/admin/admin-navegacion/admin-navegacion.component';
import { EvaluacionesComponent } from './components/profesor/evaluaciones/evaluaciones.component';
import { TalleresComponent } from './components/profesor/talleres/talleres.component';
import { TareasComponent } from './components/profesor/tareas/tareas.component';
import { ForoComponent } from './components/profesor/foro/foro.component';
import { ProfesorInicioComponent } from './components/profesor/profesor-inicio/profesor-inicio.component';
import { ProfesorNavegacionComponent } from './components/profesor/profesor-navegacion/profesor-navegacion.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';

import { DataApiService } from './services/data-api.service';
import { MateriaIdComponent } from './components/admin/materia-id/materia-id.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Material } from './materials';
import { AdminNavegarComponent } from './components/admin/admin-inicio/admin-navegar/admin-navegar.component';
import { NavegComponent } from './components/naveg/naveg.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IAlumnoComponent } from './components/admin/i-alumno/i-alumno.component';
import { IMateriaComponent } from './components/admin/i-materia/i-materia.component';
import { IProfesorComponent } from './components/admin/i-profesor/i-profesor.component';
import { ICursoComponent } from './components/admin/i-curso/i-curso.component';
import { NavProfesorComponent } from './components/nav-profesor/nav-profesor.component';
import { ModalCursoComponent } from './components/admin/modal-curso/modal-curso.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FiltropPipe } from './pipes/filtrop.pipe';
import { FiltromPipe } from './pipes/filtrom.pipe';
import { FiltrocPipe } from './pipes/filtroc.pipe';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { AgregaAlumnoCursoComponent } from './components/admin/agrega-alumno-curso/agrega-alumno-curso.component';

import { EditarAComponent } from './components/admin/editar-a/editar-a.component';
import { EditarPComponent } from './components/admin/editar-p/editar-p.component';
import { EditarMComponent } from './components/admin/editar-m/editar-m.component';
import { EditarCComponent } from './components/admin/editar-c/editar-c.component';
import { DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarModule } from 'angular-calendar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ITareaComponent } from './components/profesor/i-tarea/i-tarea.component';
import { IEvaluacionesComponent } from './components/profesor/i-evaluaciones/i-evaluaciones.component';
import { IForoComponent } from './components/profesor/i-foro/i-foro.component';
import { ITalleresComponent } from './components/profesor/i-talleres/i-talleres.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresarAlumnoComponent,
    IngresarMateriaComponent,
    IngresarProfesorComponent,
    CrearCursoComponent,
    AdminInicioComponent,
    AdminNavegacionComponent,
    EvaluacionesComponent,
    TalleresComponent,
    TareasComponent,
    ForoComponent,
    ProfesorInicioComponent,
    ProfesorNavegacionComponent,
    LoginComponent,
    MateriaIdComponent,
    AdminNavegarComponent,
    NavegComponent,
    IAlumnoComponent,
    IMateriaComponent,
    IProfesorComponent,
    ICursoComponent,
    NavProfesorComponent,
    ModalCursoComponent,
    FilterPipe,
    FiltropPipe,
    FiltromPipe,
    FiltrocPipe,
    AgregarCursoComponent,
    AgregaAlumnoCursoComponent,
    
    EditarAComponent,
    EditarPComponent,
    EditarMComponent,
    EditarCComponent,
    ITareaComponent,
    IEvaluacionesComponent,
    IForoComponent,
    ITalleresComponent
    
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Material,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    FontAwesomeModule
    
       
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
