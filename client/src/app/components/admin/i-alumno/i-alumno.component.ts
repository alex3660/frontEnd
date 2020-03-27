import { cursoInterface } from './../../../models/crurso-interface';
import { alumnoInterface } from './../../../models/alumno-interface';
import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as XLSX from 'ts-xlsx';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-i-alumno',
  templateUrl: './i-alumno.component.html',
  styleUrls: ['./i-alumno.component.css']
})
export class IAlumnoComponent implements OnInit {

  constructor(private dataApi: DataApiService, 
    private router: Router, private activatedRoute: ActivatedRoute, 
    private modalService: NgbModal) { }

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
    
    this.dataApi.saveAlumno(this.user)
      .subscribe(
        res => {
          console.log(res);
          alert('ALUMNO INGRESADO CON EXITO!')
          this.router.navigate(['/admin/alumno']);
        },
        err => {console.error(err);
          alert('ERROR EN DATOS');
        }
        
      )
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
                 
          this.dataApi.saveAlumno(XLSX.utils.sheet_to_json(worksheet,{raw:true})[i])
          .subscribe(
          res => {
          console.log(res);
          //alert('Alumno Ingresado con EXITO!')
          this.router.navigate(['/admin/alumno']);
        },
        err => {console.error(err)
          //alert('ERROR EN DATOS');
        }         
      )           
        
        }
    }
    fileReader.readAsArrayBuffer(this.file);


   
}


  

  


}
