import { FormControl, FormGroup, Validators, MaxLengthValidator } from '@angular/forms';
import { cursoInterface } from './../../../models/crurso-interface';
import { alumnoInterface } from './../../../models/alumno-interface';
import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as XLSX from 'ts-xlsx';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-i-alumno',
  templateUrl: './i-alumno.component.html',
  styleUrls: ['./i-alumno.component.css']
})
export class IAlumnoComponent implements OnInit {
  public ngForm: FormGroup
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private cedulaPattern: any = /^\d*$/;
  private pattern="[a-zA-Z ]{2,254}"
  
  constructor(private dataApi: DataApiService,
    private router: Router, private activatedRoute: ActivatedRoute, 
    private modalService: NgbModal) {
      this.ngForm = this.createFormGroup()
     }
    createFormGroup(){
      return new FormGroup({
        cedula: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.cedulaPattern)]),
        numUnico: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern(this.cedulaPattern)]),
        name1: new FormControl('', [Validators.required, Validators.pattern(this.pattern)]),
        name2: new FormControl('', [Validators.required, Validators.pattern(this.pattern)]),
        apellido1: new FormControl('', [Validators.required, Validators.pattern(this.pattern)]),
        apellido2: new FormControl('', [Validators.required, Validators.pattern(this.pattern)]),
        email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100),Validators.pattern(this.emailPattern)]), 
        telefono: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(10),Validators.pattern(this.cedulaPattern)]),
      })
    };

    get cedula() { return this.ngForm.get('cedula'); }
    get numUnico() { return this.ngForm.get('numUnico'); }
    get name1() { return this.ngForm.get('name1')}; 
    get name2() { return this.ngForm.get('name2')}; 
    get apellido1() { return this.ngForm.get('apellido1')}; 
    get apellido2() { return this.ngForm.get('apellido2')}; 
    get email() { return this.ngForm.get('email'); }
    get telefono() { return this.ngForm.get('telefono')}; 

  arrayBuffer:any;
  file:File;
  closeResult: string;
  incomingfile(event) 
    {
    this.file= event.target.files[0]; 
    }


  user: alumnoInterface = {
    numUnico: '',
    cedula: '',
    nombre1: '',
    nombre2: '',
    apellido1: '',
    apellido2: '',    
    correo: '',
    telefono: '',
    
  };

  listaAlumnos: alumnoInterface[]=[];

  edit: boolean = false;


  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.dataApi.getAlumnoId(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.user = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  nuevoAlumno() {
    if(this.ngForm.valid){
      this.dataApi.saveAlumno(this.user)
      .subscribe(
        res => {
          console.log(res);
          Swal.fire(
            'Exito!',
            'El Alumno ha sido Ingresado con EXITO!',
            'success'
          )
          this.router.navigate(['/admin/alumno']);
        },
        err => {console.error(err);
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
        'Ingrese información del alumno correctamente!',
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
        for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
        var bstr = arr.join("");
        var workbook = XLSX.read(bstr, {type:"binary"});
        var first_sheet_name = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[first_sheet_name];
        this.listaAlumnos=(XLSX.utils.sheet_to_json(worksheet,{raw:true}));            
        console.log(this.listaAlumnos)
        
        for (var i =0; i< this.listaAlumnos.length; i++){                 
          this.dataApi.saveAlumno(XLSX.utils.sheet_to_json(worksheet,{raw:true})[i])
          .subscribe(
          res => {
          console.log(res);
          Swal.fire(
          'Exito!',
          'Alumnos Ingresados con EXITO!',
          'success'
        )
          this.router.navigate(['/admin/alumno']);
        },
        err => {console.error(err)
          Swal.fire(
            'Error!',
            'Error en Datos!',
            'error'
          )
          
        }         
      ) 
        }
        
    }
    fileReader.readAsArrayBuffer(this.file);
  
}


  

  


}
