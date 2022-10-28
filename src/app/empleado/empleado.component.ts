import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre:string ="Nelson";
  apellido:string="Usuga";
  edad:number=32;
  empresa:string="netflix";

  /*getEdad(){
    return this.edad;
  }*/

  enableControls:boolean=false;
  userLogin:boolean=false;
  registerText:string ="No hay nadie registrado";

  constructor() { }

  ngOnInit(): void {
  }

  getUserLogIn(){
    this.userLogin=false;
  }

  setUserRegister(event:Event){
    this.registerText=  (<HTMLInputElement>event.target).value==="si"?"Usuario Registrado":"No hay nadie registrado";
    //this.registerText= "Usuario Registrado";
  }

  cambiaEmpresa(event:Event){

    this.empresa=(<HTMLInputElement>event.target).value;

  }

}
