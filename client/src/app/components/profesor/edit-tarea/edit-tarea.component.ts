import { tareaInterface } from 'src/app/models/tarea';
import { Component, OnInit } from '@angular/core';
import { ProfesorServiceService } from 'src/app/services/profesor-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-tarea',
  templateUrl: './edit-tarea.component.html',
  styleUrls: ['./edit-tarea.component.css']
})
export class EditTareaComponent implements OnInit {

  constructor(private profeApi: ProfesorServiceService, private router: Router) { }
  tarea : tareaInterface={};

  ngOnInit() {
    this.tarea = this.profeApi.getCurrentTarea();
    
  }

  
  editarTarea() {
    
    this.profeApi.editTarea(this.tarea)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/profesor/tareas']);
        },
        err => console.error(err)
      )
  }

}
