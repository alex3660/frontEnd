import { alumnoInterface } from './../../../models/alumno-interface';
import { alumnoCursoInterface } from './../../../models/alumno-curso';
import { DataApiService } from 'src/app/services/data-api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-a',
  templateUrl: './editar-a.component.html',
  styleUrls: ['./editar-a.component.css']
})
export class EditarAComponent implements OnInit {

  constructor(private dataApi: DataApiService, private router: Router) { }

  user:alumnoInterface={}


  ngOnInit() {
    this.user= this.dataApi.getCurrentAlumno();
    console.log(this.user.idAlumno);

  }

  nuevoAlumno() {
    
    this.dataApi.editAlumno(this.user)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/admin/alumno']);
        },
        err => console.error(err)
      )
  }

  

}
