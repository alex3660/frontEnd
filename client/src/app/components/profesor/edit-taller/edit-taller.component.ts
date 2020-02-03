import { tallerInterface } from './../../../models/taller';
import { Component, OnInit } from '@angular/core';
import { ProfesorServiceService } from 'src/app/services/profesor-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-taller',
  templateUrl: './edit-taller.component.html',
  styleUrls: ['./edit-taller.component.css']
})
export class EditTallerComponent implements OnInit {

  constructor(private profeApi: ProfesorServiceService, private router: Router) { }

  taller: tallerInterface;

  ngOnInit() {
    this.taller = this.profeApi.getCurrentTaller();

  }

  editarTaller() {
    
    this.profeApi.editTaller(this.taller)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/profesor/talleres']);
        },
        err => console.error(err)
      )
  }




}
