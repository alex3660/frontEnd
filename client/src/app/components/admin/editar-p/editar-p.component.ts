import { profesorInterface } from './../../../models/profesor-inteface';
import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-p',
  templateUrl: './editar-p.component.html',
  styleUrls: ['./editar-p.component.css']
})
export class EditarPComponent implements OnInit {

  constructor(private dataApi: DataApiService, private router: Router) { }
  user:profesorInterface={}

  ngOnInit() {
    this.user= this.dataApi.getCurrentP();
    console.log(this.user.idProfesor);
  }

  editP() {
    
    this.dataApi.editProfesor(this.user)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/admin/profesor']);
        },
        err => console.error(err)
      )
  }


}
