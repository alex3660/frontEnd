import { MateriaInterface } from './../../../models/materia-interface';
import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as XLSX from 'ts-xlsx';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-i-materia',
  templateUrl: './i-materia.component.html',
  styleUrls: ['./i-materia.component.css']
})
export class IMateriaComponent implements OnInit {

  public ngForm: FormGroup
  private pattern: any = /^\d*$/;
  
  
  constructor(private dataApi: DataApiService, private router: Router, private activatedRoute: ActivatedRoute, private modalService: NgbModal) {
    this.ngForm = this.createFormGroup()
   }
  createFormGroup(){
    return new FormGroup({
      codMateria: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      horas: new FormControl('', [Validators.required, Validators.pattern(this.pattern)]),
      })
  };
  get codMateria() { return this.ngForm.get('codMateria'); }
  get nombre() { return this.ngForm.get('nombre'); }
  get horas() { return this.ngForm.get('horas')}; 

  arrayBuffer:any;
  file:File;
  closeResult: string;
  incomingfile(event) 
    {
    this.file= event.target.files[0]; 
    }

  materia: MateriaInterface = {
    
    codMateria: '',
    nombre:'',
    numHoras:'',

  }
  listaAlumnos:  MateriaInterface[]=[];

  edit: boolean = false;

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.dataApi.getMateriaId(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.materia = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  nuevaMateria() {
    if(this.ngForm.valid){
    this.dataApi.saveMateria(this.materia)
      .subscribe(
        res => {
          Swal.fire(
            'Éxito!',
            'La Materia ha sido Ingresado con ÉXITO!',
            'success'
          )
          this.router.navigate(['/admin/materia']);
        },
        err =>{
          Swal.fire(
            'Error!',
            'Error en Datos!',
            'error'
          )
        }
      )
    }
    else{
      Swal.fire(
        'Error!',
        'Ingrese información de la materia correctamente!',
        'error'
      )
    }
  }

  open(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }


  Upload() {
    
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
        this.arrayBuffer = fileReader.result;
        var data = new Uint8Array(this.arrayBuffer);
        var arr = new Array();
        //for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
        for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
        var bstr = arr.join("");
        var workbook = XLSX.read(bstr, {type:"binary"});
        var first_sheet_name = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[first_sheet_name];
        this.listaAlumnos=(XLSX.utils.sheet_to_json(worksheet,{raw:true}));               
        
        
        for (var i =0; i< this.listaAlumnos.length; i++){
                 
          this.dataApi.saveMateria(XLSX.utils.sheet_to_json(worksheet,{raw:true})[i])
          .subscribe(
          res => {
          console.log(res);
          this.router.navigate(['/admin/materia']);
        },
        err => console.error(err)
      )
          
         
          
        
        }
        Swal.fire(
          'Exito!',
          'Materias Ingresadas con EXITO!',
          'success'
        )
    }
    fileReader.readAsArrayBuffer(this.file);


   
}



}
