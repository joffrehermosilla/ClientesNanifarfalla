import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',

})
export class ClientesComponent implements OnInit {

 clientes: Cliente[]=[
   {id:1, nombre: 'Joffre', apellido:'Hermosilla Salas', email:'joffre.hermosilla@gmail.com', createAt:'2020-12-12'},
   {id:2, nombre: 'Carlo', apellido:'Hermosilla Salas', email:'Carloa@gmail.com', createAt:'2020-12-12'},
   {id:3, nombre: 'Angela', apellido:'Hermosilla Salas', email:'Angela@gmail.com', createAt:'2020-12-12'},
   {id:4, nombre: 'Allison', apellido:'Hermosilla Salas', email:'Allison@gmail.com', createAt:'2020-12-12'},
   {id:5, nombre: 'Milagritos', apellido:'Hermosilla Salas', email:'Milagritos@gmail.com', createAt:'2020-12-12'},
   {id:6, nombre: 'Ladislao', apellido:'Hermosilla Salas', email:'Ladislaoa@gmail.com', createAt:'2020-12-12'},
   {id:7, nombre: 'Constanza', apellido:'Hermosilla Salas', email:'Constanzaa@gmail.com', createAt:'2020-12-12'},
   {id:8, nombre: 'Israel', apellido:'Hermosilla Salas', email:'Israel@gmail.com', createAt:'2020-12-12'},
   {id:9, nombre: 'Samantha', apellido:'Hermosilla Salas', email:'Samantha@gmail.com', createAt:'2020-12-12'},
   {id:10, nombre: 'Mirella', apellido:'Hermosilla Salas', email:'Mirella@gmail.com', createAt:'2020-12-12'},
   {id:11, nombre: 'Will', apellido:'Hermosilla Salas', email:'Will@gmail.com', createAt:'2020-12-12'},
   {id:12, nombre: 'Dudu', apellido:'Hermosilla Salas', email:'Dudu@gmail.com', createAt:'2020-12-12'},    
 ];
  constructor() { }

  ngOnInit() {
  }

}
