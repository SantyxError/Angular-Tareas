import { Component } from '@angular/core';
import { Tarea } from 'src/app/modelos/tarea';
import { TareasService } from 'src/app/Servicios/tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
})
export class TareasComponent {
  constructor(private servicioTareas: TareasService) {}

  //Creamos un string con "todas", que será la eleccion inicial que elegiremos
  seleccionado: string = 'Todas';

  //cargamos todas las tareas
  tareas: Array<Tarea> = this.servicioTareas.getTareas();

  //Creamos un total con las pendientes y las realizadas
  totales!: any;

  //De primeras, cargamos todas las tareas y tambien el total de "realizados" y "pendientes"
  ngOnInit() {
    this.tareas;
    this.totales = this.servicioTareas.getTotales();
  }

  //Creamos un metodo para filtrar tareas:
  //- Si el select NO coincide con "todas", sacará las "pendientes" o "realizadas"
  //- Si no, sacará todas
  filtrarTareas() {
    if (this.seleccionado != 'Todas') {
      this.tareas = this.servicioTareas.filtrarTareas(this.seleccionado);
    } else {
      this.tareas = this.servicioTareas.getTareas();
    }
  }
}
