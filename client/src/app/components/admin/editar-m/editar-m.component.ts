import { MateriaInterface } from './../../../models/materia-interface';
import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-m',
  templateUrl: './editar-m.component.html',
  styleUrls: ['./editar-m.component.css']
})
export class EditarMComponent implements OnInit {

  constructor(private dataApi: DataApiService, private router: Router) { }
  materia:MateriaInterface={};

  ngOnInit() {
    this.materia=this.dataApi.getCurrentMateria();
  }

  editM() {
    
    this.dataApi.editMateria(this.materia)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/admin/materia']);
        },
        err => console.error(err)
      )
  }

}
